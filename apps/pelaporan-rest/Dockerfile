FROM node:18-alpine AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /usr/src/app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=pelaporan-rest --docker
# Add lockfile and package.json's of isolated subworkspace
FROM node:18-alpine AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /usr/src/app
# First install dependencies (as they change less often)
# COPY .gitignore .gitignore
COPY --from=builder /usr/src/app/out/json/ .
COPY --from=builder /usr/src/app/out/yarn.lock ./yarn.lock
RUN yarn install

FROM node:18-alpine AS sourcer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /usr/src/app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
RUN yarn turbo run build test --scope=pelaporan-rest --includeDependencies --no-deps

# Build the project and its dependencies
# COPY --from=builder /usr/src/app/out/full/ .
# COPY turbo.json turbo.json
# RUN yarn turbo run build --filter=pelaporan-rest...

FROM node:18-alpine AS runner
WORKDIR /usr/src/app

COPY --from=installer /usr/src/app .

# CMD node apps/api/dist/index.js
EXPOSE 3000
CMD [ "npm", "start" ]