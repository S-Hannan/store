'usestrict';
let html = document.querySelector('html');
let products = document.querySelector('.products');
let searchBar = document.getElementById('search');
let company = document.getElementById('company');
let clearbtn = document.getElementById('clear');
let sortPrice = document.querySelector('#sort');
let sortPriceTwo = document.querySelector('#sortTwo');
let total = document.querySelector('.info p');
let category = document.querySelector('.categorybtn');
let categories = document.querySelectorAll('.categories');
let click = document.querySelectorAll('#sort option')[0];
let shipping = document.getElementById('shipping');
let allcolors = document.getElementById('allcolors');
let burger = document.querySelector('.burger');
let panelDivs = document.querySelector("input[type='search']~div");
let templateDiv = document.getElementById('template');
let burger_panel;
let cat_com_col_pri = document.querySelector('.category, .company, .colors, .price');
let line = document.querySelectorAll('.line');
let crossParent = document.querySelector('.cross_parent');
// Burger logic
burger_panel = document.createElement('div');
burger_panel.classList.add('burger_panel');
burger_panel.innerHTML = `     
<div class="category">
    <p>Category</p>
    <div class="categorybtn">
        <input type="button" value="All" class="categories" id="all">
        <input type="button" value="Office" class="categories" id="office">
        <input type="button" value="Living" class="categories" id="living">
        <input type="button" value="Kitchen" class="categories" id="kitchen">
        <input type="button" value="Bedroom" class="categories" id="bedroom">
        <input type="button" value="Dining" class="categories" id="dining">
        <input type="button" value="Kids" class="categories" id="kids">
    </div>
</div>

<div class="company">
    <p>Company</p>
    <select name="Company" id="companyTwo">
        <option value="all">All</option>
        <option value="ikea">Ikea</option>
        <option value="marcos">Marcos</option>
        <option value="liddy">Liddy</option>
        <option value="caressa">Caressa</option>
    </select>
</div>
<div class="colors">
    <p>Colors</p>
    <div id="allcolorsTwo">
        <div class="circle" id="allTwo">All</div>
        <div class="circle" id="redTwo"></div>
        <div class="circle" id="greenTwo"></div>
        <div class="circle" id="blueTwo"></div>
        <div class="circle" id="blackTwo"></div>
        <div class="circle" id="yellowTwo"></div>
    </div>

</div>
<div class="price">
    <p>Price</p>
    <p class="range">26,000rs</p>
    <input type="range" name="" id="">
</div>
<div class="shipping">
    <label class="ship">
        Free Shipping
        <input type="checkbox" name="shipping" id="shippingTwo" value="shipping"><br>
    </label>
    <input type="button" id="clearTwo" value="Clear Filters">
</div>

`;
templateDiv.append(burger_panel);
burger_panel.style.width = '0';
burger.addEventListener('click', () => {
    burger_panel.style.transition = 'width 0.06s linear 0s ';
    let checking = burger_panel.classList.contains('checkClass');
    if (checking) {
        burger.style.justifyContent = 'space-between';
        line.forEach((line) => {
            line.style.display = 'block';
        });
        crossParent.style.display = 'none';
        burger_panel.style.width = '0';
        burger_panel.classList.remove('checkClass');
        html.style.overflowY = 'visible';
    } else {
        burger.style.justifyContent = 'center';
        line.forEach((line) => {
            line.style.display = 'none';
        });
        crossParent.style.display = 'block';
        burger_panel.classList.add('checkClass');
        burger_panel.style.width = '50vw';
        html.style.overflowY = 'hidden';

    }
});
// Burger_variables
let categoryTwo = document.querySelector('.burger_panel .category .categorybtn');
let categoriesTwo = document.querySelectorAll('.burger_panel .category .categorybtn .categories');
let companyTwo = document.getElementById('companyTwo');
let clearbtnTwo = document.getElementById('clearTwo');
let shippingTwo = document.getElementById('shippingTwo');
let allcolorsTwo = document.getElementById('allcolorsTwo');
let element;
//Color buttons
allcolorsTwo.addEventListener('click', (e) => {
    element = e.target.id;
    if (element == 'allcolorsTwo') {
        return;
    }
    else if (element == 'allTwo') {
        for (let i = 1; i < 6; i++) {
            allcolorsTwo.children[i].style.height = '18px';
            allcolorsTwo.children[i].style.width = '18px';
            allcolorsTwo.children[i].style.border = 'none';
        }
        return e.target.style.borderBottom = '2px solid black';
    } else {
        for (let i = 1; i < 6; i++) {
            allcolorsTwo.children[i].style.height = '18px';
            allcolorsTwo.children[i].style.width = '18px';
            allcolorsTwo.children[i].style.border = 'none';
        }
        allcolorsTwo.children[0].style.border = 'none';
        e.target.style.height = '15px';
        e.target.style.width = '15px';
        return e.target.style.border = '2px solid black';
    }
});
////////////////////////////////////////
allcolors.addEventListener('click', (e) => {
    element = e.target.id;
    if (element == 'allcolors') {
        return;
    }
    else if (element == 'all') {
        for (let i = 1; i < 6; i++) {
            allcolors.children[i].style.height = '1vw';
            allcolors.children[i].style.width = '1vw';
            allcolors.children[i].style.border = 'none';
        }
        return e.target.style.borderBottom = '2px solid black';
    } else {
        for (let i = 1; i < 6; i++) {
            allcolors.children[i].style.height = '1vw';
            allcolors.children[i].style.width = '1vw';
            allcolors.children[i].style.border = 'none';
        }
        allcolors.children[0].style.border = 'none';
        e.target.style.height = '0.9vw';
        e.target.style.width = '0.9vw';
        return e.target.style.border = '2px solid black';
    }
});
/////////////////////////////////////////////////////////


//Add product in productsDiv
const fill = (name, price, img) => {
    let product = document.createElement('div');
    product.classList.add('product');
    product.innerHTML = `
    <img src="${img}" alt="${name} image">
    <div class="desc">
        <div class="name">${name}</div>
        <div class="itemprice">${price}</div>
    </div>
    `;
    return product;
};
// //Fetching data
// let url = 'https://nodejs-store-api.herokuapp.com/static'
let url = 'http://127.0.0.1:5321/static';
fetch(url)
    .then(res => res.json())
    .then(json => {

        //Displaying data
        json.allProduct.map((item, i) => {
            products.append(fill(item.name, item.price, item.img));
            total.innerHTML = `${i + 1} Products`;
        });
        //dynamic variables
        let query;
        let filteredItems;
        let value;
        // value = 'all'
        let categorizedItems;
        let option;
        let name;
        let companyItems;

        //search bar logic
        searchBar.addEventListener('input', (e) => {
            if (name) {
                if (name == 'all') {
                    if (value) {

                        if (value == 'all') {
                            query = e.target.value.replace(/\s+/g, '').toLowerCase();
                            filteredItems = json.allProduct.filter((product) => {
                                return product.name.replace(/\s+/g, '').toLowerCase().includes(query);
                            });
                            products.innerHTML = '';
                            total.innerHTML = `0 Products`;
                            filteredItems.map((item, i) => {
                                products.append(fill(item.name, item.price, item.img));
                                if (i) {
                                    total.innerHTML = `${i + 1} Products`;
                                }
                                else if (i == 0) {
                                    total.innerHTML = `${i + 1} Products`;
                                }
                            });
                        } else {
                            query = e.target.value.replace(/\s+/g, '').toLowerCase();
                            filteredItems = json.allProduct.filter((product) => {
                                return product.name.replace(/\s+/g, '').toLowerCase().includes(query) && product.category == value;
                            });
                            products.innerHTML = '';
                            total.innerHTML = `0 Products`;
                            filteredItems.map((item, i) => {
                                products.append(fill(item.name, item.price, item.img));
                                if (i) {
                                    total.innerHTML = `${i + 1} Products`;
                                }
                                else if (i == 0) {
                                    total.innerHTML = `${i + 1} Products`;
                                }
                            });
                        }
                    } else {
                        query = e.target.value.replace(/\s+/g, '').toLowerCase();
                        filteredItems = json.allProduct.filter((product) => {

                            return product.name.replace(/\s+/g, '').toLowerCase().includes(query);
                        });
                        products.innerHTML = '';
                        total.innerHTML = `0 Products`;

                        filteredItems.map((item, i) => {
                            products.append(fill(item.name, item.price, item.img));
                            if (i) {
                                total.innerHTML = `${i + 1} Products`;
                            }
                            else if (i == 0) {
                                total.innerHTML = `${i + 1} Products`;
                            }
                        });
                    }
                } else {
                    console.log(name);
                    if (value) {

                        if (value == 'all') {
                            console.log('one');
                            query = e.target.value.replace(/\s+/g, '').toLowerCase();
                            filteredItems = json.allProduct.filter((product) => {
                                return product.name.replace(/\s+/g, '').toLowerCase().includes(query) && product.company == name;
                            });
                            console.log('two');

                            products.innerHTML = '';
                            total.innerHTML = `0 Products`;
                            filteredItems.map((item, i) => {
                                products.append(fill(item.name, item.price, item.img));
                                if (i) {
                                    total.innerHTML = `${i + 1} Products`;
                                }
                                else if (i == 0) {
                                    total.innerHTML = `${i + 1} Products`;
                                }
                            });
                        } else {
                            query = e.target.value.replace(/\s+/g, '').toLowerCase();
                            filteredItems = json.allProduct.filter((product) => {
                                return product.name.replace(/\s+/g, '').toLowerCase().includes(query) && product.category == value && product.company == name;
                            });
                            products.innerHTML = '';
                            total.innerHTML = `0 Products`;
                            filteredItems.map((item, i) => {
                                products.append(fill(item.name, item.price, item.img));
                                if (i) {
                                    total.innerHTML = `${i + 1} Products`;
                                }
                                else if (i == 0) {
                                    total.innerHTML = `${i + 1} Products`;
                                }
                            });
                        }
                    } else {
                        query = e.target.value.replace(/\s+/g, '').toLowerCase();
                        filteredItems = json.allProduct.filter((product) => {

                            return product.name.replace(/\s+/g, '').toLowerCase().includes(query) && product.company == name;
                        });
                        products.innerHTML = '';
                        total.innerHTML = `0 Products`;

                        filteredItems.map((item, i) => {
                            products.append(fill(item.name, item.price, item.img));
                            if (i) {
                                total.innerHTML = `${i + 1} Products`;
                            }
                            else if (i == 0) {
                                total.innerHTML = `${i + 1} Products`;
                            }
                        });
                    }
                }
            } else {
                if (value) {

                    if (value == 'all') {
                        query = e.target.value.replace(/\s+/g, '').toLowerCase();
                        filteredItems = json.allProduct.filter((product) => {
                            return product.name.replace(/\s+/g, '').toLowerCase().includes(query);
                        });
                        products.innerHTML = '';
                        total.innerHTML = `0 Products`;
                        filteredItems.map((item, i) => {
                            products.append(fill(item.name, item.price, item.img));
                            if (i) {
                                total.innerHTML = `${i + 1} Products`;
                            }
                            else if (i == 0) {
                                total.innerHTML = `${i + 1} Products`;
                            }
                        });
                    } else {
                        query = e.target.value.replace(/\s+/g, '').toLowerCase();

                        filteredItems = json.allProduct.filter((product) => {

                            return product.name.replace(/\s+/g, '').toLowerCase().includes(query) && product.category == value;
                        });
                        products.innerHTML = '';
                        total.innerHTML = `0 Products`;
                        filteredItems.map((item, i) => {
                            products.append(fill(item.name, item.price, item.img));
                            if (i) {
                                total.innerHTML = `${i + 1} Products`;
                            }
                            else if (i == 0) {
                                total.innerHTML = `${i + 1} Products`;
                            }
                        });
                    }
                } else {
                    query = e.target.value.replace(/\s+/g, '').toLowerCase();
                    filteredItems = json.allProduct.filter((product) => {

                        return product.name.replace(/\s+/g, '').toLowerCase().includes(query);
                    });
                    products.innerHTML = '';
                    total.innerHTML = `0 Products`;

                    filteredItems.map((item, i) => {
                        products.append(fill(item.name, item.price, item.img));
                        if (i) {
                            total.innerHTML = `${i + 1} Products`;
                        }
                        else if (i == 0) {
                            total.innerHTML = `${i + 1} Products`;
                        }
                    });
                }
            }

        });
        //Category logic
        categoryTwo?.addEventListener('click', (e) => {
            value = e.target.value.toLowerCase();
            if (name) {
                if (name == 'all') {
                    if (value) {
                        categoriesTwo.forEach((btn) => {
                            return btn.style.borderBottom = 'none';
                        });
                        e.target.style.borderBottom = '2px solid black';
                        if (value === 'all') {
                            if (option) {
                                if (option == 'lowest') {
                                    if (query) {
                                        products.innerHTML = '';
                                        filteredItems = json.allProduct.sort((a, b) => {
                                            return a.price - b.price;
                                        });
                                        filteredItems = json.allProduct.filter((item) => {
                                            return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                        });
                                        filteredItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    } else {
                                        categorizedItems = json.allProduct.sort((a, b) => {
                                            return a.price - b.price;
                                        });
                                        products.innerHTML = '';
                                        categorizedItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    }
                                }
                                else if (option == 'highest') {
                                    if (query) {
                                        products.innerHTML = '';
                                        filteredItems = json.allProduct.sort((a, b) => {
                                            return b.price - a.price;
                                        });
                                        filteredItems = json.allProduct.filter((item) => {
                                            return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                        });
                                        filteredItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    } else {
                                        categorizedItems = json.allProduct.sort((a, b) => {
                                            return b.price - a.price;
                                        });
                                        products.innerHTML = '';
                                        categorizedItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    }
                                }
                                else if (option == 'notsorted') {
                                    if (query) {
                                        products.innerHTML = '';
                                        filteredItems = json.allProduct.sort((a, b) => {
                                            return a.img.substring(5, 7) - b.img.substring(5, 7);
                                        });
                                        filteredItems = json.allProduct.filter((item) => {
                                            return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                        });

                                        filteredItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    } else {
                                        categorizedItems = json.allProduct.sort((a, b) => {
                                            return a.img.substring(5, 7) - b.img.substring(5, 7);
                                        });
                                        products.innerHTML = '';
                                        categorizedItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    }
                                }
                                else {
                                    console.log('kuch nhi hua');
                                }
                            } else {
                                if (query) {
                                    products.innerHTML = '';
                                    filteredItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });

                                    filteredItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    categorizedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    products.innerHTML = '';
                                    categorizedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        }
                        else if (value === value) {
                            if (query) {
                                categorizedItems = json.allProduct.filter((item) => {

                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                });

                                total.innerHTML = `0 Products`;
                                products.innerHTML = '';
                                categorizedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });

                            } else {

                                categorizedItems = json.allProduct.filter((item) => {
                                    return item.category == value;
                                });

                                products.innerHTML = '';
                                categorizedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    }
                } else {
                    if (value) {

                        categoriesTwo.forEach((btn) => {
                            return btn.style.borderBottom = 'none';
                        });
                        e.target.style.borderBottom = '2px solid black';
                        if (value === 'all') {
                            if (option) {

                                if (option == 'lowest') {
                                    if (query) {
                                        products.innerHTML = '';
                                        filteredItems = json.allProduct.sort((a, b) => {
                                            return a.price - b.price;
                                        });
                                        filteredItems = json.allProduct.filter((item) => {
                                            return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                        });
                                        filteredItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    } else {
                                        categorizedItems = json.allProduct.sort((a, b) => {
                                            return a.price - b.price;
                                        });
                                        categorizedItems = json.allProduct.filter((item) => {
                                            return item.company == name;
                                        });
                                        products.innerHTML = '';
                                        categorizedItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    }
                                }
                                else if (option == 'highest') {
                                    if (query) {
                                        products.innerHTML = '';
                                        filteredItems = json.allProduct.sort((a, b) => {
                                            return b.price - a.price;
                                        });
                                        filteredItems = json.allProduct.filter((item) => {
                                            return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                        });
                                        filteredItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    } else {
                                        categorizedItems = json.allProduct.sort((a, b) => {
                                            return b.price - a.price;
                                        });
                                        categorizedItems = json.allProduct.filter((item) => {
                                            return item.company == name;
                                        });
                                        products.innerHTML = '';
                                        categorizedItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    }
                                }
                                else if (option == 'notsorted') {
                                    if (query) {
                                        products.innerHTML = '';
                                        filteredItems = json.allProduct.sort((a, b) => {
                                            return a.img.substring(5, 7) - b.img.substring(5, 7);
                                        });
                                        filteredItems = json.allProduct.filter((item) => {
                                            return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                        });
                                        filteredItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    } else {
                                        categorizedItems = json.allProduct.sort((a, b) => {
                                            return a.img.substring(5, 7) - b.img.substring(5, 7);
                                        });
                                        categorizedItems = json.allProduct.filter((item) => {
                                            return item.company == name;
                                        });

                                        products.innerHTML = '';
                                        categorizedItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    }
                                }
                                else {
                                    console.log('kuch nhi hua');
                                }
                            } else {
                                if (query) {
                                    products.innerHTML = '';
                                    filteredItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                    });

                                    filteredItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    categorizedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    categorizedItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    categorizedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        }
                        else if (value === value) {
                            if (query) {
                                categorizedItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value && item.company == name;
                                });
                                total.innerHTML = `0 Products`;
                                products.innerHTML = '';
                                categorizedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });

                            } else {
                                categorizedItems = json.allProduct.filter((item) => {
                                    return item.category == value && item.company == name;
                                });
                                products.innerHTML = '';
                                categorizedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    }
                }
            } else {
                if (value) {
                    categoriesTwo.forEach((btn) => {
                        return btn.style.borderBottom = 'none';
                    });
                    e.target.style.borderBottom = '2px solid black';
                    if (value === 'all') {
                        if (option) {

                            if (option == 'lowest') {
                                if (query) {
                                    products.innerHTML = '';
                                    filteredItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    filteredItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    filteredItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    categorizedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    console.log('7');
                                    products.innerHTML = '';
                                    categorizedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                            else if (option == 'highest') {
                                if (query) {
                                    products.innerHTML = '';
                                    filteredItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    filteredItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    filteredItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    categorizedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    console.log('mil gaya 6');
                                    products.innerHTML = '';
                                    categorizedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                            else if (option == 'notsorted') {
                                if (query) {
                                    products.innerHTML = '';
                                    filteredItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    filteredItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    filteredItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    categorizedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    console.log('mil gaya 5');
                                    products.innerHTML = '';
                                    categorizedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                            else {
                                console.log('kuch nhi hua');
                            }
                        } else {
                            if (query) {

                                products.innerHTML = '';
                                filteredItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                });
                                filteredItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                categorizedItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                products.innerHTML = '';
                                categorizedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    }
                    else if (value === value) {
                        if (query) {
                            categorizedItems = json.allProduct.filter((item) => {

                                return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                            });
                            total.innerHTML = `0 Products`;
                            products.innerHTML = '';
                            categorizedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });

                        } else {
                            categorizedItems = json.allProduct.filter((item) => {
                                return item.category == value;
                            });
                            products.innerHTML = '';
                            categorizedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });
                        }
                    }
                }
            }
        });
        /////////////////////////////////////////////////////////////////////////
        category.addEventListener('click', (e) => {
            value = e.target.value.toLowerCase();
            if (name) {
                if (name == 'all') {
                    if (value) {
                        categories.forEach((btn) => {
                            return btn.style.borderBottom = 'none';
                        });
                        e.target.style.borderBottom = '2px solid black';
                        if (value === 'all') {
                            console.log(value);
                            if (option) {
                                if (option == 'lowest') {
                                    if (query) {
                                        products.innerHTML = '';
                                        filteredItems = json.allProduct.sort((a, b) => {
                                            return a.price - b.price;
                                        });
                                        filteredItems = json.allProduct.filter((item) => {
                                            return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                        });
                                        filteredItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    } else {
                                        categorizedItems = json.allProduct.sort((a, b) => {
                                            return a.price - b.price;
                                        });
                                        products.innerHTML = '';
                                        categorizedItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    }
                                }
                                else if (option == 'highest') {
                                    if (query) {
                                        products.innerHTML = '';
                                        filteredItems = json.allProduct.sort((a, b) => {
                                            return b.price - a.price;
                                        });
                                        filteredItems = json.allProduct.filter((item) => {
                                            return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                        });
                                        filteredItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    } else {
                                        categorizedItems = json.allProduct.sort((a, b) => {
                                            return b.price - a.price;
                                        });
                                        products.innerHTML = '';
                                        categorizedItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    }
                                }
                                else if (option == 'notsorted') {
                                    if (query) {
                                        products.innerHTML = '';
                                        filteredItems = json.allProduct.sort((a, b) => {
                                            return a.img.substring(5, 7) - b.img.substring(5, 7);
                                        });
                                        filteredItems = json.allProduct.filter((item) => {
                                            return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                        });

                                        filteredItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    } else {
                                        categorizedItems = json.allProduct.sort((a, b) => {
                                            return a.img.substring(5, 7) - b.img.substring(5, 7);
                                        });
                                        products.innerHTML = '';
                                        categorizedItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    }
                                }
                                else {
                                    console.log('kuch nhi hua');
                                }
                            } else {
                                if (query) {
                                    products.innerHTML = '';
                                    filteredItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });

                                    filteredItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    categorizedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    console.log('mil gaya 9');
                                    products.innerHTML = '';
                                    categorizedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        }
                        else if (value === value) {
                            if (query) {
                                categorizedItems = json.allProduct.filter((item) => {

                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                });

                                total.innerHTML = `0 Products`;
                                products.innerHTML = '';
                                categorizedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });

                            } else {

                                categorizedItems = json.allProduct.filter((item) => {
                                    return item.category == value;
                                });

                                products.innerHTML = '';
                                categorizedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    }
                } else {
                    if (value) {
                        categories.forEach((btn) => {
                            return btn.style.borderBottom = 'none';
                        });
                        e.target.style.borderBottom = '2px solid black';
                        if (value === 'all') {
                            console.log(value);
                            if (option) {

                                if (option == 'lowest') {
                                    if (query) {
                                        products.innerHTML = '';
                                        filteredItems = json.allProduct.sort((a, b) => {
                                            return a.price - b.price;
                                        });
                                        filteredItems = json.allProduct.filter((item) => {
                                            return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                        });
                                        filteredItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    } else {
                                        categorizedItems = json.allProduct.sort((a, b) => {
                                            return a.price - b.price;
                                        });
                                        categorizedItems = json.allProduct.filter((item) => {
                                            return item.company == name;
                                        });
                                        products.innerHTML = '';
                                        categorizedItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    }
                                }
                                else if (option == 'highest') {
                                    if (query) {
                                        products.innerHTML = '';
                                        filteredItems = json.allProduct.sort((a, b) => {
                                            return b.price - a.price;
                                        });
                                        filteredItems = json.allProduct.filter((item) => {
                                            return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                        });
                                        filteredItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    } else {
                                        categorizedItems = json.allProduct.sort((a, b) => {
                                            return b.price - a.price;
                                        });
                                        categorizedItems = json.allProduct.filter((item) => {
                                            return item.company == name;
                                        });
                                        products.innerHTML = '';
                                        categorizedItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    }
                                }
                                else if (option == 'notsorted') {
                                    if (query) {
                                        products.innerHTML = '';
                                        filteredItems = json.allProduct.sort((a, b) => {
                                            return a.img.substring(5, 7) - b.img.substring(5, 7);
                                        });
                                        filteredItems = json.allProduct.filter((item) => {
                                            return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                        });
                                        filteredItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    } else {
                                        categorizedItems = json.allProduct.sort((a, b) => {
                                            return a.img.substring(5, 7) - b.img.substring(5, 7);
                                        });
                                        categorizedItems = json.allProduct.filter((item) => {
                                            return item.company == name;
                                        });

                                        products.innerHTML = '';
                                        categorizedItems.map((item, i) => {
                                            total.innerHTML = `${i + 1} Products`;
                                            return products.append(fill(item.name, item.price, item.img));
                                        });
                                    }
                                }
                                else {
                                    console.log('kuch nhi hua');
                                }
                            } else {
                                if (query) {
                                    products.innerHTML = '';
                                    filteredItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                    });

                                    filteredItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    categorizedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    categorizedItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    categorizedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        }
                        else if (value === value) {
                            if (query) {
                                categorizedItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value && item.company == name;
                                });
                                total.innerHTML = `0 Products`;
                                products.innerHTML = '';
                                categorizedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });

                            } else {
                                categorizedItems = json.allProduct.filter((item) => {
                                    return item.category == value && item.company == name;
                                });
                                products.innerHTML = '';
                                categorizedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    }
                }
            } else {
                if (value) {
                    categories.forEach((btn) => {
                        // console.log('hua')
                        return btn.style.borderBottom = 'none';
                    });
                    e.target.style.borderBottom = '2px solid black';
                    if (value === 'all') {
                        if (option) {

                            if (option == 'lowest') {
                                if (query) {
                                    products.innerHTML = '';
                                    filteredItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    filteredItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    filteredItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    categorizedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    console.log('7');
                                    products.innerHTML = '';
                                    categorizedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                            else if (option == 'highest') {
                                if (query) {
                                    products.innerHTML = '';
                                    filteredItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    filteredItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    filteredItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    categorizedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    console.log('mil gaya 6');
                                    products.innerHTML = '';
                                    categorizedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                            else if (option == 'notsorted') {
                                if (query) {
                                    products.innerHTML = '';
                                    filteredItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    filteredItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    filteredItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    categorizedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    console.log('mil gaya 5');
                                    products.innerHTML = '';
                                    categorizedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                            else {
                                console.log('kuch nhi hua');
                            }
                        } else {
                            if (query) {
                                products.innerHTML = '';
                                filteredItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                });
                                filteredItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                categorizedItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                products.innerHTML = '';
                                categorizedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    }
                    else if (value === value) {
                        if (query) {
                            categorizedItems = json.allProduct.filter((item) => {

                                return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                            });
                            total.innerHTML = `0 Products`;
                            products.innerHTML = '';
                            categorizedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });

                        } else {
                            categorizedItems = json.allProduct.filter((item) => {
                                return item.category == value;
                            });
                            products.innerHTML = '';
                            categorizedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });
                        }
                    }
                }
            }
        });
        //sorting logic
        sortPriceTwo.addEventListener('input', (e) => {
            option = e.target.value;
            let sortedItems;
            if (name) {
                if (name == 'all') {
                    if (option == 'lowest') {
                        if (value) {
                            if (value == 'all') {
                                if (query) {
                                    sortedItems = filteredItems.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {

                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (query) {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.category == value;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }

                        } else {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {

                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }

                        }
                    } else if (option == 'highest') {

                        if (value) {
                            if (value == 'all') {
                                if (query) {
                                    sortedItems = filteredItems.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));

                                    });
                                }
                            } else {
                                if (query) {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.category == value;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        } else {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));

                                });
                            }


                        }
                    } else if (option == 'notsorted') {
                        if (value) {
                            if (value == 'all') {
                                if (query) {
                                    console.log(query);
                                    sortedItems = filteredItems.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    products.innerHTML = '';
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (query) {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.category == value;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        } else {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                products.innerHTML = '';
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    } else {
                        console.log('Error');
                    }
                } else {
                    console.log(name);
                    if (option == 'lowest') {
                        if (value) {
                            if (value == 'all') {
                                if (query) {
                                    sortedItems = filteredItems.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    sortedItems = filteredItems.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {

                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (query) {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }

                        } else {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                sortedItems = filteredItems.filter((item) => {
                                    return item.company == name;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {

                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.company == name;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }

                        }
                    } else if (option == 'highest') {

                        if (value) {
                            if (value == 'all') {
                                if (query) {
                                    sortedItems = filteredItems.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    sortedItems = filteredItems.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));

                                    });
                                }
                            } else {
                                if (query) {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        } else {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                sortedItems = filteredItems.filter((item) => {
                                    return item.company == name;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.company == name;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));

                                });
                            }


                        }
                    } else if (option == 'notsorted') {
                        if (value) {
                            if (value == 'all') {
                                if (query) {
                                    sortedItems = filteredItems.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    sortedItems = filteredItems.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (query) {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        } else {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                sortedItems = filteredItems.filter((item) => {
                                    return item.company == name;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.company == name;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    } else {
                        console.log('Error');
                    }

                }
            } else {
                if (option == 'lowest') {
                    if (value) {
                        if (value == 'all') {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {

                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        } else {
                            if (query) {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.category == value;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }

                    } else {
                        if (query) {
                            sortedItems = filteredItems.sort((a, b) => {
                                return a.price - b.price;
                            });
                            products.innerHTML = '';
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });
                        } else {

                            sortedItems = json.allProduct.sort((a, b) => {
                                return a.price - b.price;
                            });
                            products.innerHTML = '';
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });
                        }

                    }
                } else if (option == 'highest') {

                    if (value) {
                        if (value == 'all') {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));

                                });
                            }
                        } else {
                            if (query) {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.category == value;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    } else {
                        if (query) {
                            sortedItems = filteredItems.sort((a, b) => {
                                return b.price - a.price;
                            });
                            products.innerHTML = '';
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });
                        } else {
                            sortedItems = json.allProduct.sort((a, b) => {
                                return b.price - a.price;
                            });
                            products.innerHTML = '';
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));

                            });
                        }


                    }
                } else if (option == 'notsorted') {
                    if (value) {
                        if (value == 'all') {
                            if (query) {
                                console.log(query);
                                sortedItems = filteredItems.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                products.innerHTML = '';
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        } else {
                            if (query) {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.category == value;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    } else {
                        if (query) {
                            sortedItems = filteredItems.sort((a, b) => {
                                return a.img.substring(5, 7) - b.img.substring(5, 7);
                            });
                            products.innerHTML = '';
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });
                        } else {
                            products.innerHTML = '';
                            sortedItems = json.allProduct.sort((a, b) => {
                                return a.img.substring(5, 7) - b.img.substring(5, 7);
                            });
                            products.innerHTML = '';
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });
                        }
                    }
                } else {
                    console.log('Error');
                }

            }
        });
        /////////////////////////////////////////////////
        sortPrice.addEventListener('input', (e) => {
            option = e.target.value;
            let sortedItems;
            if (name) {
                if (name == 'all') {
                    if (option == 'lowest') {
                        if (value) {
                            if (value == 'all') {
                                if (query) {
                                    sortedItems = filteredItems.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {

                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (query) {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.category == value;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }

                        } else {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {

                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }

                        }
                    } else if (option == 'highest') {

                        if (value) {
                            if (value == 'all') {
                                if (query) {
                                    sortedItems = filteredItems.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));

                                    });
                                }
                            } else {
                                if (query) {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.category == value;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        } else {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));

                                });
                            }


                        }
                    } else if (option == 'notsorted') {
                        if (value) {
                            if (value == 'all') {
                                if (query) {
                                    console.log(query);
                                    sortedItems = filteredItems.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    products.innerHTML = '';
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (query) {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.category == value;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        } else {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                products.innerHTML = '';
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    } else {
                        console.log('Error');
                    }
                } else {
                    console.log(name);
                    if (option == 'lowest') {
                        if (value) {
                            if (value == 'all') {
                                if (query) {
                                    sortedItems = filteredItems.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    sortedItems = filteredItems.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {

                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (query) {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.price - b.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }

                        } else {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                sortedItems = filteredItems.filter((item) => {
                                    return item.company == name;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {

                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.company == name;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }

                        }
                    } else if (option == 'highest') {

                        if (value) {
                            if (value == 'all') {
                                if (query) {
                                    sortedItems = filteredItems.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    sortedItems = filteredItems.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));

                                    });
                                }
                            } else {
                                if (query) {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return b.price - a.price;
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        } else {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                sortedItems = filteredItems.filter((item) => {
                                    return item.company == name;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.company == name;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));

                                });
                            }


                        }
                    } else if (option == 'notsorted') {
                        if (value) {
                            if (value == 'all') {
                                if (query) {
                                    sortedItems = filteredItems.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    sortedItems = filteredItems.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (query) {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    sortedItems = json.allProduct.sort((a, b) => {
                                        return a.img.substring(5, 7) - b.img.substring(5, 7);
                                    });
                                    sortedItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    sortedItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        } else {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                sortedItems = filteredItems.filter((item) => {
                                    return item.company == name;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.company == name;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    } else {
                        console.log('Error');
                    }

                }
            } else {
                if (option == 'lowest') {
                    if (value) {
                        if (value == 'all') {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {

                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        } else {
                            if (query) {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price;
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.category == value;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }

                    } else {
                        if (query) {
                            sortedItems = filteredItems.sort((a, b) => {
                                return a.price - b.price;
                            });
                            products.innerHTML = '';
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });
                        } else {

                            sortedItems = json.allProduct.sort((a, b) => {
                                return a.price - b.price;
                            });
                            products.innerHTML = '';
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });
                        }

                    }
                } else if (option == 'highest') {

                    if (value) {
                        if (value == 'all') {
                            if (query) {
                                sortedItems = filteredItems.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));

                                });
                            }
                        } else {
                            if (query) {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price;
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.category == value;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    } else {
                        if (query) {
                            sortedItems = filteredItems.sort((a, b) => {
                                return b.price - a.price;
                            });
                            products.innerHTML = '';
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });
                        } else {
                            sortedItems = json.allProduct.sort((a, b) => {
                                return b.price - a.price;
                            });
                            products.innerHTML = '';
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));

                            });
                        }


                    }
                } else if (option == 'notsorted') {
                    if (value) {
                        if (value == 'all') {
                            if (query) {
                                console.log(query);
                                sortedItems = filteredItems.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                products.innerHTML = '';
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        } else {
                            if (query) {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.category == value;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            } else {
                                sortedItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);
                                });
                                sortedItems = json.allProduct.filter((item) => {
                                    return item.category == value;
                                });
                                products.innerHTML = '';
                                sortedItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    } else {
                        if (query) {
                            sortedItems = filteredItems.sort((a, b) => {
                                return a.img.substring(5, 7) - b.img.substring(5, 7);
                            });
                            products.innerHTML = '';
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });
                        } else {
                            products.innerHTML = '';
                            sortedItems = json.allProduct.sort((a, b) => {
                                return a.img.substring(5, 7) - b.img.substring(5, 7);
                            });
                            products.innerHTML = '';
                            sortedItems.map((item, i) => {
                                total.innerHTML = `${i + 1} Products`;
                                return products.append(fill(item.name, item.price, item.img));
                            });
                        }
                    }
                } else {
                    console.log('Error');
                }

            }
        });
        //Company logic
        companyTwo.addEventListener('input', (e) => {
            name = e.target.value;
            // query = e.target.value.replace(/\s+/g, '').toLowerCase()
            if (name) {
                if (value) {
                    if (option) {
                        if (query) {
                            //Price Sorting 
                            if (option == 'lowest') {
                                companyItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price;
                                });
                            } else if (option == 'highest') {
                                companyItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price;
                                });
                            } else if (option == 'notsorted') {
                                companyItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);

                                });
                            }
                            if (value == 'all') {
                                if (name == 'all') {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name && item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (name == 'all') {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        } else {
                            if (value == 'all') {
                                if (name == 'all') {

                                    products.innerHTML = '';
                                    json.allProduct.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (name == 'all') {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        }
                    } else {
                        if (query) {
                            if (value == 'all') {
                                if (name == 'all') {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name && item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (name == 'all') {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        } else {
                            if (value == 'all') {
                                if (name == 'all') {

                                    products.innerHTML = '';
                                    json.allProduct.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (name == 'all') {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        }
                    }
                } else {
                    if (option) {
                        if (query) {
                            if (option == 'lowest') {
                                if (name == 'all') {

                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return b.price - a.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else if (option == 'highest') {
                                if (name == 'all') {
                                    products.innerHTML = '';
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return b.price - a.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;

                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else if (option == 'notsorted') {
                                if (name == 'all') {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })

                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;

                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                console.log('There is no option');
                            }
                        } else {
                            if (option == 'lowest') {
                                if (name == 'all') {
                                    products.innerHTML = '';
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return b.price - a.price
                                    // })
                                    companyItems = json.allProduct.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else if (option == 'highest') {
                                if (name == 'all') {
                                    products.innerHTML = '';
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return b.price - a.price
                                    // })
                                    companyItems = json.allProduct.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else if (option == 'notsorted') {
                                if (name == 'all') {
                                    products.innerHTML = '';
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }

                            } else {
                                console.log('There is no option');
                            }
                        }
                    } else {
                        if (query) {
                            if (name == 'all') {
                                companyItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                });
                                products.innerHTML = '';
                                total.innerHTML = `0 Products`;
                                companyItems.map((item, i) => {
                                    products.append(fill(item.name, item.price, item.img));
                                    if (i) {
                                        total.innerHTML = `${i + 1} Products`;
                                    }
                                    else if (i == 0) {
                                        total.innerHTML = `${i + 1} Products`;
                                    }
                                });
                            } else {
                                let companyItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                });
                                products.innerHTML = '';
                                total.innerHTML = `0 Products`;
                                companyItems.map((item, i) => {
                                    products.append(fill(item.name, item.price, item.img));
                                    if (i) {
                                        total.innerHTML = `${i + 1} Products`;
                                    }
                                    else if (i == 0) {
                                        total.innerHTML = `${i + 1} Products`;
                                    }
                                });
                            }

                        } else {
                            if (name == 'all') {
                                companyItems = json.allProduct.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });

                            } else {
                                companyItems = json.allProduct.filter((item) => {
                                    return item.company == name;
                                });
                                total.innerHTML = ` 0 Products Found`;
                                products.innerHTML = '';
                                companyItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    }
                }
            } else {
                console.log('No company name');
            }
        });
        ///////////////////////////////////////////////////////////
        company.addEventListener('input', (e) => {
            name = e.target.value;
            // query = e.target.value.replace(/\s+/g, '').toLowerCase()
            if (name) {
                if (value) {
                    if (option) {
                        if (query) {
                            //Price Sorting 
                            if (option == 'lowest') {
                                companyItems = json.allProduct.sort((a, b) => {
                                    return a.price - b.price;
                                });
                            } else if (option == 'highest') {
                                companyItems = json.allProduct.sort((a, b) => {
                                    return b.price - a.price;
                                });
                            } else if (option == 'notsorted') {
                                companyItems = json.allProduct.sort((a, b) => {
                                    return a.img.substring(5, 7) - b.img.substring(5, 7);

                                });
                            }
                            if (value == 'all') {
                                if (name == 'all') {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name && item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (name == 'all') {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        } else {
                            if (value == 'all') {
                                if (name == 'all') {

                                    products.innerHTML = '';
                                    json.allProduct.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (name == 'all') {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        }
                    } else {
                        if (query) {
                            if (value == 'all') {
                                if (name == 'all') {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name && item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (name == 'all') {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        } else {
                            if (value == 'all') {
                                if (name == 'all') {

                                    products.innerHTML = '';
                                    json.allProduct.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                if (name == 'all') {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.category == value && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    total.innerHTML = `0 Products`;
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            }
                        }
                    }
                } else {
                    if (option) {
                        if (query) {
                            if (option == 'lowest') {
                                if (name == 'all') {

                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return b.price - a.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else if (option == 'highest') {
                                if (name == 'all') {
                                    products.innerHTML = '';
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return b.price - a.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;

                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else if (option == 'notsorted') {
                                if (name == 'all') {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })

                                    companyItems = json.allProduct.filter((item) => {
                                        return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;

                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else {
                                console.log('There is no option');
                            }
                        } else {
                            if (option == 'lowest') {
                                if (name == 'all') {
                                    products.innerHTML = '';
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return b.price - a.price
                                    // })
                                    companyItems = json.allProduct.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else if (option == 'highest') {
                                if (name == 'all') {
                                    products.innerHTML = '';
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return b.price - a.price
                                    // })
                                    companyItems = json.allProduct.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }
                            } else if (option == 'notsorted') {
                                if (name == 'all') {
                                    products.innerHTML = '';
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                } else {
                                    // companyItems = json.allProduct.sort((a, b) => {
                                    //     return a.price - b.price
                                    // })
                                    companyItems = json.allProduct.filter((item) => {
                                        return item.company == name;
                                    });
                                    products.innerHTML = '';
                                    companyItems.map((item, i) => {
                                        total.innerHTML = `${i + 1} Products`;
                                        return products.append(fill(item.name, item.price, item.img));
                                    });
                                }

                            } else {
                                console.log('There is no option');
                            }
                        }
                    } else {
                        if (query) {
                            if (name == 'all') {
                                companyItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query);
                                });
                                products.innerHTML = '';
                                total.innerHTML = `0 Products`;
                                companyItems.map((item, i) => {
                                    products.append(fill(item.name, item.price, item.img));
                                    if (i) {
                                        total.innerHTML = `${i + 1} Products`;
                                    }
                                    else if (i == 0) {
                                        total.innerHTML = `${i + 1} Products`;
                                    }
                                });
                            } else {
                                let companyItems = json.allProduct.filter((item) => {
                                    return item.name.replace(/\s+/g, '').toLowerCase().includes(query) && item.company == name;
                                });
                                products.innerHTML = '';
                                total.innerHTML = `0 Products`;
                                companyItems.map((item, i) => {
                                    products.append(fill(item.name, item.price, item.img));
                                    if (i) {
                                        total.innerHTML = `${i + 1} Products`;
                                    }
                                    else if (i == 0) {
                                        total.innerHTML = `${i + 1} Products`;
                                    }
                                });
                            }

                        } else {
                            if (name == 'all') {
                                companyItems = json.allProduct.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });

                            } else {
                                companyItems = json.allProduct.filter((item) => {
                                    return item.company == name;
                                });
                                total.innerHTML = ` 0 Products Found`;
                                products.innerHTML = '';
                                companyItems.map((item, i) => {
                                    total.innerHTML = `${i + 1} Products`;
                                    return products.append(fill(item.name, item.price, item.img));
                                });
                            }
                        }
                    }
                }
            } else {
                console.log('No company name');
            }
        });
        //Clearbtn
        clearbtn.addEventListener('click', () => {
            searchBar.value = '';
            sortPrice.innerHTML = `
            <option value="notsorted">Price(Not Sorted)</option>
            <option value="lowest">Price(Lowest)</option>
            <option value="highest">Price(Highest)</option>`;
            categories.forEach((btn) => {
                return btn.style.borderBottom = 'none';
            });
            categories[0].style.borderBottom = '2px solid';
            company.innerHTML = `
            <option value="all">All</option>
            <option value="ikea">Ikea</option>
            <option value="marcos">Marcos</option>
            <option value="liddy">Liddy</option>
            <option value="caressa">Caressa</option>`;
            let endResult = json.allProduct.sort((a, b) => {
                return a.img.substring(5, 7) - b.img.substring(5, 7);
            });
            products.innerHTML = '';
            endResult.map((item, i) => {
                total.innerHTML = `${i + 1} Products`;
                return products.append(fill(item.name, item.price, item.img));
            });
            for (let i = 1; i < 6; i++) {
                allcolors.children[i].style.height = '18px';
                allcolors.children[i].style.width = '18px';
                allcolors.children[i].style.border = 'none';
            }
            allcolors.children[0].style.borderBottom = '2px solid black';

            if (shipping.checked) {
                shipping.checked = false;

            }
            query = '';
            value = 'all';
            name = 'all';
            option = 'notsorted';
        });
        ////////////////////////////////////////////////
        clearbtnTwo.addEventListener('click', () => {
            searchBar.value = '';
            sortPrice.innerHTML = `
            <option value="notsorted">Price(Not Sorted)</option>
            <option value="lowest">Price(Lowest)</option>
            <option value="highest">Price(Highest)</option>`;
            sortPriceTwo.innerHTML = `
            <option value="notsorted">Sort by</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>`;
            categoriesTwo.forEach((btn) => {
                return btn.style.borderBottom = 'none';
            });
            categoriesTwo[0].style.borderBottom = '2px solid';
            companyTwo.innerHTML = `
            <option value="all">All</option>
            <option value="ikea">Ikea</option>
            <option value="marcos">Marcos</option>
            <option value="liddy">Liddy</option>
            <option value="caressa">Caressa</option>`;
            let endResult = json.allProduct.sort((a, b) => {
                return a.img.substring(5, 7) - b.img.substring(5, 7);
            });
            products.innerHTML = '';
            endResult.map((item, i) => {
                total.innerHTML = `${i + 1} Products`;
                return products.append(fill(item.name, item.price, item.img));
            });
            for (let i = 1; i < 6; i++) {
                allcolorsTwo.children[i].style.height = '18px';
                allcolorsTwo.children[i].style.width = '18px';
                allcolorsTwo.children[i].style.border = 'none';
            }
            allcolorsTwo.children[0].style.borderBottom = '2px solid black';
            if (shippingTwo.checked) {
                shippingTwo.checked = false;
            }
            query = '';
            value = 'all';
            name = 'all';
            option = 'notsorted';
        });
    }).catch(err => console.log(err))


