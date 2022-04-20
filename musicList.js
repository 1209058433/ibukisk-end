const express = require('express')
const apiRouter = express.Router()


//关于
apiRouter.get('/musiclist', (req, res) => {
    res.send({
        data: [{
            name: "アスノヨゾラ哨戒班。明日的夜空哨戒班（Cover IA）",
            artist: "Akie秋绘 / 夏璃夜",
            url: "http://123.56.102.179:9999/music/01/music.m4a",
            cover: "http://123.56.102.179:9999/music/01/cover.webp",
            // lrc: "歌词或歌词文件的URL",
        }, {
            name: "ふゆびより",
            artist: "佐々木恵梨",
            url: "http://123.56.102.179:9999/music/02/music.m4a",
            cover: "http://123.56.102.179:9999/music/02/cover.webp",
        }, {
            name: "故人泪",
            artist: "泠鸢yousa / KBShinya",
            url: "http://123.56.102.179:9999/music/03/music.m4a",
            cover: "http://123.56.102.179:9999/music/03/cover.webp",
        }, {
            name: "那家花店",
            artist: "锦零",
            url: "http://123.56.102.179:9999/music/04/music.m4a",
            cover: "http://123.56.102.179:9999/music/04/cover.webp",
        }, {
            name: "不可思議のカルテ",
            artist: "瀬戸麻沙美 / 東山奈央 / 種崎敦美 / 内田真礼 / 久保ユリカ / 水瀬いのり",
            url: "http://123.56.102.179:9999/music/05/music.m4a",
            cover: "http://123.56.102.179:9999/music/05/cover.webp",
        }, {
            name: "月がきれい",
            artist: "東山奈央",
            url: "http://123.56.102.179:9999/music/06/music.m4a",
            cover: "http://123.56.102.179:9999/music/06/cover.webp",
        }, {
            name: "世末歌者（Cover 乐正绫）",
            artist: "双笙（陈元汐） / 封茗囧菌",
            url: "http://123.56.102.179:9999/music/07/music.m4a",
            cover: "http://123.56.102.179:9999/music/07/cover.webp",
        }, {
            name: "时光盲盒",
            artist: "ChiliChill",
            url: "http://123.56.102.179:9999/music/08/music.m4a",
            cover: "http://123.56.102.179:9999/music/08/cover.webp",
        }, {
            name: "时光书（Cover AZU）",
            artist: "桃子在发芽",
            url: "http://123.56.102.179:9999/music/09/music.m4a",
            cover: "http://123.56.102.179:9999/music/09/cover.webp",
        }, {
            name: "不问天",
            artist: "说说Crystal",
            url: "http://123.56.102.179:9999/music/10/music.m4a",
            cover: "http://123.56.102.179:9999/music/10/cover.webp",
        }]
    })
})

module.exports = apiRouter;