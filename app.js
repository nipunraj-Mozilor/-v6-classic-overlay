const express = require('express')
const path = require('path')

const app = express()
const port = 5001

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

// Listen on port 5000
app.listen(process.env.PORT || port, () =>
  console.log(`Listening on port ${port}`)
)
