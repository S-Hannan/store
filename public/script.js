'usestrict'

let products = document.querySelector('.products')
let searchBar = document.getElementById('search')
let clearbtn = document.getElementById('clear')
let sortPrice = document.querySelector('#sort')
let total = document.querySelector('.info p')
let click = document.querySelectorAll('#sort option')[0]
// console.log(click)


//Add product in productsDiv
const fill = (name, price, img) => {
    let product = document.createElement('div')
    product.classList.add('product')
    product.innerHTML = `
    <img src="${img}" alt="${name} image">
    <div class="desc">
        <div class="name">${name}</div>
        <div class="itemprice">${price}</div>
    </div>
    `
    return product
}
// //Fetching data
let url = 'https://nodejs-store-api.herokuapp.com/api/v1/products/static'
fetch(url)
    .then(res => res.json())
    .then(json => {

        //Displaying data
        json.allProduct.map((item, i) => {
            products.append(fill(item.name, item.price, item.img))
            total.innerHTML = `${i + 1} Products Found`
        })
        console.log(json.allProduct)
        //search bar logic
        let query;
        let filteredItems
        searchBar.addEventListener('keyup', (e) => {
            query = e.target.value.replace(/\s+/g, '').toLowerCase()
            filteredItems = json.allProduct.filter((product) => {
                return product.name.replace(/\s+/g, '').toLowerCase().includes(query) || product.price.replace(/\s+/g, '').includes(query)
            })
            products.innerHTML = ''
            total.innerHTML = `0 Products Found`

            filteredItems.map((item, i) => {
                products.append(fill(item.name, item.price, item.img))
                if (i) {
                    total.innerHTML = `${i + 1} Products Found`
                }
                else if (i == 0) {
                    total.innerHTML = `${i + 1} Products Found`
                }
            })
        })
        //sorting logic
        let option
        sortPrice.addEventListener('input', (e) => {
            option = e.target.value
            console.log(option)

            let sortedItems;
            // console.log(query)
            if (option == 'lowest') {
                if (query) {
                    sortedItems = filteredItems.sort((a, b) => {
                        return a.price - b.price
                    })
                    products.innerHTML = ''
                    sortedItems.map((item, i) => {
                        total.innerHTML = `${i + 1} Products Found`
                        return products.append(fill(item.name, item.price, item.img))
                    })
                } else {

                    sortedItems = json.allProduct.sort((a, b) => {
                        return a.price - b.price
                    })
                    products.innerHTML = ''
                    sortedItems.map((item, i) => {
                        total.innerHTML = `${i + 1} Products Found`
                        return products.append(fill(item.name, item.price, item.img))
                    })
                }
            } else if (option == 'highest') {
                if (query) {
                    sortedItems = filteredItems.sort((a, b) => {
                        return b.price - a.price
                    })
                    products.innerHTML = ''
                    sortedItems.map((item, i) => {
                        total.innerHTML = `${i + 1} Products Found`
                        return products.append(fill(item.name, item.price, item.img))
                    })
                } else {
                    console.log(json.allProduct)
                    sortedItems = json.allProduct.sort((a, b) => {
                        return b.price - a.price
                    })
                    products.innerHTML = ''
                    sortedItems.map((item, i) => {
                        total.innerHTML = `${i + 1} Products Found`
                        return products.append(fill(item.name, item.price, item.img))

                    })
                }


            } else if (option == 'notsorted') {
                if (query) {
                    products.innerHTML = ''
                    sortedItems = filteredItems.sort((a, b) => {
                        return a.img.substring(5, 7) - b.img.substring(5, 7)
                    })
                    products.innerHTML = ''
                    sortedItems.map((item, i) => {
                        total.innerHTML = `${i + 1} Products Found`
                        return products.append(fill(item.name, item.price, item.img))

                    })
                } else {
                    console.log(json.allProduct)

                    searchBar.value = ''
                    products.innerHTML = ''
                    sortedItems = json.allProduct.sort((a, b) => {
                        return a.img.substring(5, 7) - b.img.substring(5, 7)
                    })
                    products.innerHTML = ''
                    sortedItems.map((item, i) => {
                        total.innerHTML = `${i + 1} Products Found`
                        return products.append(fill(item.name, item.price, item.img))

                    })
                }
            } else {
                console.log('Error')
            }

        })
        //Clearbtn
        clearbtn.addEventListener('click', () => {
            searchBar.value = ''
            products.innerHTML = ''
            let endResult = json.allProduct.sort((a, b) => {
                return a.img.substring(5, 7) - b.img.substring(5, 7)
            })
            products.innerHTML = ''
            endResult.map((item, i) => {
                total.innerHTML = `${i + 1} Products Found`
                return products.append(fill(item.name, item.price, item.img))

            })
            sortPrice.innerHTML = `
            <option value="notsorted">Price(Not Sorted)</option>
            <option value="lowest">Price(Lowest)</option>
            <option value="highest">Price(Highest)</option>`
            option = 'notsorted'
            console.log(option)
        })

    }).catch(err => console.log(err))


