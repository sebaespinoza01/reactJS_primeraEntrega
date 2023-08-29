const products =[
    { id: "1", name: "iPhone 12", price: 799, category: "phones" },
    { id: "2", name: "iPhone 12 Pro", price: 999, category: "phones" },
    { id: "3", name: "iPhone 12 Pro Max", price: 1099, category: "phones" },
    { id: "4", name: "iPad Pro", price: 799, category: "tablets" },
    { id: "5", name: "iPad Air", price: 599, category: "tablets" },
    { id: "6", name: "iPad", price: 329, category: "tablets" },
    { id: "7", name: "Macbook Air", price: 999, category: "notebooks" },
    { id: "8", name: "Macbook Pro 13-inch", price: 1299, category: "notebooks" },
    { id: "9", name: "Macbook Pro 16-inch", price: 2399, category: "notebooks" },
]

//getproduct
export const getProduct = (id) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const product = products.find((p) => p.id === id)
            
            if (product) {
                resolve(product)
            } else {
                reject("producto no encontrado")
            }
        }, 1000)
    })
}

//getproducts 
export const getProducts = (category) => {
    return new Promise((resolve,) => {
        setTimeout(() =>{
            const productsFiltered = category ? products.filter(product => product.category === category)
            :products;

            resolve(productsFiltered);

        }, 1000)
    })
}
