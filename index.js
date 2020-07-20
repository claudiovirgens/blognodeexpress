const express = require('express')

const app = new express()
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true})
const ejs = require('ejs')
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


const fileUpload = require('express-fileupload')
app.set('view engine','ejs')
app.use(fileUpload())

const validateMiddleware = require('./middleware/validationMiddleware');
app.use('/posts/store',validateMiddleware) 

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')

app.listen(4000,()=>{
    console.log('App Listening on port 4000')
})

app.get('/',homeController)

app.get('/post/:id',getPostController)

app.get('/posts/new',newPostController)

app.post('/posts/store',storePostController)

