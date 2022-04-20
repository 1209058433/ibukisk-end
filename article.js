const express = require('express')
const apiRouter = express.Router()
const fs = require('fs')
const path = require('path')
const formidable = require('formidable');

//获取文章列表
let getArticleJson = fs.readFileSync(path.join(__dirname, './data/article.json'), "UTF-8")
let article = JSON.parse(getArticleJson)

for (let i = 0; i < article.length; i++) {
    article[i].lightContent = article[i].content.replace(/<p>|<\/p>|<h2>|<\/h2>|<br>|<h3>|<\/h3>|<h4>|<\/h4>|<h5>|<\/h5>|<h6>|<\/h6>|<h1>|<\/h1>/g, "")
    const coverName = fs.readdirSync(path.join(__dirname, './img/article', String(article[i].id)))
    article[i].cover = 'http://123.56.102.179:9999/img/article' + '/' + String(article[i].id) + '/' + String(coverName[0])
    // article[i].cover = 'http://127.0.0.1:9999/img/article' + '/' + String(article[i].id) + '/' + String(coverName[0])
}

apiRouter.post('/article', (req, res) => {
    //获取文章列表
    let getArticleJson = fs.readFileSync(path.join(__dirname, './data/article.json'), "UTF-8")
    let article = JSON.parse(getArticleJson)

    for (let i = 0; i < article.length; i++) {
        article[i].lightContent = article[i].content.replace(/<p>|<\/p>|<h2>|<\/h2>|<br>|<h3>|<\/h3>|<h4>|<\/h4>|<h5>|<\/h5>|<h6>|<\/h6>|<h1>|<\/h1>/g, "")
        const coverName = fs.readdirSync(path.join(__dirname, './img/article', String(article[i].id)))
        article[i].cover = 'http://123.56.102.179:9999/img/article' + '/' + String(article[i].id) + '/' + String(coverName[0])
        // article[i].cover = 'http://127.0.0.1:9999/img/article' + '/' + String(article[i].id) + '/' + String(coverName[0])
    }



    //获取请求的id
    const getId = parseInt(req.body.id)
    //给出下一个的id值
    const nextId = article[0].id + 1

    // 全部文章
    const articleList = [];
    // 测试文章
    const articleTest = [];
    //小说
    const articleNovel = [];
    //自制
    const articleMyself = [];
    //其他
    const articleOthers = [];

    //给各类文章赋值
    articleList.push(article)
    articleTest.push(article.filter((item) => item.type === 'test'))
    articleNovel.push(article.filter((item) => item.type === 'novel'))
    articleMyself.push(article.filter((item) => item.type === 'myself'))
    articleOthers.push(article.filter((item) => item.type === 'others'))

    //文章的类型
    const articles = [{
            id: 1,
            type: 'all',
            typeName: '全部',
            content: articleList
        },
        {
            id: 2,
            type: 'novel',
            typeName: '小说',
            content: articleNovel

        },
        {
            id: 3,
            type: 'myself',
            typeName: '自制',
            content: articleMyself

        },
        {
            id: 4,
            type: 'test',
            typeName: '测试',
            content: articleTest
        }, {
            id: 5,
            type: 'others',
            typeName: '其他',
            content: articleOthers
        },
    ]

    //根据id筛选出相应的文章
    const getArticle = article.filter(function (a) {
        return a.id === getId
    })








    //=================================================================================
    //修改文章

    if (req.body.formChange) {
        // 编辑文章
        //接收发过来的数据
        const modifyForm = JSON.parse(req.body.formChange);
        //更改原来的信息
        //找到对应文章的索引
        const changeIndex = article.findIndex((item) => item.id === getId)
        article[changeIndex].type = modifyForm.type
        article[changeIndex].title = modifyForm.title
        article[changeIndex].author = modifyForm.author
        article[changeIndex].time = modifyForm.time
        article[changeIndex].content = modifyForm.content
        article[changeIndex].from = modifyForm.from
        let change = article
        fs.writeFileSync(path.join(__dirname, './data/article.json'), JSON.stringify(change, '', ' '))
        res.send({
            status: 0,
            msg: 'change success'
        })
        return
    }





    //==============================================================================================================

    //添加文章
    if (req.body.addForm) {
        const newArticle = JSON.parse(req.body.addForm)
        //新建文件夹
        fs.mkdirSync(path.join(__dirname, './img/article', String(newArticle.id)))
        // 新文章的内容
        newArticle.content = '<p>' + newArticle.content.replace(/\n/g, "</p><p>") + '</p>'
        let newAdd = {
            id: '',
            type: '',
            cover: '',
            title: '',
            author: '',
            time: '',
            content: '',
            lightContent: '',
            from: '',
        }
        newAdd.id = newArticle.id
        newAdd.type = newArticle.type
        newAdd.cover = newArticle.cover
        newAdd.title = newArticle.title
        newAdd.author = newArticle.author
        newAdd.time = newArticle.time
        newAdd.content = newArticle.content
        newAdd.lightContent = newArticle.content.replace(/<p>|<\/p>|<h2>|<\/h2>|<br>|<h3>|<\/h3>|<h4>|<\/h4>|<h5>|<\/h5>|<h6>|<\/h6>|<h1>|<\/h1>/g, "")
        newAdd.from = newArticle.from
        article.unshift(newAdd)
        let theAdd = article
        fs.writeFileSync(path.join(__dirname, './data/article.json'), JSON.stringify(theAdd, '', ' '))
        res.send({
            status: 0,
            msg: 'success',
            list: article,
        })
        return
    }



    //=========================================================================================================
    //删除文章
    if (req.body.del) {
        let delChange = article.filter((item) => item.id !== getId)
        fs.writeFileSync(path.join(__dirname, './data/article.json'), JSON.stringify(delChange, '', ' '))
        //当对应文件夹内存在文件就循环删除，直到清空
        while (fs.readdirSync(path.join(__dirname, './img/article', String(getId)))) {
            const delName = fs.readdirSync(path.join(__dirname, './img/article', String(getId)))
            if (delName[0]) {
                fs.unlinkSync(path.join(__dirname, './img/article', String(getId), delName[0]))
            } else {
                break
            }
        }
        // 删除文件夹
        fs.rmdirSync(path.join(__dirname, './img/article', String(getId)))
        res.send({
            status: 0,
            msg: 'del success'
        })
        return
    }

    // formidable接收上传的图片并处理
    const formAbleChange = formidable({
        //先放到临时文件夹
        uploadDir: path.join(__dirname, './img/article/temp'),
        keepExtensions: true,
        maxFieldsSize: 5 * 1024 * 1024
    });
    formAbleChange.parse(req, (err, fields, files) => {
        //当对应文件夹内存在文件就循环删除，直到清空
        while (fs.readdirSync(path.join(__dirname, './img/article', String(fields.id)))) {
            const delName = fs.readdirSync(path.join(__dirname, './img/article', String(fields.id)))
            if (delName[0]) {
                fs.unlinkSync(path.join(__dirname, './img/article', String(fields.id), delName[0]))
            } else {
                break
            }
        }
        // 删除文件夹
        // fs.rmdirSync(path.join(__dirname, './img/article', String(fields.id)))
        //新建文件夹
        // fs.mkdirSync(path.join(__dirname, './img/article', String(fields.id)))
        //写入个东西
        // fs.writeFileSync(path.join(__dirname, './img/article', String(fields.id)), "1.txt")
        // 获取上传文件的后缀
        const extname = path.extname(files.file.newFilename);
        // 重命名并存到正确目录
        fs.renameSync(path.join(__dirname, './img/article/temp', files.file.newFilename), path.join(__dirname, './img/article', String(fields.id), String(fields.id) + extname))
    })









    if (req.body.id) {
        res.send({
            data: getArticle,
            types: articles,
        })
    } else {
        res.send({
            data: articles,
            nextId: nextId
        })
    }
})



module.exports = apiRouter;