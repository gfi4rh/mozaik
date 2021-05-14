import crypto from 'crypto'

const user = [
  {
    username : "admingfi",
    password : 't0moWXrlMz3t7JvCSBG2WUieFKHnikcoaMi8l53rpt8=' //passgfi
  }
]

const authTokens = []

export const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(password).digest('base64');
  return hash;
}



