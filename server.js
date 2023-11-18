const express = require('express');
const app = express() ;
const router = require('./router/auth-router')


// Mount the router : To use the router in your main Express app , you can "mount"
// it at a specific URL prefix 
app.use('/api/auth' , router)


const PORT = 5000
app.listen(PORT , () => { 
    console.log(`Your server is running at Port ${PORT} `);
})  