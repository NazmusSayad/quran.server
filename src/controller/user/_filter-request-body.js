module.exports = requestBody => {
  const newBody = {
    name: requestBody.name,
    email: requestBody.email,
    password: requestBody.password,
  }
  for (let key in newBody) if (!newBody[key]) delete newBody[key]
  return newBody
}
