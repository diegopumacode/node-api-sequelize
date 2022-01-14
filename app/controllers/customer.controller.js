const db = require("../models");
const Customer = db.Customer;

const findAll = (req, res) => {
    Customer.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

const create = (req, res) => {
    if (!req.body.name || !req.body.lastName) {
        res.status(400).send({
            message: "Name/lastName can not be empty!"
        });
        return;
    }

    const customer = {
        name: req.body.name,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth
    };

    Customer.create(customer)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error ocurred while creating the tutorial"
            })
        })
}

const update = (req, res) => {
    const id = req.params.id;

    Customer.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Customer with id=${id}. Maybe Customer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Customer with id=" + id
            });
        });
};

const averageAge= (req, res) => {
    Customer.findAll()
        .then(data => {
            let sumAges = 0
            data.forEach(customer => sumAges =+ require("../utils/calculateAge.js")(customer.dateOfBirth));
            res.send({averageAge:sumAges});
        },0)
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
}

module.exports = {
    update,
    findAll,
    create,
    averageAge
}