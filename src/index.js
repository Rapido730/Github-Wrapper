
const express = require('express')   // loading express'
const router = require('./GithubRouter/routers')

const app = express()              //   creating new app
const port = process.env.PORT || 3000  // creating a port


app.use(express.json())              // stating that json will be used to transfer data
app.use(router)                    


app.listen(port, () => {        // instructing app that listen to port given
  console.log('Server is up on port ' + port)
})


// require('./config/')