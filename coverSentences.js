const express = require('express')
const apiRouter = express.Router()

//使用get请求
//req请求对象,res返回对象
// 用Math.round(Math.random());可均衡获取0到1的随机整数
apiRouter.get('/cover_sentences', (req, res) => {
    //一行一个句子
    const sentences = ['你生而有翼,为何竟愿一生匍匐前进,形如虫蚁？',
        '以德报怨,何以报德；以直报怨,以德报德。',
        '我不相信成熟能让我们所谓接受任何东西,成熟只是让我们更能自欺欺人',
        '生活中很多事情,该来的会来,不以这个形式,就会以那样的形式',
        '自己的路得自己想,我不可能为你的生活做答案的',
        '从本质意义上,我们都是既失去家乡又无法抵达远方的人',
        '人和兽之间,只隔着一团愤怒,就像生死之间只隔着一张纸',
        '让我们将事前的忧虑,换为事前的思考和计划吧',
        '岁月一点一滴的溜走,在不经意间,快的让我们都来不及在下一个路口挽留。也无法预测人生未知的镜头',
        '用心聆听,深深呼吸,烟花雨,梨花月,寄—缕风的香魂,远离喧嚣',
        '随着年龄的增长,人总会变得越来越宽容,所以很多事情到最后并不是真的解决了,而是算了吧',
        '相遇,是—种美丽,像—座小城向晚,映着夕阳的绚烂',
        '似水流年,如烟般岁月,看尽百花开遍了四季,谁比谁芬芳,谁比谁甜蜜?',
        '过去无法重写,但它却让我更加坚强。感谢每一次改变,每一次心碎,每一块伤疤',
        '因为你对人都太过热情了,所以你总觉得别人都对你冷漠了。因为你太爱一个人了,所以你总感觉被你爱的那个人不够爱你',
        '我没法告诉你,在我浮萍似的岁月里,那些仅仅凭着臆想杜撰出来的力量,曾经给予过我多大的勇气',
        '大家都在说要怎么努力怎么优秀,为什么没有人能教教我,普通人要怎么过？',
    ]
    res.send({
        data: sentences
    })
})

module.exports = apiRouter;