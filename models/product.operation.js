const Product = require('./product.model');
const { updateMany } = require('./user.model');

async function insertProduct(data){

    var product= new Product(data);
        await product.save(function(err, x){
            if(err) return console.log(err);
            return console.log("saved"+ x);
        });
        return;
}

async function deleteProduct(data){

}
async function findAll(){
    let data=Object.entries( await Product.find());
    return data;
}


async function findProduct(id){
    console.log(id);
    try {
        let data=Object.entries( await Product.findOne({_id:id}));
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
   
}

async function deleteProduct(id){
    
    let data=await Product.deleteOne({_id:id});
    console.log(data);
    return data;
}

async function updateProduct(id,Data){
    console.log(id.toString()+"---"+JSON.stringify(Data));
    let data=Object.entries( await Product.updateOne({_id:id},{$set:{...Data}}));
    console.log(data+"operations");
    return data;
}

module.exports={
    insertProduct:insertProduct,
    deleteProduct:deleteProduct,
    findAll:findAll,
    findProduct:findProduct,
    updateProduct:updateProduct,
    deleteProduct:deleteProduct
}