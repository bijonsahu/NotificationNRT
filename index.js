const express = require ('express')
const app = express()


app.get('/',(req,res)=> res.send('welcome to Kaizen'))
app.listen(3000,()=>console.log('app listening to 3000 port'))
