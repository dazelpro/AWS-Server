const router = require('express').Router();
const Product = require('../models/product');

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