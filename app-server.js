const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon');
app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.static('public'))
app.use(require('./config/checkToken'));
app.use(favicon(path.join(__dirname, 'public', 'img', 'bang.png')))
app.use('/api/users', require('./routes/api/users'));
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

module.exports = app