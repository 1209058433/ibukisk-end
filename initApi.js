const express = require('express')
const app = express()
//跨域
const cors = require('cors')
//首页句子
const coverSentences = require('./coverSentences')
//自己的信息
const myself = require('./myself')
//主页关于
const aboutIndex = require('./aboutIndex')
//音乐列表
const musicList = require('./musicList')
//文章
const article = require('./article')
//碧蓝航线封面
const azur = require('./azur')
//登录
const login = require('./login')
//登出
const logout = require('./logout')
//判断是否登录
const ifLog = require('./ifLog')


//cors解决跨域
app.use(cors())
//接收urlencoded
app.use(express.urlencoded({
    extended: false
}))
//托管目录
app.use('/img', express.static('./img'))
app.use('/music', express.static('./music'))
app.use('/api', coverSentences)
app.use('/api', myself)
app.use('/api', aboutIndex)
app.use('/api', musicList)
app.use('/api', article)
app.use('/api', azur)
app.use('/api', login)
app.use('/api', logout)
app.use('/api', ifLog)




app.listen(9999)