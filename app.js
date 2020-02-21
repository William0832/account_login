const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkUser = require('./checkUsers')
const port = 3000

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set routes
app.get('/', (req, res) => {
  res.render('index')
})

// POST
app.post('/', (req, res) => {
  let email = req.body.email
  const password = req.body.password
  const storeEmail = req.body.storeEmail
  const logout = req.body.logout

  // check user
  const results = checkUser(email, password)
  const loginStatus = results.loginStatus
  const verifiedAccount = results.verifiedAccount
  // console.log('loginStatus:', loginStatus);
  // OK => show welcome page
  if (loginStatus === 'OK') {
    // console.log('verifiedAccount:', verifiedAccount);
    res.render('welcome_page', {
      firstName: verifiedAccount.firstName
    })
  } else if (logout === 'on') {
    // logout
    res.render('index')
  } else {
    // NG => keep email and show error message in login page
    const errorMessage = 'Username/Password 錯誤'
    // remove email if user do not store email
    if (storeEmail !== 'on') {
      email = ''
    }
    res.render('index', { email, errorMessage, storeEmail })
  }
})

// listen on port
app.listen(port, () => {
  console.log('Express server is listen on localhost:3000')
})
