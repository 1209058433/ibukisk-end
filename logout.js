const express = require('express')
const apiRouter = express.Router()

apiRouter.post('/logout', (req, res) => {
    //放弃使用session-express了，所以这个接口废弃了
    res.send({
        status: 0,
        msg: 'logout success',
    })
})

module.exports = apiRouter;