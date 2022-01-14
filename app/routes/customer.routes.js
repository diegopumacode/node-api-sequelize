module.exports = app => {

    const customers = require("../controllers/customer.controller")

    let router = require("express").Router();
    router.get("/",customers.findAll)
    router.post("/",customers.create)
    router.put("/:id", customers.update);
    router.get("/ages", customers.averageAge);
    app.use('/api/customers', router);
}
