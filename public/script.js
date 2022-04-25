'usestrict'

let products = document.querySelector('.products')
let searchBar = document.getElementById('search')
let clearbtn = document.getElementById('clear')
let sortPrice = document.querySelector('#sort')
let total = document.querySelector('.info p')
let click = document.querySelectorAll('#sort option')[0]


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
// let url = 'http://127.0.0.1:5321/api/v1/products/static'
fetch(url)
    .then(res => res.json())
    .then(json => {

        //Displaying data
        json.allProduct.map((item, i) => {
            products.append(fill(item.name, item.price, item.img))
            total.innerHTML = `${i + 1} Products Found`
        })
        //search bar logic
        let query;
        let filteredItems;
        let value;
        let categorizedItems;
        let option;
        searchBar.addEventListener('keyup', (e) => {
            if (value) {

                if (value == 'all') {
                    query = e.target.value.replace(/\s+/g, '').toLowerCase()
                    filteredItems = json.allProduct.filter((product) => {
                        // return product.name.replace(/\s+/g, '').toLowerCase().includes(query) || product.price.replace(/\s+/g, '').includes(query)
                        return product.name.replace(/\s+/g, '').toLowerCase().includes(query)
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
                } else {
                    query = e.target.value.replace(/\s+/g, '').toLowerCase()

                    filteredItems = json.allProduct.filter((product) => {
                        // return product.name.replace(/\s+/g, '').toLowerCase().includes(query) || product.price.replace(/\s+/g, '').includes(query) 
                        return product.name.replace(/\s+/g, '').toLowerCase().includes(query) && product.category == value
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
                }
            } else {
                query = e.target.value.replace(/\s+/g, '').toLowerCase()
                filteredItems = json.allProduct.filter((product) => {
                    // return product.name.replace(/\s+/g, '').toLowerCase().includes(query) || product.price.replace(/\s+/g, '').includes(query)
                    return product.name.replace(/\s+/g, '').toLowerCase().includes(query)
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
            }
        })
        //Category logic
        let category = document.querySelector('.categorybtn')
        let categories = document.querySelectorAll('.categories')
        category.addEventListener('click', (e) => {
            value = e.target.value.toLowerCase()
            if (value) {
                categories.forEach((btn) => {
                    return btn.style.borderBottom = 'none'
                })
                e.target.style.borderBottom = '2px solid black'
                if (value === 'all') {
                    if (option) {

                        if (option == 'lowest') {
                            if (query) {
                                products.innerHTML = ''
                                filteredItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price
                                })
                                filteredItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query)
                                })
                                filteredItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products Found`
                                    return products.append(fill(item.name, item.price, item.img))
                                })
                            } else {
                                categorizedItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price
                                })
                                products.innerHTML = ''
                                categorizedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products Found`
                                    return products.append(fill(item.name, item.price, item.img))
                                })
                            }
                        }
                        else if (option == 'highest') {
                            if (query) {
                                products.innerHTML = ''
                                filteredItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price
                                })
                                filteredItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query)
                                })
                                filteredItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products Found`
                                    return products.append(fill(item.name, item.price, item.img))
                                })
                            } else {
                                categorizedItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price
                                })

                                products.innerHTML = ''
                                categorizedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products Found`
                                    return products.append(fill(item.name, item.price, item.img))
                                })
                            }
                        }
                        else if (option == 'notsorted') {
                            if (query) {
                                products.innerHTML = ''
                                filteredItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7)
                                })
                                filteredItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query)
                                })
                                filteredItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products Found`
                                    return products.append(fill(item.name, item.price, item.img))
                                })
                            } else {
                                categorizedItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7)
                                })
                                products.innerHTML = ''
                                categorizedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products Found`
                                    return products.append(fill(item.name, item.price, item.img))
                                })
                            }
                        }
                        else {
                            console.log('kuch nhi hua')
                        }
                    } else {
                        if (query) {
                            products.innerHTML = ''
                            filteredItems = json.allProduct.filter((item) => {
                                return item.name.replace(/\s+/g, '').toLowerCase().includes(query)
                            })
                            filteredItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products Found`
                                return products.append(fill(item.name, item.price, item.img))
                            })
                        } else {
                            categorizedItems = json.allProduct.sort((a, b) => {
                                return a.img.substring(5, 7) - b.img.substring(5, 7)
                            })
                            products.innerHTML = ''
                            categorizedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products Found`
                                return products.append(fill(item.name, item.price, item.img))
                            })
                        }
                    }
                }
                else if (value === value) {
                    if (query) {
                        categorizedItems = json.allProduct.filter((item) => {
                            // return item.category == value && item.name.replace(/\s+/g, '').toLowerCase().includes(query) || item.price.replace(/\s+/g, '').includes(query)
                            return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value
                        })
                        total.innerHTML = `0 Products Found`
                        products.innerHTML = ''
                        categorizedItems.map((item, i) => {
                            total.innerHTML = `${i + 1} Products Found`
                            return products.append(fill(item.name, item.price, item.img))
                        })

                    } else {
                        categorizedItems = json.allProduct.filter((item) => {
                            return item.category == value
                        })
                        products.innerHTML = ''
                        categorizedItems.map((item, i) => {
                            total.innerHTML = `${i + 1} Products Found`
                            return products.append(fill(item.name, item.price, item.img))
                        })
                    }
                }
            }
        })
        //sorting logic
        sortPrice.addEventListener('input', (e) => {
            option = e.target.value
            let sortedItems;
            if (option == 'lowest') {
                if (value) {
                    if (value == 'all') {
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
                    } else {
                        if (query) {
                            sortedItems = json.allProduct.sort((a, b) => {
                                return a.price - b.price
                            })
                            sortedItems = json.allProduct.filter((item) => {
                                return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value
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
                            sortedItems = json.allProduct.filter((item) => {
                                return item.category == value
                            })
                            products.innerHTML = ''
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products Found`
                                return products.append(fill(item.name, item.price, item.img))
                            })
                        }
                    }

                } else {
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

                }
            } else if (option == 'highest') {

                if (value) {
                    if (value == 'all') {
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
                            sortedItems = json.allProduct.sort((a, b) => {
                                return b.price - a.price
                            })
                            products.innerHTML = ''
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products Found`
                                return products.append(fill(item.name, item.price, item.img))

                            })
                        }
                    } else {
                        if (query) {
                            sortedItems = json.allProduct.sort((a, b) => {
                                return b.price - a.price
                            })
                            sortedItems = json.allProduct.filter((item) => {
                                return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value
                            })
                            products.innerHTML = ''
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products Found`
                                return products.append(fill(item.name, item.price, item.img))
                            })
                        } else {
                            sortedItems = json.allProduct.sort((a, b) => {
                                return b.price - a.price
                            })
                            sortedItems = json.allProduct.filter((item) => {
                                return item.category == value
                            })
                            products.innerHTML = ''
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products Found`
                                return products.append(fill(item.name, item.price, item.img))
                            })
                        }
                    }
                } else {
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
                        sortedItems = json.allProduct.sort((a, b) => {
                            return b.price - a.price
                        })
                        products.innerHTML = ''
                        sortedItems.map((item, i) => {
                            total.innerHTML = `${i + 1} Products Found`
                            return products.append(fill(item.name, item.price, item.img))

                        })
                    }


                }
            } else if (option == 'notsorted') {
                if (value) {
                    if (value == 'all') {
                        if (query) {
                            console.log(query)
                            sortedItems = filteredItems.sort((a, b) => {
                                return a.img.substring(5, 7) - b.img.substring(5, 7)
                            })
                            products.innerHTML = ''
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products Found`
                                return products.append(fill(item.name, item.price, item.img))
                            })
                        } else {
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
                        if (query) {
                            sortedItems = json.allProduct.sort((a, b) => {
                                return a.img.substring(5, 7) - b.img.substring(5, 7)
                            })
                            sortedItems = json.allProduct.filter((item) => {
                                return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value
                            })
                            products.innerHTML = ''
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products Found`
                                return products.append(fill(item.name, item.price, item.img))
                            })
                        } else {
                            sortedItems = json.allProduct.sort((a, b) => {
                                return a.img.substring(5, 7) - b.img.substring(5, 7)
                            })
                            sortedItems = json.allProduct.filter((item) => {
                                return item.category == value
                            })
                            products.innerHTML = ''
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products Found`
                                return products.append(fill(item.name, item.price, item.img))
                            })
                        }
                    }
                } else {
                    if (query) {
                        sortedItems = filteredItems.sort((a, b) => {
                            return a.img.substring(5, 7) - b.img.substring(5, 7)
                        })
                        products.innerHTML = ''
                        sortedItems.map((item, i) => {
                            total.innerHTML = `${i + 1} Products Found`
                            return products.append(fill(item.name, item.price, item.img))
                        })
                    } else {
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
            categories.forEach((btn) => {
                return btn.style.borderBottom = 'none'
            })
            categories[0].style.borderBottom = '2px solid'
        })

    }).catch(err => console.log(err))


