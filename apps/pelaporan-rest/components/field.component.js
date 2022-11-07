
const Field = ({ name, type, groupName, required, min, max, refvalue}) => {
  return { name, type, groupName, required, min, max, refvalue };
}

module.exports = { Field }