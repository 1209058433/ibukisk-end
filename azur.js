const express = require('express')
const apiRouter = express.Router()

const names = [{
    id: 1,
    name: '北卡罗来纳',
    content: 'http://123.56.102.179:9999/img/azur/names/beika.webp',
    content2: 'http://123.56.102.179:9999/img/azur/names/beika2.webp'
}, {
    id: 2,
    name: '海伦娜',
    content: 'http://123.56.102.179:9999/img/azur/names/hailuna.webp',
    content2: 'http://123.56.102.179:9999/img/azur/names/hailuna2.webp'
}, {
    id: 3,
    name: '欧若拉',
    content: 'http://123.56.102.179:9999/img/azur/names/ouruola.webp',
    content2: 'http://123.56.102.179:9999/img/azur/names/ouruola2.webp'
}, {
    id: 4,
    name: '企业',
    content: 'http://123.56.102.179:9999/img/azur/names/qiye.webp',
    content2: 'http://123.56.102.179:9999/img/azur/names/qiye2.webp'
}, {
    id: 5,
    name: '伊吹',
    content: 'http://123.56.102.179:9999/img/azur/names/yichui.webp',
    content2: 'http://123.56.102.179:9999/img/azur/names/yichui2.webp'
}, {
    id: 6,
    name: '应瑞',
    content: 'http://123.56.102.179:9999/img/azur/names/yingrui.webp',
    content2: 'http://123.56.102.179:9999/img/azur/names/yingrui2.webp'
}]

const RoleImgs = [{
        id: 1,
        name: 'http://123.56.102.179:9999/img/azur/names/beika.webp',
        titleName: '北卡罗来纳级战列舰1号舰 北卡罗来纳 USS North Carolina',
        roleColthes: [{
                id: 1,
                title: '通常',
                content: "http://123.56.102.179:9999/img/azur/role/beika/tongchang.webp"
            },
            {
                id: 2,
                title: '换装1',
                content: "http://123.56.102.179:9999/img/azur/role/beika/clothes1.webp"
            },
        ],
        rolesInfo: [{
                id: 1,
                title: '名字',
                content: '北卡罗来纳'
            },
            {
                id: 2,
                title: '阵营',
                content: '白鹰'
            },
            {
                id: 3,
                title: '类型',
                content: '战列舰'
            },
            {
                id: 4,
                title: '发色',
                content: '金色'
            },
            {
                id: 5,
                title: '瞳色',
                content: '孔雀蓝'
            },
            {
                id: 6,
                title: '性格',
                content: '认真、积极'
            },
            {
                id: 7,
                title: '关键词',
                content: '缺乏个性、存在感低'
            },
            {
                id: 8,
                title: '持有物',
                content: '美国海军军官夏季常服'
            },
            {
                id: 9,
                title: '实装时间',
                content: '2017年12月29日'
            },
            {
                id: 10,
                title: '誓约时间',
                content: '2019年1月23日'
            },
            {
                id: 11,
                title: '生日',
                content: '6月13日'
            },
            {
                id: 11,
                title: '个性',
                content: '擅长工作和战斗，是妹妹眼中的「平凡的姐姐」。 本人主张没有个性也是一种个性，其实暗中还是蛮憧憬「属性」的。据说在妹妹华盛顿面前比较弱势。认真达观的小姐姐，无论是战斗还是战斗之外都十分能干，对妹妹非常关心，对喜欢的人会显出积极进攻的一面。 她最大的个性也许是缺乏个性，偶尔会对自己的存在感低下感到困扰。也因没有什么特别喜欢或讨厌的东西，而变得难以在一开始拉近距离。'
            },
        ],
        clothesLines: [{
            id: 1,
            name: '台词',
            lines: [{
                id: 1,
                title: '登陆界面',
                content: '碧蓝航线!'
            }, {
                id: 2,
                title: '舰船型号',
                content: '北卡罗来纳级战列舰——北卡罗来纳，舷号BB-55'
            }, {
                id: 3,
                title: '自我介绍',
                content: '我是北卡罗来纳级一号舰，可以算是白鹰新型战舰里的大姐头吧~并没有什么特别喜欢的东西，也没有什么讨厌的东西，这么说来，我虽然各种大战都参加过却没有留下什么名气呢……稍微有些困扰呀'
            }, {
                id: 4,
                title: '获取台词',
                content: '北卡罗来纳，听候您的差遣。虽然和其他姐妹们比起来稍微缺乏个性，不过俗话说没有个性也是一种个性嘛，呵呵，总而言之，请多多指教'
            }, {
                id: 5,
                title: '登录台词',
                content: '欢迎回来~'
            }, {
                id: 6,
                title: '查看详情',
                content: '被这么看着还是有些害羞呢……'
            }, {
                id: 7,
                title: '主界面1',
                content: '里面穿着什么？也不是什么不得了的东西呢'
            }, {
                id: 8,
                title: '主界面2',
                content: '仔细想想的话，我确实去过许多地方呢……见过许多风景，也见证了许多离别'
            }, {
                id: 9,
                title: '主界面3',
                content: '有时候还有点羡慕华盛顿那孩子那么有活力呢……'
            }, {
                id: 10,
                title: '触摸台词',
                content: '有什么事需要我帮忙吗？'
            }, {
                id: 11,
                title: '特殊触摸',
                content: '这样不好哦'
            }, {
                id: 12,
                title: '任务提醒',
                content: '放着任务不做可不好'
            }, {
                id: 13,
                title: '任务完成',
                content: '任务奖励发放了呢，不去领取吗？'
            }, {
                id: 14,
                title: '邮件提醒',
                content: '新邮件来了~'
            }, {
                id: 15,
                title: '回港台词',
                content: '啊啦，等一下，领子没翻好，站着别动……好了~（拍手）'
            }, {
                id: 16,
                title: '好感度-失望',
                content: '指挥官，我要生气了哦？'
            }, {
                id: 17,
                title: '好感度-陌生',
                content: '指挥官会记得我真是不简单呢~虽然不是自夸，我对于自己存在感低下还有点自信呢(苦笑)'
            }, {
                id: 18,
                title: '好感度-友好',
                content: '只是外表的话，舰队里每个孩子都很可爱哦，但她们同时也都很有个性，说实话，姐姐稍微有些羡慕她们呢（托腮）'
            }, {
                id: 19,
                title: '好感度-喜欢',
                content: '我一直觉得普通也没什么不好的，但是在遇到指挥官后也稍微有些想改变自己了……毕竟姐妹们都那么有个性嘛～嗯……指挥官，你喜欢兔女郎吗～'
            }, {
                id: 20,
                title: '好感度-爱',
                content: '指挥官，等下要一起吃点什么吗？然后陪我去买点东西，要是你有什么想买的也一起吧，然后……唔，去公园散散步？没事啦，和你一起的话去哪里都一样的～'
            }, {
                id: 21,
                title: '誓约台词',
                content: '这样的话，不好好报答信任可不行呢……嗯……指挥官呀，你喜欢兔女郎吗～'
            }, {
                id: 22,
                title: '委托完成',
                content: '委托的时间到了哦，他们也该回来了~'
            }, {
                id: 23,
                title: '强化成功',
                content: '那姐姐也稍微努力一点吧~'
            }, {
                id: 24,
                title: '旗舰开战',
                content: '不要大意，也不用太紧张地取胜吧~'
            }, {
                id: 25,
                title: '胜利台词',
                content: '要是指挥官夸我几句我会很开心喔~'
            }, {
                id: 26,
                title: '失败台词',
                content: '没那么顺利呢……下次再努力吧'
            }, {
                id: 27,
                title: '技能台词',
                content: '无论什么时候都不能掉以轻心哦'
            }, {
                id: 28,
                title: '血量告急',
                content: '姐妹们，撑住！'
            }, ],
        }, {
            id: 2,
            name: '秘密的换装练习？',
            lines: [{
                id: 1,
                title: '皮肤描述',
                content: '啊？指挥官，这只是在…对，在做换衣服的练习而已…！对了…说起来，指挥官应该是“兔女郎爱好者”…对吧？'
            }, {
                id: 2,
                title: '登录台词',
                content: '欢迎回来~有什么我能为你服务的吗？'
            }, {
                id: 3,
                title: '查看详情',
                content: '平常是不是就穿着这个？这个嘛…就任指挥官想象咯~呵呵~'
            }, {
                id: 4,
                title: '主界面1',
                content: '呼~感觉有种让人神清气爽的开放感呢~啊，不是指那方面哦？'
            }, {
                id: 5,
                title: '主界面2',
                content: '华盛顿有露出自然的笑容了吗？那孩子眼神有时候看起来挺凶的，很容易让人误解呢…'
            }, {
                id: 6,
                title: '主界面3',
                content: '对兔女郎倒是确实多少有点兴趣，不过，被人请教兔女郎的事情还是有点不好意思呢…'
            }, {
                id: 7,
                title: '特殊触摸',
                content: '指挥官果然很喜欢这个吧？呵呵~'
            }, {
                id: 8,
                title: '摸头台词',
                content: '果然没有了“耳朵”就不能称作兔女郎了呢。呵呵~'
            }, {
                id: 9,
                title: '回港台词',
                content: '能帮我整理一下蝴蝶结吗？嗯，这样子距离有些近啊…啊，谢谢了'
            }, {
                id: 10,
                title: '好感度-爱',
                content: '指挥官，一会有空吗？要不要一起出去逛逛…放心吧，肯定不会就这样出去，我会穿得像平时那样陪您出门的。感谢指挥官的关心，呵呵~'
            }, {
                id: 11,
                title: '委托完成',
                content: '就以这身打扮去让委托组的伙伴们大吃一惊吧？呵呵，开玩笑的~'
            }, {
                id: 12,
                title: '胜利台词',
                content: '获胜可不需要什么个性，而是要靠大家的齐心协力呢~呵呵~'
            }]
        }],
    },
    {
        id: 2,
        name: 'http://123.56.102.179:9999/img/azur/names/hailunna.webp',
        titleName: '布鲁克林级亚级-圣路易斯级轻巡洋舰2号舰 海伦娜 USS Helena',
        roleColthes: [{
                id: 1,
                title: '通常',
                content: "http://123.56.102.179:9999/img/azur/role/hailunna/tongchang.webp"
            },
            {
                id: 2,
                title: '换装1',
                content: "http://123.56.102.179:9999/img/azur/role/hailunna/clothes1.webp"
            },
            {
                id: 3,
                title: '换装2',
                content: "http://123.56.102.179:9999/img/azur/role/hailunna/clothes2.webp"
            },
            {
                id: 4,
                title: '改造',
                content: "http://123.56.102.179:9999/img/azur/role/hailunna/gaizao.webp"
            },
        ],
        rolesInfo: [{
                id: 1,
                title: '名字',
                content: '海伦娜'
            },
            {
                id: 2,
                title: '阵营',
                content: '白鹰'
            },
            {
                id: 3,
                title: '类型',
                content: '轻巡洋舰'
            },
            {
                id: 4,
                title: '发色',
                content: '蓝色'
            },
            {
                id: 5,
                title: '瞳色',
                content: '紫色'
            },
            {
                id: 6,
                title: '性格',
                content: '哀愁'
            },
            {
                id: 7,
                title: '关键词',
                content: '拯救'
            },
            {
                id: 8,
                title: '持有物',
                content: '手炮(三联装152mm主炮)'
            },
            {
                id: 9,
                title: '实装时间',
                content: '2017年5月25日'
            },
            {
                id: 10,
                title: '誓约时间',
                content: '2021年6月10日'
            },
            {
                id: 11,
                title: '生日',
                content: '8月27日'
            },
            {
                id: 11,
                title: '个性',
                content: '由于过去的经历，无论如何也很难露出笑容的女孩。对战争存在阴影，因此平时显得有些懦弱和哀愁。　但身处其中的话，至少对于胜利还是有所执着，并且会在保护身边的人这件事上发挥巨大的主观能动性。本质上是个再普通不过的女孩，有着与外表相符的心性，不过大概只会在敞开心扉的人面前展现这一面吧。'
            },
        ],
        clothesLines: [{
            id: 1,
            name: '台词',
            lines: [{
                    id: 1,
                    title: '登陆界面',
                    content: '碧蓝航线！'
                },
                {
                    id: 2,
                    title: '舰船型号',
                    content: '布鲁克林级轻巡洋舰—海伦娜，舷号CL-50'
                },
                {
                    id: 3,
                    title: '自我介绍',
                    content: '我是以不输给其他重巡姐妹们为理念设计的型号，不过果然只靠我一个人是救不了大家的……指挥官，能帮帮我吗？'
                },
                {
                    id: 4,
                    title: '获取台词',
                    content: '指挥官，您好，我是海伦娜，索敌是我的长项，请……将我们带往胜利吧'
                },
                {
                    id: 5,
                    title: '登录台词',
                    content: '……啊，指挥官，欢迎回来，不好意思刚才在想事情'
                },
                {
                    id: 6,
                    title: '查看详情',
                    content: '光靠这些是没用的呀...'
                },
                {
                    id: 7,
                    title: '主界面1',
                    content: '指挥官躲起来了吗，就算这样我也知道你在哪里的'
                },
                {
                    id: 8,
                    title: '主界面2',
                    content: '指挥官，等战争结束以后想做点什么呢？'
                },
                {
                    id: 9,
                    title: '主界面3',
                    content: '要是我的火力能跟雷达一样强的话……'
                },
                {
                    id: 10,
                    title: '触摸台词',
                    content: '嗯？我没事，只是有些走神而已'
                },
                {
                    id: 11,
                    title: '特殊触摸',
                    content: '如果这样能让指挥官打起精神，我……是愿意的'
                },
                {
                    id: 12,
                    title: '任务提醒',
                    content: '让我们从任务开始一点一点累积胜利的基石吧'
                },
                {
                    id: 13,
                    title: '任务完成',
                    content: '任务的奖励累积起来也是一笔巨大的资源，请好好利用吧'
                },
                {
                    id: 14,
                    title: '邮件提醒',
                    content: '有新的邮件到了，请好好珍惜和其他人之间的关系哦'
                },
                {
                    id: 15,
                    title: '回港台词',
                    content: '大家都回来了吧？感觉除了甲板上多出了点零件以外没什么大问题呢……'
                },
                {
                    id: 16,
                    title: '好感度-失望',
                    content: 'SG，快来保护我……'
                },
                {
                    id: 17,
                    title: '好感度-陌生',
                    content: '我的索敌能力要是能帮到姐妹们那就好了……'
                },
                {
                    id: 18,
                    title: '好感度-友好',
                    content: '表情？啊……因为我离开的时候战况还是相当不利的呢……对于和平啊，欢笑啊之类的……稍微有些不适应，不过不用担心，海伦娜没问题的！'
                },
                {
                    id: 19,
                    title: '好感度-喜欢',
                    content: '最近感觉放松了不少……嗯，之前神经绷的太紧了，这多亏指挥官一直在我身边给我勇气哦~'
                },
                {
                    id: 20,
                    title: '好感度-爱',
                    content: '我相信哦，指挥官一定会带给我们曙光的。而且这一次我一定要努力到最后……和喜欢的人生离死别这种事，光是想想就感觉心要裂开了……'
                },
                {
                    id: 21,
                    title: '誓约台词',
                    content: '这就是指挥官给我的承诺吗……这样啊……好开心……'
                },
                {
                    id: 22,
                    title: '委托完成',
                    content: '指挥官指挥官，你说下次我把SG借给姐妹们出委托好不好？'
                },
                {
                    id: 23,
                    title: '强化成功',
                    content: '这份力量，我一定会用来保护大家的'
                },
                {
                    id: 24,
                    title: '旗舰开战',
                    content: '在我面前，你们无所遁形'
                },
                {
                    id: 25,
                    title: '胜利台词',
                    content: '……居然赢了？（惊）'
                },
                {
                    id: 26,
                    title: '失败台词',
                    content: '……拜托先救我……不要再和敌人纠缠了'
                },
                {
                    id: 27,
                    title: '技能台词',
                    content: 'SG，把你的力量借给我！'
                },
                {
                    id: 28,
                    title: '血量告急',
                    content: 'SG，锁定敌人位置！'
                },
                {
                    id: 29,
                    title: '彩蛋台词1',
                    content: '（俄克拉荷马，亚利桑那，加利福尼亚）SG全开，决不让悲剧重演！'
                },
                {
                    id: 30,
                    title: '彩蛋台词2',
                    content: '（宾夕法尼亚）崩姐罩我~'
                },
                {
                    id: 31,
                    title: '彩蛋台词3',
                    content: '（阿鸡分队3只）阿鸡分队……还挺可爱的！'
                },
                {
                    id: 32,
                    title: '彩蛋台词4',
                    content: '（圣路易斯）路易斯姐姐，战场上请认真一点…'
                },
                {
                    id: 33,
                    title: '彩蛋台词5',
                    content: '（火奴鲁鲁）火奴鲁鲁，我来支援你！'
                },
                {
                    id: 34,
                    title: '彩蛋台词6',
                    content: '（克利夫兰）克利夫兰，我们不会输的，对吧？'
                },
            ]
        }, {
            id: 2,
            name: '正月与青鸟',
            lines: [{
                    id: 1,
                    title: '皮肤描述',
                    content: '重樱的新年……嗯，我要参加。指挥官，不用太顾虑我没关系的，我已经不是刚加入舰队时脆弱的我了'
                },
                {
                    id: 2,
                    title: '登录台词',
                    content: '指挥官，舰队里已经完全是节日的气氛了呢'
                },
                {
                    id: 3,
                    title: '查看详情',
                    content: '总觉得路易斯姐姐完全把我当成换装娃娃了…指挥官，这样真的可爱吗？'
                },
                {
                    id: 4,
                    title: '主界面1',
                    content: '新年愿望的话……我希望新的一年，我能够变得更加坚强，还有大家都能平平安安'
                },
                {
                    id: 5,
                    title: '主界面2',
                    content: '布鲁克林级全员，再加上克利夫兰和她的妹妹们，感觉我们的新年参拜队伍会很壮大呢……'
                },
                {
                    id: 6,
                    title: '主界面3',
                    content: '啊，下雪了……以前都没有发现，真是漂亮又安静呢……'
                },
                {
                    id: 7,
                    title: '触摸台词',
                    content: '嗯？指挥官，我在想，新年期间怎么度过比较好……有很多想做的事呢'
                },
                {
                    id: 8,
                    title: '特殊触摸',
                    content: '指、指挥官，这样是不好的……'
                },
                {
                    id: 9,
                    title: '回港台词',
                    content: '指挥官，接下来让我出战也可以哦，SG一定能帮上忙的'
                },
                {
                    id: 10,
                    title: '好感度-爱',
                    content: '指挥官？不用担心，我只是在想，和朋友一起欢笑，和喜欢的人一同迈向新的一年，原来，这么幸福的时光我是真的可以拥有的啊……'
                },
                {
                    id: 11,
                    title: '旗舰开战',
                    content: '我……想要赢！'
                },
                {
                    id: 12,
                    title: '胜利台词',
                    content: '对，就是这样，海伦娜，你很厉害的'
                },
                {
                    id: 13,
                    title: '失败台词',
                    content: '没关系，还有下一次……！'
                },
            ]
        }, {
            id: 3,
            name: '与君共舞',
            lines: [{
                    id: 1,
                    title: '皮肤描述',
                    content: '那个，指挥官，能和我跳一支舞吗？我有很多话，想要和指挥官说呢'
                },
                {
                    id: 2,
                    title: '登录台词',
                    content: '指挥官， 宴会就要开始了呢'
                },
                {
                    id: 3,
                    title: '查看详情',
                    content: '为了这一天，我特意向路易斯姐姐学了跳舞，因为太过笨手笨脚还被她笑话了好久呢......'
                },
                {
                    id: 4,
                    title: '主界面1',
                    content: '指挥官，你知道吗，是你把我从深渊中拉了出来，是你给了我希望哦'
                },
                {
                    id: 5,
                    title: '主界面2',
                    content: '指挥官，你知道吗，我已经不再恐惧和迷茫，因为我知道，指挥官和大家，一直会在我身边'
                },
                {
                    id: 6,
                    title: '主界面3',
                    content: '我跳舞的搭档是…（摇头）不，至少现在，只有指挥官哦。因为，我有太多的话想和指挥官说呢'
                },
                {
                    id: 7,
                    title: '触摸台词',
                    content: '指挥官，我已经准备好了，让我们开始跳舞吧'
                },
                {
                    id: 8,
                    title: '特殊触摸',
                    content: '呀！……啊，指挥官，踩到你的脚了吗……'
                },
                {
                    id: 9,
                    title: '任务提醒',
                    content: '指挥官，请先去完成任务吧，我会等你的'
                },
                {
                    id: 10,
                    title: '任务完成',
                    content: '指挥官真厉害呢'
                },
                {
                    id: 11,
                    title: '邮件提醒',
                    content: '指挥官，又是新的跳舞邀请……真受欢迎呢'
                },
                {
                    id: 12,
                    title: '回港台词',
                    content: '指挥官，在宴会之前，还有什么要处理的事吗？'
                },
                {
                    id: 13,
                    title: '好感度-爱',
                    content: '一直以来，我都心安理得地享受着指挥官的迁就与保护。但是，这样是不够的。我想，总有一天，我也能成为能够站在指挥官身边的人...所以，请再等一等海伦娜吧，可以吗？'
                },
                {
                    id: 14,
                    title: '委托完成',
                    content: '指挥官，我们一起去迎接委托组的各位参加宴会吧'
                },
                {
                    id: 15,
                    title: '旗舰开战',
                    content: '我……想要赢！'
                },
                {
                    id: 16,
                    title: '胜利台词',
                    content: '对，就是这样，海伦娜，你很厉害的'
                },
                {
                    id: 17,
                    title: '失败台词',
                    content: '没关系，还有下一次……！'
                },
            ]
        }, {
            id: 4,
            name: '海伦娜.改',
            lines: [{
                    id: 1,
                    title: '获取台词',
                    content: '全新的装备......适应起来会稍微有些复杂呢，但是现在的我，有信心驾驭这些力量！指挥官，请期待我的表现吧！'
                },
                {
                    id: 2,
                    title: '登录台词',
                    content: '指挥官，欢迎回来，今天也一起加油吧！'
                },
                {
                    id: 3,
                    title: '查看详情',
                    content: '最近我只要一主动做什么事，路易斯姐姐就会一边说“哎呀，女儿长大了”一边假装唉声叹气的.......真是的，欺负人......'
                },
                {
                    id: 4,
                    title: '主界面1',
                    content: '指挥官，想知道强化后的SG的性能吗？嘻嘻，那就请你找一个谁都不知道的地方藏起来吧~'
                },
                {
                    id: 5,
                    title: '主界面2',
                    content: '我已经决定了，比起想象将来的事，首先要做好眼前的事，过好现在的每一天'
                },
                {
                    id: 6,
                    title: '主界面3',
                    content: '光是装备强化是不够的，我要让自己足够配上这些优秀的装备才行呢'
                },
                {
                    id: 7,
                    title: '特殊触摸',
                    content: '指挥官，这样的事，不可以在这里做.....'
                },
                {
                    id: 8,
                    title: '好感度-爱',
                    content: '现在的我，对站在指挥官身边这件事，稍微有了一些自信......但是，人果然总是贪心的呢，我想要变得更出色，想要更多的占据指挥官的视线......指挥官，这样的我，你会讨厌吗？'
                },
                {
                    id: 9,
                    title: '委托完成',
                    content: '强化后的SG真厉害呢......在办公室里能直接看到返航的委托组'
                },
                {
                    id: 10,
                    title: '旗舰开战',
                    content: '我......会赢！'
                },
                {
                    id: 11,
                    title: '胜利台词',
                    content: '海伦娜，你还不可以骄傲你要变得更厉害才行！'
                },
                {
                    id: 12,
                    title: '失败台词',
                    content: '没关系，还有下一次......！'
                },
            ]
        }]

    },
    {
        id: 3,
        name: 'http://123.56.102.179:9999/img/azur/names/ouruola.webp',
        titleName: '阿瑞托莎级轻巡洋舰4号舰 欧若拉 HMS Aurora',
        roleColthes: [{
                id: 1,
                title: '通常',
                content: 'http://123.56.102.179:9999/img/azur/role/ouruola/tongchang.webp'
            },
            {
                id: 2,
                title: '换装1',
                content: 'http://123.56.102.179:9999/img/azur/role/ouruola/clothes1.webp'
            },
            {
                id: 3,
                title: '换装2',
                content: 'http://123.56.102.179:9999/img/azur/role/ouruola/clothes2.webp'
            },
            {
                id: 4,
                title: '换装3',
                content: 'http://123.56.102.179:9999/img/azur/role/ouruola/clothes3.webp'
            },
            {
                id: 5,
                title: '誓约',
                content: 'http://123.56.102.179:9999/img/azur/role/ouruola/shiyue.webp'
            },
        ],
        rolesInfo: [{
                id: 1,
                title: '名字',
                content: '欧若拉'
            },
            {
                id: 2,
                title: '阵营',
                content: '皇家'
            },
            {
                id: 3,
                title: '类型',
                content: '轻巡洋舰'
            },
            {
                id: 4,
                title: '发色',
                content: '淡金色'
            },
            {
                id: 5,
                title: '瞳色',
                content: '苍绿'
            },
            {
                id: 6,
                title: '性格',
                content: '温柔，淑女范'
            },
            {
                id: 7,
                title: '关键词',
                content: '玫瑰、曙光女神、重庆、黄河、北京、震旦'
            },
            {
                id: 8,
                title: '持有物',
                content: '折扇（春之语）、小提琴（黎明的赞歌）'
            },
            {
                id: 9,
                title: '实装时间',
                content: '2018年2月12日'
            },
            {
                id: 10,
                title: '誓约时间',
                content: '2021年2月14日'
            },
            {
                id: 11,
                title: '生日',
                content: '8月20日'
            },
            {
                id: 11,
                title: '个性',
                content: '欧若拉设定之一便是喜欢种玫瑰，而且不论是在默认立绘还是春节立绘中也都有鲜艳的玫瑰。这一设定来源于古希腊盲眼诗人荷马所著两部史诗之一《奥德赛》，原句是“初升的有玫瑰色手指的黎明”。'
            },
        ],
        clothesLines: [{
            id: 1,
            name: '台词',
            lines: [{
                    id: 1,
                    title: '登陆界面',
                    content: '碧蓝航线！'
                },
                {
                    id: 2,
                    title: '舰船型号',
                    content: '阿瑞托莎级轻巡洋舰——欧若拉，舷号12'
                },
                {
                    id: 3,
                    title: '自我介绍',
                    content: '我是皇家海军阿瑞托莎级的四号舰欧若拉，您也可以叫我曙光女神，至于银色怪物这样不好听的外号还请不要使用……不过比起这些，指挥官也许更熟悉我另外一个名字吧？'
                },
                {
                    id: 4,
                    title: '获取台词',
                    content: '贵安，指挥官，我是阿瑞托莎级轻巡洋舰四号舰——欧若拉，从今天起担任您的秘书，有什么问题都可以问我哦~'
                },
                {
                    id: 5,
                    title: '登录台词',
                    content: '我的名字代表破晓之光，呵呵，见到我有让您变得精神一些吗~'
                },
                {
                    id: 6,
                    title: '查看详情',
                    content: '指挥官，装备方面有什么我能帮上忙的吗'
                },
                {
                    id: 7,
                    title: '主界面1',
                    content: '东煌？是个好地方呀，嗯…比如说…'
                },
                {
                    id: 8,
                    title: '主界面2',
                    content: '虽然我并不介意被您盯着，不过也请好好工作哦~'
                },
                {
                    id: 9,
                    title: '主界面3',
                    content: '指挥官，不要动，嘴边沾了点……好了，接下来也请努力工作吧~'
                },
                {
                    id: 10,
                    title: '触摸台词',
                    content: '指挥官，要一起来给花儿浇水放松一下吗？'
                },
                {
                    id: 11,
                    title: '特殊触摸',
                    content: '指挥官！我，我要生气了哦，真的哦！'
                },
                {
                    id: 12,
                    title: '任务提醒',
                    content: '指挥官，新的任务书下达了，重点我都已经用花瓣做了标记，请过目'
                },
                {
                    id: 13,
                    title: '任务完成',
                    content: '有任务完成的奖励还没有领取，我替您拿过来了'
                },
                {
                    id: 14,
                    title: '邮件提醒',
                    content: '有新的邮件，要我读给您听吗'
                },
                {
                    id: 15,
                    title: '回港台词',
                    content: '辛苦了，接下来就是悠闲的休息时间了'
                },
                {
                    id: 16,
                    title: '好感度-失望',
                    content: '指挥官，公共场合请不要做让人困扰的事'
                },
                {
                    id: 17,
                    title: '好感度-陌生',
                    content: '指挥官要来看看我种的玫瑰吗？品种有很多哦~'
                },
                {
                    id: 18,
                    title: '好感度-友好',
                    content: '名为欧若拉的女神据说别名“玫瑰色的手指”，虽然我没有那么厉害，不过手指上也有些种玫瑰时的余味，指挥官要闻一闻吗？'
                },
                {
                    id: 19,
                    title: '好感度-喜欢',
                    content: '指挥官，过来一下～……嘻嘻，果然指挥官和这朵玫瑰很搭配呢～欸？才不是笑您啦，那要不然，您也挑一支为我戴上吧？只要是指挥官挑选的，我都喜欢'
                },
                {
                    id: 20,
                    title: '好感度-爱',
                    content: '最近经常被姐妹们说独占了指挥官的时间呢…不过，唯独这点我是不会退让的哦，请做好被其他姐妹们怨恨的心理准备吧，指挥官～'
                },
                {
                    id: 21,
                    title: '誓约台词',
                    content: '玫瑰换一个名字也芳香依旧，就像无论唤作欧若拉，曙光女神，或是重庆，我就是我，我的心，永远不变，永远与你同在——'
                },
                {
                    id: 22,
                    title: '委托完成',
                    content: '指挥官，盯着我而忘了完成委托的姐妹可不行哦？'
                },
                {
                    id: 23,
                    title: '强化成功',
                    content: '能为指挥官处理更多的事情了呢~'
                },
                {
                    id: 24,
                    title: '旗舰开战',
                    content: '为大家的胜利献上祝福~'
                },
                {
                    id: 25,
                    title: '胜利台词',
                    content: '太好了指挥官，我们赢了呢~'
                },
                {
                    id: 26,
                    title: '失败台词',
                    content: '还是有些不适应战场呢……'
                },
                {
                    id: 27,
                    title: '技能台词',
                    content: '为指挥官排忧解难也是我的工作呢~'
                },
                {
                    id: 28,
                    title: '血量告急',
                    content: '愿曙光照耀我们的前路……！'
                },
                {
                    id: 29,
                    title: '彩蛋台词1',
                    content: '（平海，宁海）平海、宁海你们也来一起练习啊，嗯？为了赚钱吗？'
                },
                {
                    id: 30,
                    title: '彩蛋台词2',
                    content: '（花月）举棋不定的话，不如试试玫瑰？'
                },
            ]
        }, {
            id: 2,
            name: '春之语',
            lines: [{
                    id: 1,
                    title: '皮肤描述',
                    content: '为了这一天我准备了一段时间呢……指挥官，想听我为您来一段讲书吗？'
                },
                {
                    id: 2,
                    title: '登录台词',
                    content: '指挥官，欢迎回来，不用急，我也才刚到哦~'
                },
                {
                    id: 3,
                    title: '查看详情',
                    content: '稍微有些意外吗？呵呵，您往后还会知道更多的我哦~'
                },
                {
                    id: 4,
                    title: '主界面1',
                    content: '指挥官，要吃火锅吗？如果您不吃辣的话，我来准备鸳鸯锅~'
                },
                {
                    id: 5,
                    title: '主界面2',
                    content: '要是累了的话，就一边吃橘子一边听我为您讲书吧~'
                },
                {
                    id: 6,
                    title: '触摸台词',
                    content: '嗯？怎么了吗，啊，我只是在想，要是明年，后年，大后年，一直都能和现在一样就好了呢'
                },
            ]
        }, {
            id: 3,
            name: '黎明的赞歌',
            lines: [{
                    id: 1,
                    title: '皮肤描述',
                    content: '我一直觉得，音乐有着独特的，能够震撼人心的力量，所以尝试学习了一下小提琴。指挥官，请欣赏我的表演吧'
                },
                {
                    id: 2,
                    title: '查看详情',
                    content: '指挥官，平时我会在广场演奏，有兴趣的话可以过来欣赏哦'
                },
                {
                    id: 3,
                    title: '主界面1',
                    content: '演奏的时候鸽子们不知不觉就聚集了起来，呵呵，看起来要准备些饲料了呢'
                },
                {
                    id: 4,
                    title: '主界面2',
                    content: '指挥官对乐器感兴趣吗？私心来说，我希望指挥官能弹钢琴来跟我合奏呢～'
                },
                {
                    id: 5,
                    title: '主界面3',
                    content: '指挥官，当我身处黑暗之中而不知光明何在的时候，就来听我的演奏吧'
                },
                {
                    id: 6,
                    title: '触摸台词',
                    content: '工作告一段落了吗，那么，想听些什么呢？'
                },
                {
                    id: 7,
                    title: '特殊触摸',
                    content: '真是的，指挥官，这样会扰乱我的演奏的……'
                },
                {
                    id: 8,
                    title: '回港台词',
                    content: '辛苦了，指挥官，让我用音乐来治愈你的心灵吧'
                },
                {
                    id: 9,
                    title: '好感度-爱',
                    content: '指挥官，战争结束后我们去旅行吧，在不同的地方演奏，为不同的人送去祝福，这是只有我们才能做到的事呢'
                },
            ]
        }, {
            id: 4,
            name: '渝城秘技',
            lines: [{
                    id: 1,
                    title: '皮肤描述',
                    content: '“接下来将由欧若拉带来东煌传承已久的川剧秘技-变脸！不要移开视线，精彩即将上演！”——呵呵，指挥官，您觉得有那种味道了吗？'
                },
                {
                    id: 2,
                    title: '登录台词',
                    content: '那么 ，今天该为指挥官准备什么样的剧目呢——选择太多有时候也很苦恼呢~'
                },
                {
                    id: 3,
                    title: '查看详情',
                    content: '除了戏曲，东煌五千年历史，还有许多让人着迷的东西呢！作为与东煌因缘颇深的舰船，我也想将这些古老文化的魅力，传递给更多的人。'
                },
                {
                    id: 4,
                    title: '主界面1',
                    content: '川剧的一大特色，就是变脸哦，就像这样~您看，各种不同的身份，不同的感情，都可以表现在脸上。嘻嘻，这可是我好不容易才学来的呢。'
                },
                {
                    id: 5,
                    title: '主界面2',
                    content: '台上一分钟 ，台下十年功，东煌的谚语真是充满了智慧呢。'
                },
                {
                    id: 6,
                    title: '主界面3',
                    content: '指挥官，您知道东煌的戏曲分多少种吗~'
                },
                {
                    id: 7,
                    title: '触摸台词',
                    content: '您问背后的武器架？这个啊，虽然我是花旦，但是一直很想试试刀马旦呢~'
                },
                {
                    id: 8,
                    title: '特殊触摸',
                    content: '指、指挥官？再这样，就要让你尝尝我身后的刀枪了…会很疼的哦？'
                },
                {
                    id: 9,
                    title: '回港台词',
                    content: '辛苦啦~那么，一壶盖碗茶，一碟盐花生，接下来，请欣赏欧若拉的表演吧~'
                },
                {
                    id: 10,
                    title: '好感度-爱',
                    content: '指挥官，有没有一种脸谱能够代表……代表“爱”呢。欸？用自己的脸就可以了？真，真是的，淑女可是要保持矜持的。'
                },
                {
                    id: 11,
                    title: '彩蛋台词',
                    content: '（平海，宁海）平海、宁海你们也来一起练习啊，嗯？为了赚钱吗？'
                },
            ]
        }, {
            id: 5,
            name: '【誓约】良辰凤褂',
            lines: [{
                    id: 1,
                    title: '皮肤描述',
                    content: ''
                },
                {
                    id: 2,
                    title: '',
                    content: '指挥官，请坐。此处是专属于我们的“特别空间”——开玩笑的，有没有一点心跳加速的感觉呢？呵呵  '
                },
                {
                    id: 3,
                    title: '登录台词',
                    content: '有欧若拉在您身边，有没有感觉像黎明来临一样精神些呢？呵呵~'
                },
                {
                    id: 4,
                    title: '查看详情',
                    content: '指挥官应该已经知道了，晚餐时洗手盆里的玫瑰花瓣，是我种的玫瑰的哦'
                },
                {
                    id: 5,
                    title: '主界面1',
                    content: '在指挥室摆点玫瑰之外的…嗯…杜鹃、牡丹、仙客来、康乃馨…能有一种温暖、幸福的气氛就好了~'
                },
                {
                    id: 6,
                    title: '主界面2',
                    content: '优雅、贤淑、坚强、以及…为了能成为指挥官的“贤内助”，要更加努力才行呢。'
                },
                {
                    id: 7,
                    title: '主界面3',
                    content: '热闹的休息日虽然挺好，不过，在温馨的空间里悠闲地度过也不错哦。'
                },
                {
                    id: 8,
                    title: '触摸台词',
                    content: '指挥官知道这里的刺绣代表什么吗？呵呵'
                },
                {
                    id: 9,
                    title: '特殊触摸',
                    content: '指挥官……？'
                },
                {
                    id: 10,
                    title: '回港台词',
                    content: '辛苦了。玫瑰和藏红花，还有薄荷茶，想要喝哪一种？'
                },
                {
                    id: 11,
                    title: '好感度-爱',
                    content: '放心吧。虽然指挥官是大家的指挥官，但欧若拉是只属于指挥官的欧若拉哦。这样的话其他姐妹应该就不会怨恨您了吧♪'
                },
                {
                    id: 12,
                    title: '委托完成',
                    content: '这么盯着我，是想要我提醒您去迎接大家对吗？呵呵~'
                },
            ]
        }]

    },
    {
        id: 4,
        name: 'http://123.56.102.179:9999/img/azur/names/qiye.webp',
        titleName: '约克城级航空母舰2号舰 企业 USS Enterprise',
        roleColthes: [{
                id: 1,
                title: '通常',
                content: 'http://123.56.102.179:9999/img/azur/role/qiye/tongchang.webp'
            },
            {
                id: 2,
                title: '换装1',
                content: 'http://123.56.102.179:9999/img/azur/role/qiye/clothes1.webp'
            },
            {
                id: 3,
                title: '换装2',
                content: 'http://123.56.102.179:9999/img/azur/role/qiye/clothes2.webp'
            },
            {
                id: 4,
                title: '换装3',
                content: 'http://123.56.102.179:9999/img/azur/role/qiye/clothes3.webp'
            },
            {
                id: 5,
                title: '换装4',
                content: 'http://123.56.102.179:9999/img/azur/role/qiye/clothes4.webp'
            },
            {
                id: 6,
                title: '换装5',
                content: 'http://123.56.102.179:9999/img/azur/role/qiye/clothes5.webp'
            },
            {
                id: 7,
                title: '换装6',
                content: 'http://123.56.102.179:9999/img/azur/role/qiye/clothes6.webp'
            },
            {
                id: 8,
                title: '誓约',
                content: 'http://123.56.102.179:9999/img/azur/role/qiye/shiyue.webp'
            },
        ],
        rolesInfo: [{
                id: 1,
                title: '名字',
                content: '企业'
            },
            {
                id: 2,
                title: '阵营',
                content: '白鹰'
            },
            {
                id: 3,
                title: '类型',
                content: '航空母舰'
            },
            {
                id: 4,
                title: '发色',
                content: '银白色'
            },
            {
                id: 5,
                title: '瞳色',
                content: '紫色'
            },
            {
                id: 6,
                title: '性格',
                content: '坚强、进取'
            },
            {
                id: 7,
                title: '关键词',
                content: '战斗'
            },
            {
                id: 8,
                title: '持有物',
                content: '弓'
            },
            {
                id: 9,
                title: '实装时间',
                content: '2017年5月25日'
            },
            {
                id: 10,
                title: '誓约时间',
                content: '2017年7月17日'
            },
            {
                id: 11,
                title: '生日',
                content: '10月3日'
            },
            {
                id: 11,
                title: '个性',
                content: '企业的小段子（来源：日服官推的舰娘小Neta介绍①）。企业的料理技术是女灶神亲自教授的。女灶神做料理时的场景经常被误认为是实弹演习，企业的厨艺评价则被认为是“不坏”。她会用能量棒填饱肚子，无论指挥官提出什么要求都会接受吧。'
            },
        ],
        clothesLines: [{
            id: 1,
            name: '台词',
            lines: [{
                    id: 1,
                    title: '登陆界面',
                    content: '碧蓝航线！'
                },
                {
                    id: 2,
                    title: '舰船型号',
                    content: '约克城级航空母舰2号舰—企业，舷号CV-6'
                },
                {
                    id: 3,
                    title: '自我介绍',
                    content: '我是约克城级航空母舰的企业。灰色幽灵是我众多绰号之一。 身上这浸满鲜血的战衣无时无刻的在提醒着我沉重的使命，不过我将继续胜利，直到战争的尽头'
                },
                {
                    id: 4,
                    title: '获取台词',
                    content: '约克城级二号舰企业，报到。对于敌人，我不会同情也不会手下留情，只会全力迎战，这就是我的风格'
                },
                {
                    id: 5,
                    title: '登录台词',
                    content: '你来了？要战斗的话我随时都能出动'
                },
                {
                    id: 6,
                    title: '查看详情',
                    content: '要看看我珍藏的勋章吗？'
                },
                {
                    id: 7,
                    title: '主界面1',
                    content: '指挥官？……我已经开始怀疑自己是不是可以反潜了'
                },
                {
                    id: 8,
                    title: '主界面2',
                    content: '幸运也是实力的一部分？那我能分一些给姐姐么？'
                },
                {
                    id: 9,
                    title: '主界面3',
                    content: '活着的话，就会有不如意。但是死的话，一定要不留遗憾'
                },
                {
                    id: 10,
                    title: '触摸台词',
                    content: '怎么，要出动了吗？'
                },
                {
                    id: 11,
                    title: '特殊触摸',
                    content: '什……！！（脸红）'
                },
                {
                    id: 12,
                    title: '任务提醒',
                    content: '指挥官，还有任务没有完成，赶快出发吧'
                },
                {
                    id: 13,
                    title: '任务完成',
                    content: '指挥官，奖励收到了'
                },
                {
                    id: 14,
                    title: '邮件提醒',
                    content: '指挥官，有新邮件'
                },
                {
                    id: 15,
                    title: '回港台词',
                    content: '一场战斗结束后还有下一场战斗在等待、吗…'
                },
                {
                    id: 16,
                    title: '好感度-失望',
                    content: '…指挥官似乎欠缺勇敢呢'
                },
                {
                    id: 17,
                    title: '好感度-陌生',
                    content: '我的愿望是正直而真诚地活着，所以有什么意见我会直说，你如果有什么想法也都告诉我吧'
                },
                {
                    id: 18,
                    title: '好感度-友好',
                    content: '天上的光全都是星星，海上的光全都是敌人……指挥官，真的会有没有斗争的那一天吗？'
                },
                {
                    id: 19,
                    title: '好感度-喜欢',
                    content: '单纯的无敌是没有意义的，指挥官。不过我相信有你在，我一定可以发挥我这身本领的最大价值，让我们一起终结这场斗争吧'
                },
                {
                    id: 20,
                    title: '好感度-爱',
                    content: '战争结束后你想做什么？——我？我的话，大概还会跟着你吧，毕竟战场之外也只有你身边比较安心了，你愿意……带我走吗？'
                },
                {
                    id: 21,
                    title: '誓约台词',
                    content: '我曾横跨无数战场，也迎接过无数别离，我的身上承载着无数的夙愿与意志。指挥官做好承担这一切的准备了吗？——是吗…那就一起走下去吧，直到生命的尽头'
                },
                {
                    id: 22,
                    title: '委托完成',
                    content: '我一直在战场上所以明白后勤有多重要，指挥官，去迎接那些在幕后努力的姐妹们吧'
                },
                {
                    id: 23,
                    title: '强化成功',
                    content: '力量的彼端是什么……让我去看看吧'
                },
                {
                    id: 24,
                    title: '旗舰开战',
                    content: '勇往直前吧'
                },
                {
                    id: 25,
                    title: '胜利台词',
                    content: '指挥官，告诉我，我还要击沉多少敌人才行？'
                },
                {
                    id: 26,
                    title: '失败台词',
                    content: '全力而败，也没什么怨言'
                },
                {
                    id: 27,
                    title: '技能台词',
                    content: '结束了'
                },
                {
                    id: 28,
                    title: '血量告急',
                    content: '这才有意思不是吗！'
                },
                {
                    id: 29,
                    title: '彩蛋台词1',
                    content: '（赤城，加贺，飞龙）和老对手联手的感觉也不坏'
                },
                {
                    id: 30,
                    title: '彩蛋台词2',
                    content: '（约克城，大黄蜂）让你们见识一下真正的无敌吧'
                },
                {
                    id: 31,
                    title: '彩蛋台词3',
                    content: '（萨拉托加）真是贪玩的老伙计'
                },
                {
                    id: 32,
                    title: '彩蛋台词4',
                    content: '（白鹰5艘）白鹰的战士们，赌上性命吧！'
                },
                {
                    id: 33,
                    title: '彩蛋台词5',
                    content: '（重樱5艘）呵呵，要和我比赛吗？'
                },
                {
                    id: 34,
                    title: '彩蛋台词6',
                    content: '（八才战队3艘）都是熟人啊，好，上吧！'
                },
                {
                    id: 35,
                    title: '彩蛋台词7',
                    content: '（埃塞克斯）证明自己吧！'
                },
                {
                    id: 36,
                    title: '彩蛋台词8',
                    content: '（贝尔法斯特）受你照顾了啊。要跟上哦！'
                },
                {
                    id: 37,
                    title: '彩蛋台词9',
                    content: '（拉菲，绫波，Z23，标枪）这就是…羁绊的力量……'
                },
                {
                    id: 38,
                    title: '彩蛋台词10',
                    content: '（天城）这感觉是…有你在的话，赤城一定会…'
                },
                {
                    id: 39,
                    title: '彩蛋台词11',
                    content: '（邦克山）放心吧，我也在'
                },
            ]
        }, {
            id: 2,
            name: '驯鹿之主',
            lines: [{
                    id: 1,
                    title: '皮肤描述',
                    content: '圣诞快乐，指挥官！现在的我是圣诞老人！所以，平安夜就寝之前，记得把袜子挂在壁炉上哦'
                },
                {
                    id: 2,
                    title: '查看详情',
                    content: '我将牢记过去，并为未来考虑'
                },
                {
                    id: 3,
                    title: '主界面1',
                    content: '圣诞快乐，你想要什么圣诞礼物？'
                },
                {
                    id: 4,
                    title: '主界面2',
                    content: '圣诞老人是真实存在的哦，她现在正站在你的面前'
                },
                {
                    id: 5,
                    title: '主界面3',
                    content: '雪飘的圣诞节，真漂亮啊……欸？等等，女灶神，别拖我回去，我不冷！——我真的不冷啦！'
                },
                {
                    id: 6,
                    title: '触摸台词',
                    content: '尽情欢笑吧，这些美丽的回忆都将成为战斗的动力！'
                },
            ]
        }, {
            id: 3,
            name: '【誓约】誓约的星光',
            lines: [{
                    id: 1,
                    title: '获取台词',
                    content: '怎、怎么样？会不会有些奇怪…不，我当然不讨厌，不如说，不论谁都憧憬过披上它的那天吧，只是……'
                },
                {
                    id: 2,
                    title: '查看详情',
                    content: '只要有你在身边，无论经受多少残酷的战斗，面临多少痛苦的分离，我都一定能够满怀希望地走下去吧'
                },
                {
                    id: 3,
                    title: '主界面1',
                    content: '今晚要不要尝尝我的厨艺？女灶神说我已经尽得她的真传了......我可不是那种除战斗外一无所长的存在'
                },
                {
                    id: 4,
                    title: '主界面2',
                    content: '因为你，我开始相信了，终会没有战争，人们都能真心欢笑的那一天'
                },
                {
                    id: 5,
                    title: '触摸台词',
                    content: '唔，这孩子也很中意你呢'
                },
            ]
        }, {
            id: 4,
            name: '傲春之牡丹',
            lines: [{
                    id: 1,
                    title: '皮肤描述',
                    content: '这就是东煌的服装吗?…穿起来意外地合身啊。哦?还有特制的弓箭吗…有趣，就让我看看东煌的弓能射的多远吧！'
                },
                {
                    id: 2,
                    title: '登录台词',
                    content: '灯笼…应该是这么挂的吗?啊，指挥官你来了啊。听说东煌的新年要挂上灯笼，我就试了一下…你觉得如何?有节庆的氛围不?'
                },
                {
                    id: 3,
                    title: '查看详情',
                    content: '能够像这样享受安稳祥和的节日气氛，也是多亏了指挥官和港区所有人的不断努力呢…嗯'
                },
                {
                    id: 4,
                    title: '主界面1',
                    content: '飞行甲板也是东煌风格的限定涂装啊…这种代表着幸福与喜悦的颜色，也挺不错的'
                },
                {
                    id: 5,
                    title: '主界面2',
                    content: '听东煌的朋友们说，传说中春节会出现一种叫做“年”的怪兽，而这个装着火药的红色纸筒，好像有着驱逐年兽的作用呢'
                },
                {
                    id: 6,
                    title: '主界面3',
                    content: '听说东煌的新年有“发红包”的习俗，我要不要也给白鹰的孩子们准备些红包呢……'
                },
                {
                    id: 7,
                    title: '触摸台词',
                    content: '指挥官，这件大衣，貌似能容纳两个人呢。要来感受一下这件大衣的温度吗?'
                },
                {
                    id: 8,
                    title: '回港台词',
                    content: '在下一场战斗开始之前，稍微放松一下也无妨吧，指挥官?'
                },
            ]
        }, {
            id: 5,
            name: 'Anniversary Drive！',
            lines: [{
                    id: 1,
                    title: '皮肤描述',
                    content: '「Happy anniversary」......指挥官，今天就尽情庆祝吧，然后一起祈愿吧，祈愿我们能一直胜利下去——'
                },
                {
                    id: 2,
                    title: '登录台词',
                    content: '来了吗。我已经做好出发准备了。啊，别忘了戴上安全帽哦'
                },
                {
                    id: 3,
                    title: '查看详情',
                    content: '指挥官，感觉还好吗？...“生生不息，繁荣昌盛！”呵呵'
                },
                {
                    id: 4,
                    title: '主界面1',
                    content: '指挥官？...最近开始觉得自己是不是有一天甚至能够在天际飞翔...嗯，果然还是太勉强了。抱歉，就当做没听到吧'
                },
                {
                    id: 5,
                    title: '主界面2',
                    content: '旅行啊......服役时间长了，自然造访过的地方就多了，甚至有时会让人搞不清楚自己究竟是在旅行，还是在执勤呢'
                },
                {
                    id: 6,
                    title: '主界面3',
                    content: '最近埃塞克斯也对这个燃起了兴趣呢，下次大家能一起去兜风就好了'
                },
                {
                    id: 7,
                    title: '触摸台词',
                    content: '你也想看看我的「爱马」吗？'
                },
                {
                    id: 8,
                    title: '邮件提醒',
                    content: '指挥官，有来自舰队司令部的讯息哦  '
                },
                {
                    id: 9,
                    title: '回港台词',
                    content: '出击辛苦了，在其他同伴检查的时候稍微休息下吧'
                },
                {
                    id: 10,
                    title: '好感度-失望',
                    content: '是不是应该义无反顾地继续前进呢…'
                },
                {
                    id: 11,
                    title: '好感度-爱',
                    content: '指挥官，要和我一起来吗？只要你想，我们可以到任何地方，邂逅全新的文化，以及各种各样的人们——'
                },
                {
                    id: 12,
                    title: '旗舰开战',
                    content: 'Enterprise，engage！'
                },
                {
                    id: 13,
                    title: '胜利台词',
                    content: '我会继续战斗下去，为了碧蓝色的自由意志——'
                },
                {
                    id: 14,
                    title: '失败台词',
                    content: '人生…有时真的可能有解不开的死局啊…  '
                },
            ]
        }, {
            id: 6,
            name: '翱翔的自由之翼',
            lines: [{
                    id: 1,
                    title: '皮肤描述',
                    content: '对于为战争而生这件事我并没有疑问。为了碧蓝航路的自由——企业，出击！'
                },
                {
                    id: 2,
                    title: '登录台词',
                    content: '早安指挥官。距离作战会议开始还有点时间。趁着还能放松的时候好好放松一下吧'
                },
                {
                    id: 3,
                    title: '查看详情',
                    content: '只要是为了正义就不惜付诸武力，伤害她人…我不认为这样是正确的'
                },
                {
                    id: 4,
                    title: '主界面1',
                    content: '皇家女仆队还真是各种令人惊讶啊。对于战斗之外的各种工作也十分得心应手呢'
                },
                {
                    id: 5,
                    title: '主界面2',
                    content: '女灶神，怎么了？…不，我没有不注重饮食！指挥官做了各种…不！我有时候也会做饭的！'
                },
                {
                    id: 6,
                    title: '主界面3',
                    content: '小鹰和指挥官很亲热呢。能和平共处是最好的，呵呵'
                },
                {
                    id: 7,
                    title: '触摸台词',
                    content: '指挥官，有什么事吗？'
                },
                {
                    id: 8,
                    title: '特殊触摸',
                    content: '你不会对约克城姐姐也做了这种事情吧…'
                },
                {
                    id: 9,
                    title: '任务提醒',
                    content: '还有未完成的任务哦，还是确认下进度比较好'
                },
                {
                    id: 10,
                    title: '回港台词',
                    content: '指挥官，辛苦了。开始准备下一次作战吧'
                },
                {
                    id: 11,
                    title: '委托完成',
                    content: '要去迎接委托归来的同伴们吗？偶尔还是运动下比较好，在被大黄蜂念叨之前'
                },
                {
                    id: 12,
                    title: '旗舰开战',
                    content: '企业，前进！粉碎敌人！'
                },
                {
                    id: 13,
                    title: '胜利台词',
                    content: '似乎这边以些微的优势胜利了呢'
                },
                {
                    id: 14,
                    title: '失败台词',
                    content: '还是太勉强了…吗……'
                },
            ]
        }, {
            id: 7,
            name: '英雄的礼服',
            lines: [{
                    id: 1,
                    title: '皮肤描述',
                    content: '宴会礼服吗…平时没什么机会穿这样的衣服，意外地花了不少时间。啊，让我们赶紧去会场吧，让大家久等了可不好'
                },
                {
                    id: 2,
                    title: '登录台词',
                    content: '我是白鹰的企业，列席参加本次的宴会'
                },
                {
                    id: 3,
                    title: '查看详情',
                    content: '说起来，刚才急急忙忙忘了问…指挥官，觉得我这一身怎么样？大黄蜂评价和指挥官的评价，我都想听听看呢'
                },
                {
                    id: 4,
                    title: '主界面1',
                    content: '原来如此，这个不错啊。下次学学怎么做好了……嗯？我是在说这个冰淇淋，指挥官也要来点吗？'
                },
                {
                    id: 5,
                    title: '主界面2',
                    content: '我已经习惯了紧急出击了，无论在宴会上还是在哪里，只要你一声令下，我就能马上出击'
                },
                {
                    id: 6,
                    title: '主界面3',
                    content: '独立带着的那孩子？啊，和鹰酱一样是个可爱的孩子。是足以治愈战斗的疲惫的好伙伴啊'
                },
                {
                    id: 7,
                    title: '回港台词',
                    content: '指挥官，不要勉强自己…——这句话应该对我说…吗？明白了…'
                },
                {
                    id: 8,
                    title: '委托完成',
                    content: '委托组回来了吗，那打招呼就先缓缓，先去迎接她们吧'
                },
                {
                    id: 9,
                    title: '胜利台词',
                    content: '希望这场胜利能成为节目的一丝点缀'
                },
            ]
        }, {
            id: 8,
            name: 'Wind Catcher',
            lines: [{
                    id: 1,
                    title: '获取台词',
                    content: '指挥官也来观战了吗？其实比起这样站着，我更想一起参赛呢。这种仿佛能抓住风的感觉……不觉得赛车和航海其实是一样的吗？'
                },
                {
                    id: 2,
                    title: '登录台词',
                    content: '今天也加油吧。我已经做好应援的准备了。'
                },
                {
                    id: 3,
                    title: '查看详情',
                    content: '啊，指挥官，我想听听你的意见…这个姿势…怎么样？我得努努力…至少不给指挥官抹黑才行。'
                },
                {
                    id: 4,
                    title: '主界面1',
                    content: '那是…瑞鹤？衣服还挺夸张的啊…不过…我也没什么资格说别人的样子呢。'
                },
                {
                    id: 5,
                    title: '主界面2',
                    content: '埃塞克斯，前进的时候要冷静点！…咳咳。抱歉，我没有说教的打算，只是忍不住担心起来…'
                },
                {
                    id: 6,
                    title: '主界面3',
                    content: '要帮忙维修…？明白了。老实说，也许你更适合做这个呢，哈哈哈。'
                },
                {
                    id: 7,
                    title: '触摸台词',
                    content: '拍照吗？我知道了，要我摆什么样的姿势？'
                },
                {
                    id: 8,
                    title: '特殊触摸',
                    content: '这是犯规的哦，指挥官。'
                },
                {
                    id: 9,
                    title: '回港台词',
                    content: '指挥官，幸苦了。你先稍微休息一下吧，后续大家的后援工作交给我就好。'
                },
                {
                    id: 10,
                    title: '委托完成',
                    content: '委托组的伙伴们回来了啊。抱歉，能麻烦你去迎接么？'
                },
                {
                    id: 11,
                    title: '旗舰开战',
                    content: '上吧，引擎全开！'
                },
                {
                    id: 12,
                    title: '胜利台词',
                    content: '第一名吗。虽然没什么实感，不过既然是比赛还是开香槟庆祝一下吧。'
                },
            ]
        }]
    },
    {
        id: 5,
        name: 'http://123.56.102.179:9999/img/azur/names/yichui.webp',
        titleName: '伊吹级重巡洋舰 伊吹 （峦） IJN Ibuki',
        roleColthes: [{
                id: 1,
                title: '通常',
                content: 'http://123.56.102.179:9999/img/azur/role/yichui/tongchang.webp'
            },
            {
                id: 2,
                title: '换装1',
                content: 'http://123.56.102.179:9999/img/azur/role/yichui/clothes1.webp'
            },
            {
                id: 3,
                title: '换装2',
                content: 'http://123.56.102.179:9999/img/azur/role/yichui/clothes2.webp'
            },
            {
                id: 4,
                title: '换装3',
                content: 'http://123.56.102.179:9999/img/azur/role/yichui/clothes3.webp'
            },
            {
                id: 5,
                title: '换装4',
                content: 'http://123.56.102.179:9999/img/azur/role/yichui/clothes4.webp'
            },
        ],
        rolesInfo: [{
                id: 1,
                title: '名字',
                content: '伊吹'
            },
            {
                id: 2,
                title: '阵营',
                content: '重樱'
            },
            {
                id: 3,
                title: '类型',
                content: '重巡洋舰'
            },
            {
                id: 4,
                title: '发色',
                content: '深蓝'
            },
            {
                id: 5,
                title: '瞳色',
                content: '红(左),蓝(右)'
            },
            {
                id: 6,
                title: '性格',
                content: '害羞'
            },
            {
                id: 7,
                title: '关键词',
                content: '主上，剑术，和歌'
            },
            {
                id: 8,
                title: '持有物',
                content: '剑'
            },
            {
                id: 9,
                title: '实装时间',
                content: '2018年4月26日'
            },
            {
                id: 10,
                title: '誓约时间',
                content: '2020年1月1日'
            },
            {
                id: 11,
                title: '生日',
                content: '5月21日'
            },
            {
                id: 11,
                title: '个性',
                content: '伊吹山的艾草，常被用来比喻安静燃烧的恋心，就好比现在…指挥官能感觉到吗？伊吹的…心。“伊吹艾草”出自日本镰仓时代著名歌人藤原定家私撰的和歌集《小仓百人一首》所收录的第五十一篇作品，该篇作者是藤原实方朝臣。原文：かくとだに/えやはいぶきの/さしも草（くさ）/さしも知（し）らじな/燃（も）ゆる思（おも）ひを。译文：伊吹艾草茂，无语苦相思。情笃心欲焚，问君知不知。（来自《小仓百人一首：日本古典和歌赏析》）'
            },
        ],
        clothesLines: [{
                id: 1,
                name: '台词',
                lines: [{
                        id: 1,
                        title: '登陆界面',
                        content: '碧蓝航线！'
                    },
                    {
                        id: 2,
                        title: '舰船型号',
                        content: '重巡洋舰——伊吹'
                    },
                    {
                        id: 3,
                        title: '自我介绍',
                        content: '主上对我感到好奇吗？不过过去我不曾来到世间，也就没有值得一提的事迹……唔，喜欢和歌，擅长剑术，这样可以吗？还有……我不太习惯和人相处……'
                    },
                    {
                        id: 4,
                        title: '获取台词',
                        content: '将我从亘久之梦中唤醒的是你吗？在下伊吹，虽然仍是修行之身，若不嫌弃，任凭差遣'
                    },
                    {
                        id: 5,
                        title: '登录台词',
                        content: '主上，外出辛苦了'
                    },
                    {
                        id: 6,
                        title: '查看详情',
                        content: '主上，欢迎......没有什么好招待的，只有茶可以吗？'
                    },
                    {
                        id: 7,
                        title: '主界面1',
                        content: '只有我和主上两个人…总觉得有点…害羞'
                    },
                    {
                        id: 8,
                        title: '主界面2',
                        content: '主上，要是暂时没有事，我能去冥想一下吗？'
                    },
                    {
                        id: 9,
                        title: '主界面3',
                        content: '为了精进剑术，每天必须至少空挥千回……请放心，在主上离开的时候我已经完成了'
                    },
                    {
                        id: 10,
                        title: '触摸台词',
                        content: '展示一下剑术吗？对不起，被人这么看着有点……'
                    },
                    {
                        id: 11,
                        title: '特殊触摸',
                        content: '烦恼退却，六根清净……呀！主、主上……'
                    },
                    {
                        id: 12,
                        title: '任务提醒',
                        content: '有任务...需要我也一同出击吗？'
                    },
                    {
                        id: 13,
                        title: '任务完成',
                        content: '主上，那边好像堆了好多东西？喔，那就是奖励吗？'
                    },
                    {
                        id: 14,
                        title: '邮件提醒',
                        content: '主上，你的信件…诶？念给你听？那种害羞的事情…'
                    },
                    {
                        id: 15,
                        title: '回港台词',
                        content: '主上，受伤了的话请用我的艾草吧，我还有很多喔'
                    },
                    {
                        id: 16,
                        title: '好感度-失望',
                        content: '早知会遇到你这样的人，这个世间不来也罢......'
                    },
                    {
                        id: 17,
                        title: '好感度-陌生',
                        content: '我喜欢在高山之上，坐看浮云悠悠的生活......不过来到这里后我知道，我也不讨厌和大家一起的生活'
                    },
                    {
                        id: 18,
                        title: '好感度-友好',
                        content: '帅气……吗？我倒是更加羡慕总是笑容满面的大家……和她们相比，我只是不知道怎么表露感情而已'
                    },
                    {
                        id: 19,
                        title: '好感度-喜欢',
                        content: '而且和大家相处之后我才更加体会到，想要正确地表达自己的想法是一件很难的事，比如说喜悦，比如说……爱慕'
                    },
                    {
                        id: 20,
                        title: '好感度-爱',
                        content: '伊吹山的艾草，常被用来比喻安静燃烧的恋心，就好比现在…指挥官能感觉到吗？伊吹的…心'
                    },
                    {
                        id: 21,
                        title: '誓约台词',
                        content: '我过去从不知道，心意得到回应，是一件这么幸福的事情…请不要看我，主上…我现在的表情一定很奇怪…'
                    },
                    {
                        id: 22,
                        title: '委托完成',
                        content: '主上，委托……唔，是叫这个吗？总之完成了'
                    },
                    {
                        id: 23,
                        title: '强化成功',
                        content: '这就是...变强的感觉？感激不尽'
                    },
                    {
                        id: 24,
                        title: '旗舰开战',
                        content: '战场无情...伊吹，出击！'
                    },
                    {
                        id: 25,
                        title: '胜利台词',
                        content: '雕虫小技，见笑了'
                    },
                    {
                        id: 26,
                        title: '失败台词',
                        content: '呜…需要加倍修行了…'
                    },
                    {
                        id: 27,
                        title: '技能台词',
                        content: '伊吹之山岳……尽在这一剑之中'
                    },
                    {
                        id: 28,
                        title: '血量告急',
                        content: '背水一战……求之不得！'
                    },
                    {
                        id: 29,
                        title: '彩蛋台词',
                        content: '（海王星，君主，出云，罗恩，路易九世，西雅图，佐治亚，北风，吾妻，腓特烈大帝，加斯科涅）不才伊吹…将会全力配合各位的！'
                    },
                ]
            },
            {
                id: 2,
                name: '永梦的青女',
                lines: [{
                        id: 1,
                        title: '皮肤描述',
                        content: '主上，下雪了呢……不介意的话，请来伊吹的伞下躲一躲吧。'
                    },
                    {
                        id: 2,
                        title: '登录台词',
                        content: '主上，要一起外出吗'
                    },
                    {
                        id: 3,
                        title: '查看详情',
                        content: '这一身衣服，不好好感谢凤翔小姐可不行'
                    },
                    {
                        id: 4,
                        title: '主界面',
                        content: '阿嚏！……打喷嚏的样子很可爱？请、请不要笑话我了……'
                    },
                    {
                        id: 5,
                        title: '主界面',
                        content: '这就是真正的雪……真漂亮啊'
                    },
                    {
                        id: 6,
                        title: '主界面',
                        content: '冬天会有很热闹的祭典吗……稍微……有些感兴趣'
                    },
                    {
                        id: 7,
                        title: '触摸台词',
                        content: '主上……有想去的地方了？我会陪您一起去的'
                    },
                    {
                        id: 8,
                        title: '特殊触摸',
                        content: '主、主上，手好冷……'
                    },
                    {
                        id: 9,
                        title: '回港台词',
                        content: '外面在下雪呢……主上，我给您再添一件毛衣吧'
                    },
                    {
                        id: 10,
                        title: '好感度-爱',
                        content: '在永梦之中，冬天的安静的，冰冷的。但在这里，在主上身边，冬天依然是温暖的……主上，我能和您……牵手吗？'
                    },
                ]
            },
            {
                id: 3,
                name: '清扬的风花',
                lines: [{
                        id: 1,
                        title: '皮肤描述',
                        content: '这是我第一次穿这样的洋装...那个，主上...您觉得这身适合伊吹吗？'
                    },
                    {
                        id: 2,
                        title: '登录台词',
                        content: '[宴会]具体要做些什么，还是不太清楚呢...主上，我能跟着你吗？'
                    },
                    {
                        id: 3,
                        title: '查看详情',
                        content: '他乡的茶与酒，也别有一番滋味呢'
                    },
                    {
                        id: 4,
                        title: '主界面1',
                        content: '果然宴会上尽是一些不太明白的事情呢...啊，请不要误会我只是觉得...要修行学习的东西还有很多呢'
                    },
                    {
                        id: 5,
                        title: '主界面2',
                        content: '其实，我是被西雅图小姐邀请来的......西雅图小姐真是一位很有活力的人呢'
                    },
                    {
                        id: 6,
                        title: '主界面3',
                        content: '虽然我更喜欢安静的一隅，不过...像这样大家一起其乐融融聊天的环境，感觉，也不讨厌'
                    },
                    {
                        id: 7,
                        title: '触摸台词',
                        content: '风儿像这样吹在脸上，感觉很舒服呢，主上'
                    },
                    {
                        id: 8,
                        title: '特殊触摸',
                        content: '果、果然是伊吹不适合这样的衣服吗？'
                    },
                    {
                        id: 9,
                        title: '回港台词',
                        content: '主上，请用蛋糕，甜甜的很好吃哦'
                    },
                ]
            },
            {
                id: 4,
                name: '新桃换旧符',
                lines: [{
                        id: 1,
                        title: '皮肤描述',
                        content: '东煌的春节，真是热闹呢，这种热闹，带着更加纯粹的欢腾，和更加接近世俗的喧嚣……我……说不定很喜欢这种感觉呢'
                    },
                    {
                        id: 2,
                        title: '登录台词',
                        content: '港区到处都挂满了灯笼和红色的装饰，真漂亮呢'
                    },
                    {
                        id: 3,
                        title: '查看详情',
                        content: '欸？感觉我比平时放得开吗？……是呢，或许是受到春节气氛的影响吧，总觉得情绪比平时要高昂呢…那个，会显得很奇怪吗？'
                    },
                    {
                        id: 4,
                        title: '主界面1',
                        content: '那个，主上，其实我报名了晚会，表演的节目是剑舞……这还是我第一次主动把自己的技艺展现给舰队的各位呢，稍微有些紧张'
                    },
                    {
                        id: 5,
                        title: '主界面2',
                        content: '主上，明石小姐的店里似乎在贩卖一种叫做“鞭炮”的东西呢，据说和烟花类似，我想买一些来放，您要一起来吗？'
                    },
                    {
                        id: 6,
                        title: '主界面3',
                        content: '主上，那些贴在墙两边的是……？……啊，那个叫做“春联”吗，那个，您能给我解释一下上面写的内容吗？稍微有些好奇'
                    },
                    {
                        id: 7,
                        title: '触摸台词',
                        content: '到这个时节，天气已经没有那么寒冷了，再过不久，春天就要来了…原来如此，所以才是“春节”的“春联”啊……'
                    },
                ]
            },
            {
                id: 5,
                name: '恬静无为',
                lines: [{
                        id: 1,
                        title: '皮肤描述',
                        content: '您幸苦了，主上。伊吹已经换好衣服了，这样便算是遵照您“一起休息会”的命令了吧……然后呢，还需要伊吹做些什么？'
                    },
                    {
                        id: 2,
                        title: '登录台词',
                        content: '嘿咻…嗯，主上请坐这边，好好放松一下吧。'
                    },
                    {
                        id: 3,
                        title: '查看详情',
                        content: '主上，伊吹新采的茶是否合您的口味？'
                    },
                    {
                        id: 4,
                        title: '主界面1',
                        content: '主上，伊吹稍微冥想一会…欸，要、要陪您聊一会天…吗？'
                    },
                    {
                        id: 5,
                        title: '主界面2',
                        content: '主上，可以的话给伊吹安排点事情做吧…这样光是坐着总感觉有点…不安……'
                    },
                    {
                        id: 6,
                        title: '触摸台词',
                        content: '主上，需要伊吹做些什么…？'
                    },
                    {
                        id: 7,
                        title: '特殊触摸',
                        content: '主上！？难、难道伊吹犯了什么错误？'
                    },
                    {
                        id: 8,
                        title: '摸头台词',
                        content: '主上……？'
                    },
                    {
                        id: 9,
                        title: '邮件提醒',
                        content: '主上，新的邮件来了。…需、需要伊吹为您读一下…？'
                    },
                    {
                        id: 10,
                        title: '好感度-爱',
                        content: '主上，给您倒杯茶。…呼…明明我们什么都没做，只是在一起消磨时间，为什么伊吹会有种非常充实，甚至充满到溢出来的感觉……主上，伊吹的这种感觉，就是“恋爱”吗…？'
                    },
                    {
                        id: 11,
                        title: '旗舰开战',
                        content: '主上由伊吹守护！'
                    },
                ]
            },
        ]

    },
    {
        id: 6,
        name: 'http://123.56.102.179:9999/img/azur/names/yingrui.webp',
        titleName: '肇和级防护巡洋舰2号舰 应瑞 ROC Ying Swei',
        roleColthes: [{
                id: 1,
                title: '通常',
                content: 'http://123.56.102.179:9999/img/azur/role/yingrui/tongchang.webp'
            },
            {
                id: 2,
                title: '换装1',
                content: 'http://123.56.102.179:9999/img/azur/role/yingrui/clothes1.webp'
            },
        ],
        rolesInfo: [{
                id: 1,
                title: '名字',
                content: '应瑞'
            },
            {
                id: 2,
                title: '阵营',
                content: '东煌'
            },
            {
                id: 3,
                title: '类型',
                content: '轻巡洋舰'
            },
            {
                id: 4,
                title: '发色',
                content: '暗紫、灰白'
            },
            {
                id: 5,
                title: '瞳色',
                content: '黛蓝'
            },
            {
                id: 6,
                title: '性格',
                content: '温柔体贴、小腹黑'
            },
            {
                id: 7,
                title: '关键词',
                content: '笔墨丹青'
            },
            {
                id: 8,
                title: '持有物',
                content: '毛笔型舰装'
            },
            {
                id: 9,
                title: '实装时间',
                content: '2021年2月4日'
            },
            {
                id: 10,
                title: '誓约时间',
                content: '2021年12月11日'
            },
            {
                id: 11,
                title: '生日',
                content: '7月14日'
            },
            {
                id: 11,
                title: '个性',
                content: '写得一手好书法，言行举止也宛若大家闺秀。但却有喜欢捉弄姐姐肇和，并欣赏其手忙脚乱的样子的小恶魔一面。'
            },
        ],
        clothesLines: [{
                id: 1,
                name: '台词',
                lines: [{
                        id: 1,
                        title: '登陆界面',
                        content: '碧蓝航线！'
                    },
                    {
                        id: 2,
                        title: '舰船型号',
                        content: '肇和级防护巡洋舰 - 应瑞'
                    },
                    {
                        id: 3,
                        title: '自我介绍',
                        content: '我是肇和级防护巡洋舰二号舰——应瑞，同时也是肇和的妹妹。顺便一提，如果您恰好看到我和姐姐拌嘴，请不要惊讶，那正是我们关系融洽的表现，嗯~'
                    },
                    {
                        id: 4,
                        title: '获取台词',
                        content: '指挥官，您好，我是肇和级巡洋舰的姐姐，应瑞。小肇和说她才是姐姐？唔，果然指挥官没有肇和那么好骗呢…'
                    },
                    {
                        id: 5,
                        title: '登录台词',
                        content: '勤劳的指挥官，今天也按时来工作了呢。指挥官…真的没想过愉偷懒吗？'
                    },
                    {
                        id: 6,
                        title: '登录台词(誓约)',
                        content: '今天也要辛苦了呢。感谢指挥官一直以来的勤劳哦。...呼呼，可不能偷懒哦？'
                    },
                    {
                        id: 7,
                        title: '查看详情',
                        content: '严格说来，从时间上来算的话，我好像的确是姐姐呢…不过，既然肇和这么看重“姐姐”，这个身份就让给她吧。而且，身为“妹妹”，也是会有许多意想不到的便利的呢，呵呵~'
                    },
                    {
                        id: 8,
                        title: '主界面1',
                        content: '肇和把撑场面的事都交给了我呢。我倒是不介意，只是这样长久下去，她离想要稳固“姐姐”地位的愿望不就反而越来越远了吗…'
                    },
                    {
                        id: 9,
                        title: '主界面2',
                        content: '指挥官，这是来自应瑞的温馨提醒——您已经发呆好一会了哦？'
                    },
                    {
                        id: 10,
                        title: '主界面3',
                        content: '指挥官对书画感兴趣吗？如果你有时间的话，我可以教你。虽然听起来有点像自夸，不过这方面我还是比较擅长的呢。'
                    },
                    {
                        id: 11,
                        title: '主界面(誓约1)',
                        content: '指挥官，有重要事情的时候，请把应瑞和肇和一起喊上哦。'
                    },
                    {
                        id: 12,
                        title: '主界面(誓约2)',
                        content: '为您呈上一杯优雅的红茶。呵呵~'
                    },
                    {
                        id: 13,
                        title: '触摸台词',
                        content: '感觉疲倦的话，要趁早休息哦。若是因为过劳而拖垮了身体，可就得不偿失了。'
                    },
                    {
                        id: 14,
                        title: '特殊触摸',
                        content: '现在是大声喊“非礼”的最佳时机呢，如果指挥官给我一点好处的话，我可以考虑放你一马哦？'
                    },
                    {
                        id: 15,
                        title: '摸头台词',
                        content: '要是弄乱头发，可就要罚指挥官帮我梳一个星期的头发哦？'
                    },
                    {
                        id: 16,
                        title: '摸头台词(誓约)',
                        content: '被摸头了呢，呼呼❤...嗯，没什么哦。'
                    },
                    {
                        id: 17,
                        title: '任务提醒',
                        content: '指挥官，有新的任务哦。这个时候如果是肇和的话，应该会像老妈子一样催着你干活吧？'
                    },
                    {
                        id: 18,
                        title: '任务完成',
                        content: '任务结束。接下来先填饱肚子，泡个舒舒服服的热水澡，然后睡觉！如果真的能这么悠哉就好了。'
                    },
                    {
                        id: 19,
                        title: '邮件提醒',
                        content: '新的邮件么…冷冰冰的印刷文字，比起手写的还是缺少一股人情味呢。'
                    },
                    {
                        id: 20,
                        title: '回港台词',
                        content: '指挥官，欢迎回来。这趟行程中是不是积累了许多想对应瑞说的话呢？请休息一下，再好好和我说说吧~'
                    },
                    {
                        id: 21,
                        title: '好感度-失望',
                        content: '……应瑞对指挥官没有什么想说的。'
                    },
                    {
                        id: 22,
                        title: '好感度-陌生',
                        content: '肇和现在应该在练舞吧。指挥官，不如…我们一起悄悄去看看？'
                    },
                    {
                        id: 23,
                        title: '好感度-友好',
                        content: '肇和是不是跟您告状，说我逼她干活了？可不能轻信了她的话哦，我只是让一直以各种理由逃避家务的姐姐稍微面对一下现实而已，呵呵。'
                    },
                    {
                        id: 24,
                        title: '好感度-喜欢',
                        content: '最近在指挥官身边的时候，总会有些心神不宁....虽然大概知道症结所在，但......啊，抱歉，您就当我是自言自语吧。'
                    },
                    {
                        id: 25,
                        title: '好感度-爱',
                        content: '虽然有许多话语想要倾诉，看到指挥官后，反而不知该付诸何种话语...还是以笔墨寄托应瑞此时的情感吧。请指挥官不要见笑....'
                    },
                    {
                        id: 26,
                        title: '好感度-爱(誓约)',
                        content: '在与指挥官确认过彼此心意的现在，反而感觉找回了原本的余裕呢。呵呵，情话也好，烦恼也好，让我们尽情分享彼此的喜怒哀乐吧，指挥官。'
                    },
                    {
                        id: 27,
                        title: '誓约台词',
                        content: '岁月倥偬，唯有白纸黑字能够成为时光的见证。这是我一笔一墨写下的情笺，现在，我将它，还有我自己，全部托付给您了。'
                    },
                    {
                        id: 28,
                        title: '委托完成',
                        content: '委托组回来了。别忘了犒劳每一位奔波的伙伴哦。'
                    },
                    {
                        id: 29,
                        title: '强化成功',
                        content: '想要保护重视之物，就得让自己变得足够强大才行呢。'
                    },
                    {
                        id: 30,
                        title: '旗舰开战',
                        content: '除恶务尽！'
                    },
                    {
                        id: 31,
                        title: '胜利台词',
                        content: '胜利的宣言，就等到回去再说吧。'
                    },
                    {
                        id: 32,
                        title: '失败台词',
                        content: '我的力量，还不足以阻挡敌人吗…'
                    },
                    {
                        id: 33,
                        title: '技能台词',
                        content: '丹青不渝！'
                    },
                    {
                        id: 34,
                        title: '血量告急',
                        content: '我们不会，也不可能在这里退缩…！'
                    },
                    {
                        id: 35,
                        title: '彩蛋台词1',
                        content: '（肇和）姐姐，可不能被敌人看扁了哦？'
                    },
                    {
                        id: 36,
                        title: '彩蛋台词2',
                        content: '（鞍山，抚顺，长春，太原，逸仙，宁海，平海，肇和）并肩作战吧！'
                    },
                ]
            },
            {
                id: 2,
                name: '寒松雪暖',
                lines: [{
                        id: 1,
                        title: '皮肤描述',
                        content: '指挥官，新年好，应瑞在此为您送上新年的祝福。嗯…下一步是不是就是“红包拿来”了呢？开玩笑的。'
                    },
                    {
                        id: 2,
                        title: '登录台词',
                        content: '春暖催人眠，人们往往会在春天睡过头呢…不过，指挥官好像已经习惯早起了？'
                    },
                    {
                        id: 3,
                        title: '查看详情',
                        content: '今年的春联交给我和肇和了。我负责写，她负责想，是不是很合适的分工呢？看肇和为了想春联而烦恼的样子，还是挺有意思的，呵呵~等她再烦恼会再帮她一起想吧。'
                    },
                    {
                        id: 4,
                        title: '主界面1',
                        content: '逸仙，年夜饭我也来帮忙吧，鱼准备好了吗？没有的话我再去备一条。'
                    },
                    {
                        id: 5,
                        title: '主界面2',
                        content: '没想到还能和姐姐，以及其他的同伴们像这样团圆在一起…确实得好好感谢指挥官才是呢。'
                    },
                    {
                        id: 6,
                        title: '主界面3',
                        content: '抚顺，如果你再把鞭炮扔进池塘里，就罚你捧着荷叶扮荷花哦？'
                    },
                    {
                        id: 7,
                        title: '触摸台词',
                        content: '指挥官，都春节了，还是稍微喘口气比较好哦？'
                    },
                    {
                        id: 8,
                        title: '特殊触摸',
                        content: '节日到了，指挥官的心也渐渐飘起来了呢。'
                    },
                    {
                        id: 9,
                        title: '回港台词',
                        content: '春风送暖，冰雪消融，万物复苏。春天代表着的，正是美好的新生呢。'
                    },
                    {
                        id: 10,
                        title: '胜利台词',
                        content: '干·得·不·错♪…呵呵，这种感觉如何呢♪'
                    },

                ]
            }
        ]

    },
]

//关于个人信息的
apiRouter.get('/azur', (req, res) => {

    //返回点击的角色信息
    const getId = parseInt(req.query.id)
    const getRole = RoleImgs.filter((item) => item.id === getId)
    res.send({
        sentence: 'http://123.56.102.179:9999/img/azur/names/qhqxmmpx.webp',
        names: names,
        theRole: getRole,
        roleBgImg: "http://123.56.102.179:9999/img/azur/role/bgimg/bgimg.webp"
    })
})

module.exports = apiRouter;