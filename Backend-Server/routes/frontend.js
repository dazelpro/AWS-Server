const router = require('express').Router();
const Product = require('../models/product');

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
            res.json({
                success: true,
                message: 'Berhasil tersimpan'
            });
        }                       
    });
});

// Router untuk mengambil data dan kemudian ditampilkan dalam bentuk json
router.route('/')
    .get((req, res, next)=>{
        Product.find({}, (err, product) =>{
            res.json({
                success: true,
                product: product,
                message: "Successful"
            });
        });
    })

// Router untuk mengambil data berdasarkan params yang diterima.
router.route('/detail/:_id')
.get((req,res,next)=>{
    Product.findOne({ 
        _id: req.params._id 
    }, (err, product)=>{
        res.json({
            success: true,
            product: product,
            message: "Success"
        });
    });
})

module.exports = router;   