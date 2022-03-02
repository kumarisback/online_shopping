const { insertProduct,findAll, findProduct, updateProduct, deleteProduct } = require("../models/product.operation");


async function getProducts(req,res){
    let products = await findAll();
    // console.log(products);
res.render('admin/products/all-products' ,{products:products})

}
function getNewProduct(req,res){
    res.render('admin/products/new-product')

}
async function createNewProduct(req, res){
    console.log(req.body);
    console.log(req.file);
    let Data= {
        Title:req.body.title,
        Summary:req.body.summary,
        Price:req.body.price,
        Description:req.body.description,
        Path:req.file.path,
        Filename:req.file.filename
    }
    try {
        await insertProduct(Data);
        res.redirect('/admin/product');
    } catch (error) {
        console.log(error+"in catch");
        res.redirect('/admin/product');
    }
    
}


async function editProducts(req,res){
    let id= req.params.id;
    let productDetails=await findProduct(id);
    // console.log( id);
   
        let data=Object.entries(productDetails);
        data=productDetails[2][1];
        console.log(data);
    res.render('admin/products/update-product',{product:data})
}

async function updateProducts(req,res){
    let id= req.params.id;
    let Data;
    if(req.file){
        Data= {
            Title:req.body.title,
            Summary:req.body.summary,
            Price:req.body.price,
            Description:req.body.description,
            Path:req.file.path,
            Filename:req.file.filename
            }
    } 
    else{
        Data= {
        Title:req.body.title,
        Summary:req.body.summary,
        Price:req.body.price,
        Description:req.body.description,
        }
    }
    // console.log(JSON.stringify( Data)+"cont");
    // console.log(JSON.stringify( req.params)+"id");
    let productDetails=await updateProduct(id,Data);
    // console.log(productDetails);
    res.redirect('/admin/product')
}

async function deleteProducts(req,res){
    let id= req.params.id;
    let productDetails=await deleteProduct(id);
    console.log(productDetails);
    res.redirect('/admin/product')
}
module.exports={
    getProducts:getProducts,
    getNewProduct:getNewProduct,
    createNewProduct:createNewProduct,
    editProducts:editProducts,
    updateProducts:updateProducts,
    deleteProducts:deleteProducts
}