// Config dotenv
require('dotenv').config()
//Async Errors
require('express-async-errors')
//Hostname and Port
const hostname = '127.0.0.1'
const port = process.env.PORT || 8001
//Require Express
const express = require('express')
//App
const app = express()
//Error, Database, Routes
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const jsonProducts = require('./products.json')
const routes = require('./routes/products')

//View engine
app.set('view engine', 'ejs')
app.set('views', './public')
//Middlewares
app.use('/api/v1/products', express.static('./public'))
app.use('/api/v1/products', routes)
// app.use(notFoundMiddleware)
app.use(errorMiddleware)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('./public'))
//Routes
app.get('/', async (req, res) => {
    try {
        return res.render('index')
    } catch (err) {
        console.log(err)
        return res.json({ msg: err })
    }
})
// app.post('/', async (req, res) => {
//     try {
//         const { category } = req.body
//         if (category == 'All') {
//             return res.render('index')
//         }
//         else if (category == "Office") {
//            let result = jsonProducts.filter((item) => {
//                 return item.category == 'office'
//             })
//             return res.render({})
//         }
//         else if (category == "Living") {
//             return res.json({ category })
//         }
//         else if (category == "Kitchen") {
//             return res.json({ category })
//         }
//         else if (category == "Bedroom") {
//             return res.json({ category })
//         }
//         else if (category == "Dining") {
//             return res.json({ category })
//         }
//         else if (category == "Kids") {
//             return res.json({ category })
//         }
//         else {
//             res.json({ result: 'not matched' })
//         }
//     } catch (err) {
//         console.log(err)
//         return res.json({ msg: err })
//     }
// })

//Start
const start = async (url) => {
    try {
        //Connect DB
        await connectDB(url)
        app.listen(port, () => {
            console.log(`This server is listening on port http://${hostname}:${port}`)
        })
    } catch (err) {
        console.log(err)
    }
}
start(process.env.MONGO_URI)