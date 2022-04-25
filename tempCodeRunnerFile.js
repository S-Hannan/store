app.post('/', async (req, res) => {
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