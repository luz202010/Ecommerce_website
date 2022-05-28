const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

mongoose.connect(
    process.env.MONGODB_URL || "mongodb://localhost/adidas",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
);

const Product = mongoose.model(
    "products",
    new mongoose.Schema({
        _id: {type: String, default: shortid.generate},
        title: {type: String, unique: true, required: true},
        price: {type: Number, required: true},
        countInStock: {type: Number, required: true},
        description: String,
        image: String,
        availableSizes: [String],
    })
);

app.get("/api/products/", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

app.post("/api/getProject", async (req, res) => {
    const products = await Product.findById(req.body.id);
    res.send(products);
});

app.post("/api/products/", async (req, res) => {
    if (
        !req.body.title ||
        !req.body.price ||
        !req.body.countInStock ||
        !req.body.description ||
        !req.body.availableSizes
    ) {
        return res.send({message: "Data is required."});
    }
    let _id = req.body._id;
    if (_id == '') {
        delete req.body._id
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.send(savedProduct);
    } else {
        let data = {
            title: req.body.title,
            price: req.body.price,
            countInStock: req.body.countInStock,
            description: req.body.description,
            image: req.body.image
        }
        await Product.findByIdAndUpdate(_id, data)
        const result = await Product.findById(_id)
        res.send(result);
    }
});


const Order = mongoose.model(
    "order",
    new mongoose.Schema(
        {
            _id: {
                type: String,
                default: shortid.generate,
            },
            email: String,
            name: String,
            address: String,
            total: Number,
            cartItems: [
                {
                    _id: String,
                    title: String,
                    price: Number,
                    count: Number,
                },
            ],
        },
        {
            timestamps: true,
        }
    )
);

app.post("/api/orders", async (req, res) => {
    if (
        !req.body.name ||
        !req.body.email ||
        !req.body.address ||
        !req.body.total ||
        !req.body.cartItems
    ) {
        return res.send({message: "Data is required."});
    }
    const order = await Order(req.body).save();
    for (let i = 0; i < req.body.cartItems.length; i++) {
        let row = req.body.cartItems[i];
        let result = await Product.findById(row._id)
        await Product.findByIdAndUpdate(row._id, {
            countInStock: Number(result.countInStock) - Number(row.count)
        })
    }
    res.send(order);
});
app.get("/api/orders", async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
});
app.delete("/api/orders/:id", async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.send(order);
});


app.post("/api/searchProduct", async (req, res) => {
    const reg = new RegExp(req.body.keyword, 'i')
    const products = await Product.find({
        $or: [{
            title: {$regex: reg}
        }]
    });
    res.send(products);
});

app.post("/api/deleteProducts", async (req, res) => {
    await Product.deleteOne({'_id': req.body.id})
    res.send({
        message: `Successfully deleted`
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));
