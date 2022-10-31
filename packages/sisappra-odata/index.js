'use strict'

const fp = require('fastify-plugin')
const parseOData = require("./odata-sequelize");

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

module.exports = fp(async function (fastify, opts) {
    const getPagingData = (data, page, limit) => {
        const { count: total_items, rows: records } = data;
        const current_page = page ? +page : 0;
        const total_pages = Math.ceil(total_items / limit);

        return { success: true, total_items, data: records, total_pages, current_page };
    };

    const getPagination = (page, size) => {
        const limit = size ? +size : 10;
        const offset = page ? page * limit : 0;

        return { limit, offset };
    };

    fastify.decorate('odata', {
        query: function (urlQuery) {
            let query = []
            if(urlQuery.$filter)
                query.push(`$filter=${urlQuery.$filter}`)
            if(urlQuery.$top)
                query.push(`$top=${urlQuery.$top}`)
            if(urlQuery.$skip)
                query.push(`$skip=${urlQuery.$skip}`)
            if(urlQuery.$select)
                query.push(`$select=${urlQuery.$select}`)
            if(urlQuery.$orderby)
                query.push(`$orderby=${urlQuery.$orderby}`)

            if(query.length > 0){
                let dbquery = parseOData(query.join('&'), fastify.db)
                dbquery.where = {...dbquery.where, ...fastify.dbfilters.notDeleted}
                return dbquery
            }
            else
                return { where: fastify.dbfilters.notDeleted }
        },
        replyPaging: async (request, reply, dbSet) => {
            const { $page, $top } = request.query
            let query = fastify.odata.query(request.query)

            const { limit, offset } = getPagination($page, $top)

            query.limit = limit
            query.offset = offset

            const data = await dbSet.findAndCountAll(query)
            const response = getPagingData(data, $page, limit)
            return reply.send(response)
        }
    })
})