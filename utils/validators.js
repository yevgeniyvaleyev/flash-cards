export const isDataValid = (data, requiredFields) =>
  requiredFields.every(field => data[field] !== undefined)