import crypto from 'crypto'

const users = [
  {
    username : "admingfi",
    password : 't0moWXrlMz3t7JvCSBG2WUieFKHnikcoaMi8l53rpt8=' //passgfi
  }
]

const authTokens = {}

const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(password).digest('base64');
  return hash;
}

const generateAuthToken = () => {
  return crypto.randomBytes(30).toString('hex');
}


const checkIdentity = (username, password) => {
  var authToken = null
  const hashedPasssword = getHashedPassword(password)
  const user = users.find(u => u.username === username && u.password === hashedPasssword)

  if(user){
    authToken = generateAuthToken()
    authTokens[authToken] = user
  }

  return authToken
}

module.exports = {
  checkIdentity : checkIdentity
}