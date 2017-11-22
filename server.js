const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const api = require('./routes/api');
let students = require('./students.js')


app.set('view engine', 'pug');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use('/api', api)

app.get('/students', (req, res) => {
  res.render('students', {students: students})
})

app.post('/students', (req, res) => {
  let student = req.body.student_name;
  students.push(student);
  res.redirect('/students');
});

app.listen(port)