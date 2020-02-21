const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]
let verifiedAccount = {}
let loginStatus = ''
function checkUsers(email, password) {
  for (const user of users) {
    if (email === user.email && password === user.password) {
      loginStatus = 'OK'
      verifiedAccount = user
      return { loginStatus, verifiedAccount }
    } else {
      loginStatus = 'NG'
      verifiedAccount = {}
    }
  }
  return { loginStatus, verifiedAccount }
}
module.exports = checkUsers
