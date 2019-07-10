const router     = require('express').Router();
const Product    = require('../models/product');

// Router untuk tombol Save Product
router.post('/save', (req, res, next)=>{
    let product = new Product();
    product.productName = req.body.productName;
    product.Price = req.body.Price;
    product.urlImage = req.body.urlImage;
    Product.findOne({ productName: req.body.productName },(err, existingProduct)=>{
        if (existingProduct){
            res.json({
                success: false,
                message: 'Produk dengan nama ini sudah ada'
            });
        } else {
            product.save();
            res.redirect('/');
        }                       
    });
});


// Router untuk memanggil data "product" dan menampilkan ke "v_ProductList"
router.route('/')
    .get((req, res, next)=>{
        Product.find({}, (err, product) =>{
            res.render('v_ProductList',{
                product: product
            });
        });
    })


// Router untuk Form Product
router.route('/product')
    .get((req, res, next)=>{
        Product.find({}, (err) =>{
            res.render('v_ProductForm',{
                title: 'Form Product'
            });
        });
    })

module.exports = router;