const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(fileUpload())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 4000

app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' })
  }

  const file = req.files.file

  file.mv(`${__dirname}/images/${file.name}`, (err) => {
    if (err) {
      console.error(err)
      return res.status(500).send(err)
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
  })
})

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`)
})
