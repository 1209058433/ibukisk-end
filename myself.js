const express = require('express')
const apiRouter = express.Router()


//关于个人信息的
apiRouter.get('/getmyself', (req, res) => {
    res.send({
        status: 0,
        message: 'GET Success',
        data: {
            name: 'ibukiSK',
            head: 'http://123.56.102.179:9999/img/head/sheffild.webp',
            idea: '不是二次元,我就是个看动漫打游戏的,怎么会是二次元呢',
            favGames: '碧蓝航线、奥日、群星、泰坦陨落等。喜欢种田,养成,比较喜欢fps',
            favAnimates: '狼与香辛料、侦探已死、奇诺之旅、魔女之旅、学园孤岛等等很多啦',
            favOthers: '没啥特别的爱好',
            bailan: '关于我明明写了很多但是后来感觉太尬了所以又全部删除了改成了这种无意义的句子只是因为这里空荡荡的不好看所以瞎写文字哪来填充的这件事'
        }
    })
})

module.exports = apiRouter;