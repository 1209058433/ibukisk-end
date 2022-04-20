const express = require('express')
const apiRouter = express.Router()

apiRouter.post('/ifLog', (req, res) => {
    const session = req.body.session
    if (!session) {
        return res.send({
            status: 1,
            msg: 'fail',
        })
    }
    res.send({
        status: 0,
        msg: 'success',
    })

})

module.exports = apiRouter;