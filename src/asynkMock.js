const products =[
    {id:'1',name: 'Buzo Lizamon',precio: 8999,img:'https://www.cristobalcolon.com/fullaccess/item27237foto114292.jpg',category:"Hombre", stock:15,description:'Descripcion'},
    {id:'2',name:'Buzo Redacuar', precio: 12999, img:'https://www.cristobalcolon.com/fullaccess/item21860foto111693.jpg',category:"Hombre", stock:15,description:'Descripcion2'},
    {id:'3',name:'Buzo Nomenclatura', precio: 8999, img:'https://www.cristobalcolon.com/fullaccess/item26955foto112873.jpg',category:"Hombre", stock:'15',description:'Descripcion3'},
    {id:'4',name: 'Buzo Supremacia',precio: 14000,img:'https://www.cristobalcolon.com/fullaccess/item27136foto113929.jpg',category:"Hombre", stock:15,description:'Descripcion4'},
    {id:'5',name:'Buzo Boreal', precio: 12999, img:'https://www.cristobalcolon.com/fullaccess/item26957foto112889.jpg',category:"Hombre", stock:15,description:'Descripcion5'},
    {id:'6',name: 'Buzo Sensin',precio: 8999,img:'https://www.cristobalcolon.com/fullaccess/item25553foto108220.jpg',category:"Hombre", stock:15,description:'Descripcion6'},
    
    
]



export const getProducts= (productId)=>{
    return new Promise ((resolve)=>{
        setTimeout (()=>{
            resolve (products)
        },100)
    })
}

export const getProductsByCategory= (categoryId)=>{
    return new Promise ((resolve)=>{
        setTimeout (()=>{
            resolve (products.filter(prod=>prod.category===categoryId))
        },100)
    })
}




