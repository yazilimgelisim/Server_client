const express = require('express')
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')


app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.render('site/index')
})
app.post('/deneme', (req, res)=>{
    const {request} = req.body
    console.log(request)
    let data = {response:request}
    data = JSON.stringify(data)
    res.send(data)
})




app.listen(8000, ()=>{
    console.log(`Server is listening http://127.0.0.1:8000/`)
})