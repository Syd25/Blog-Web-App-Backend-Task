const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')
const header_middleware = require("./middlewares/header")
const connectDB = require('./config/db')

// Load config
dotenv.config({ path: './db/config.env' })

// Passport config
require('./config/passport')(passport)

connectDB()

const app = express()

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))

// Method override
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method
      delete req.body._method
      return method
    }
  })
)




// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)



// Set global var
app.use(function (req, res, next) {
  res.locals.user = req.user || null
  next()
})

let z=path.join(__dirname, 'public')
// Static folder
app.use(express.static(z))




// Routes
app.use('/user', require('./routes/user'))
app.use('/index', require('./routes/index'))
app.use('/stories', require('./routes/stories'))


//For Testing purposes only
app.get('/test', (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(`Server running on port ${PORT}`)
)


