var express = require('express')
  , logger = require('morgan')
  , app = express()
  , homepage = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
  , about = require('jade').compileFile(__dirname + '/source/templates/about.jade')
  , resume = require('jade').compileFile(__dirname + '/source/templates/resume.jade')
  , contact = require('jade').compileFile(__dirname + '/source/templates/contact.jade')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    var html = homepage({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/about', function(req, res) {
  try {
    var html = about({ title: 'About'})
    res.send(html)
  } catch (e) {
    next(e)
  }
});

app.get('/resume', function(req,res) {
  try {
      var html = resume({ title: 'Resume' })
      res.send(html)
  } catch (e) {
      next(e)
  }
});

app.get('/contact', function(req,res) {
  try {
      var html = contact({ title: 'Contact' })
      res.send(html)
  } catch (e) {
      next(e)
  }
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
