import crypto from 'crypto'

const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  return sha256.update(password).digest('base64');
}

const checkIdentity = (username, password, users) => {
  const hashedPasssword = getHashedPassword(password)
  const user = users.find(u => u.username === username && u.password === hashedPasssword)
  return user != null
}

module.exports = {
  checkIdentity : checkIdentity
}