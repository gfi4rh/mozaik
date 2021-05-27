import crypto from 'crypto'

const users = [
  {
    username : "admingfi",
    password : 't0moWXrlMz3t7JvCSBG2WUieFKHnikcoaMi8l53rpt8='
  }
]


const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  return sha256.update(password).digest('base64');
}

const checkIdentity = (username, password) => {
  const hashedPasssword = getHashedPassword(password)
  const user = users.find(u => u.username === username && u.password === hashedPasssword)
  return user != null
}

module.exports = {
  checkIdentity : checkIdentity
}