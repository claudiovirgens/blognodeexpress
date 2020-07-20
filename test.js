const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true});

BlogPost.create({
    title:'Today Isn´t The lazy Day',
    body:'if bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla Vanjiee bla The Mythbuster´s Guide do Saving Money on Energy Bills'
}, 
(error,blogspot)=>{
    console.log(error,blogspot)
})

BlogPost.find({},(error,blogspot)=>{
    console.log(error,blogspot)
})

BlogPost.find({
    title:'The Mythbuster´s Guide do Saving Money on Energy Bills'
},(error,blogspot)=>{
    console.log(error,blogspot)
})

BlogPost.find({
    title:'/The/'
},(error,blogspot)=>{
    console.log(error,blogspot)
})