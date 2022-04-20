const express = require('express')
const apiRouter = express.Router()

apiRouter.post('/login', (req, res) => {
    const password = req.body.password
    if (password !== 'uid473145218') {
        return res.send({
            status: 1,
            msg: "fail",
        })
    }
    res.send({
        status: 0,
        msg: "success",
        password: password,
    })
})

module.exports = apiRouter;