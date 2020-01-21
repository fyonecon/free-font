﻿var baseUrl = 'https://cdn.jsdelivr.net/gh/wordshub/free-font/';
//type  1:黑体 2:宋体 3:楷体 4:艺术字体 5:手绘体
var fontsMap = {
    SiYuanSongTi_Regular: {
        type: '2',
        code: 'siyuansongti',
        name: '思源宋体',
        preview: 'images/font/siyuansongti/font.svg',
        posters: ['images/font/siyuansongti/poster.svg'],
        auth: false,
        license: 'OFL-1.1',
        source: 'https://github.com/adobe-fonts/source-han-serif',
        download: '',
        desc: '「思源宋体」是 Adobe Type 发布的最新泛 CJK 字体，它是对应于<a target="blank" href="https://blog.typekit.com/alternate/source-han-sans-chs/" >思源黑体</a>的宋体字体；我们发布这两种字体是为了响应统一设计的需求，以服务于东亚 15 亿人口。\n思源宋体支持四种不同的东亚语言（简体中文、繁体中文、日语和朝鲜语），7 种粗细类型中的每一种都有 65,535 个字形，可共同呈现一致的视觉美感。该字体还包含多个西方字形，支持拉丁语、希腊语和西里尔文脚本，这些字形均来源于 <a target="blank" href="https://blog.typekit.com/2017/01/10/introducing-source-serif-2-0/">Source Serif</a>。'
    },
    SiYuanHeiTi_Regular: {
        type: '1',
        code: 'siyuanheiti',
        name: '思源黑体',
        preview: 'images/font/siyuanheiti/font.svg',
        posters: ['images/font/siyuanheiti/poster.svg'],
        license: 'OFL-1.1',
        auth: false,
        source: 'https://github.com/adobe-fonts/source-han-sans',
        download: '',
        desc: '「思源黑体」是一套 OpenType/CFF 泛中日韩字体。这个开源项目不仅提供了可用的 OpenType 字体，还提供了利用 AFDKO <b>makeotf</b> 和 <b>otf2otc</b> 工具创建这些 OpenType 字体时的所有源文件。'
    },
    FangZhengShuSong_Regular: {
        type: '2',
        code: 'fangzhengshusong',
        name: '方正书宋',
        preview: 'images/font/fangzhengshusong/font.svg',
        posters: ['images/font/fangzhengshusong/poster.svg'],
        born: '20191225',
        version: '',
        license: '商免',
        auth: true,
        source: 'https://www.foundertype.com/index.php/About/bookAuth/key/my_sysq.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E6%96%B9%E6%AD%A3%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E6%96%B9%E6%AD%A3%E4%B9%A6%E5%AE%8B%E7%AE%80%E4%BD%93.ttf',
        desc: '「方正书宋」源自上海印刷技术研究所的宋二，原字形距今已有近60年。最初的设计就是专门针对最常用的小字号正文排版。方正书宋的字形端正清秀，中宫适度。凭着清晰爽目、久读不易疲劳、印刷适性好的优点，长期被作为杂志和书籍的正文首选字体，所以也是一款非常经典的正文宋体。'
    },
    FangZhengFangSong_Regular: {
        type: '2',
        code: 'fangzhengfangsong',
        name: '方正仿宋',
        preview: 'images/font/fangzhengfangsong/font.svg',
        posters: ['images/font/fangzhengfangsong/poster.svg'],
        license: '商免',
        auth: true,
        source: 'https://www.foundertype.com/index.php/About/bookAuth/key/my_sysq.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E6%96%B9%E6%AD%A3%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E6%96%B9%E6%AD%A3%E4%BB%BF%E5%AE%8B%E7%AE%80%E4%BD%93.ttf',
        desc: '「仿宋体」产生于20世纪初，由当时的铅字制作者仿宋版书中的瘦细字体而制成。方正仿宋源于铅字时代的字稿，其字身略窄，笔画瘦硬，横竖笔画等粗，起笔处有斜势棱角，折笔处棱角分明，整体字形挺拔俊秀，给人以悦目之感。因清晰美观，容易辨认，长期被用于工程图纸文字和书刊中的引文。'
    },
    FangZhengHeiTi_Regular: {
        type: '1',
        code: 'fangzhengheiti',
        name: '方正黑体',
        preview: 'images/font/fangzhengheiti/font.svg',
        posters: ['images/font/fangzhengheiti/poster.svg'],
        license: '商免',
        auth: true,
        source: 'https://www.foundertype.com/index.php/About/bookAuth/key/my_sysq.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E6%96%B9%E6%AD%A3%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E6%96%B9%E6%AD%A3%E9%BB%91%E4%BD%93%E7%AE%80%E4%BD%93.ttf',
        desc: '「方正黑体」的设计源于铅字时代的黑体字稿，是一款专门为正文排版设计的黑体。方正黑体的笔画两端留有喇叭口，撇、捺、钩笔画的粗细变化较大，中宫比较紧凑。其字重适中、字形风格中性朴实，不但适用于印刷媒介，还可用于屏幕阅读，是一款非常经典的正文黑体。'
    },
    FangZhengKaiTi_Regular: {
        type: '3',
        code: 'fangzhengkaiti',
        name: '方正楷体',
        preview: 'images/font/fangzhengkaiti/font.svg',
        posters: ['images/font/fangzhengkaiti/poster.svg'],
        license: '商免',
        auth: true,
        source: 'https://www.foundertype.com/index.php/About/bookAuth/key/my_sysq.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E6%96%B9%E6%AD%A3%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E6%96%B9%E6%AD%A3%E6%A5%B7%E4%BD%93%E7%AE%80%E4%BD%93.ttf',
        desc: '「方正楷体」源于上海印刷技术研究所“华文楷体”字稿。原“华文楷体”诞生于20世纪40年代，新中国成立后一直是主要使用的铅字楷体。在此期间，上海字模一厂、上海印刷技术研究所等单位进行了数次改良，并添加了简体字。方正楷体的结构秀丽匀称，笔画圆润柔和，横竖笔画的粗细变化不大。这款字体被大量应用于报纸、杂志和书籍中的正文，在教科书中最为常见。'
    },
    PangMenZhengDaoBiaoTiTi_Regular: {
        type: '4',
        code: 'pangmenzhengdaobiaotiti',
        name: '庞门正道标题体',
        preview: 'images/font/pangmenzhengdaobiaotiti/font.svg',
        posters: ['images/font/pangmenzhengdaobiaotiti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://mp.weixin.qq.com/s/1ccpLCOrIn81JhV9ulwPIQ',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%BA%9E%E9%97%A8%E6%AD%A3%E9%81%93%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E5%BA%9E%E9%97%A8%E6%AD%A3%E9%81%93%E6%A0%87%E9%A2%98%E4%BD%93.ttf',
        desc: '「庞门正道标题体」由庞门正道联合了13位设计师于2016年推出的第一款免费商用字体。'
    },
    PangMenZhengDaoCuShuTi_Regular: {
        type: '5',
        code: 'pangmenzhengdaocushuti',
        name: '庞门正道粗书体',
        preview: 'images/font/pangmenzhengdaocushuti/font.svg',
        posters: ['images/font/pangmenzhengdaocushuti/poster.svg',
            'https://mmbiz.qpic.cn/mmbiz_jpg/Rhh4hWLlib1aCOKB8XqaBQKuRpDtoibaicPmrsic5oAZgexII9hdK9q3N69CHEN5GsySiatYUF67w96MYStkqibFPTEQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            'https://mmbiz.qpic.cn/mmbiz_jpg/Rhh4hWLlib1aCOKB8XqaBQKuRpDtoibaicPbxjqV2LhAbt1XmhLu6qGlKIcqEib7aLgicusT3ibGBRbibpfGPKZicqsI4w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            'https://mmbiz.qpic.cn/mmbiz_jpg/Rhh4hWLlib1aCOKB8XqaBQKuRpDtoibaicPnz03EOjGLbssVCVs7lEhP91txDeIseDAPaqB0cYDoDSjU6DoxE7d7A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            'https://mmbiz.qpic.cn/mmbiz_jpg/Rhh4hWLlib1aCOKB8XqaBQKuRpDtoibaicPwahmexYZg0TpHibVEmqic3bxtECPApx5RCibEJwDibSsdKb4SB91dkbxTA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            'https://mmbiz.qpic.cn/mmbiz_jpg/Rhh4hWLlib1aCOKB8XqaBQKuRpDtoibaicPMWfzhuwjEvfY92YGibTcGYibhU2AlcLVpPspmlmD0093stbklLvcHVcA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            'https://mmbiz.qpic.cn/mmbiz_jpg/Rhh4hWLlib1aCOKB8XqaBQKuRpDtoibaicPMicB2A4UgZADkT2Omeu7g8rjHLyPfu1BHI5jvfcqsBA600F7Glia4a7w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
        ],
        license: '商免',
        auth: false,
        source: 'https://mp.weixin.qq.com/s/LZ_PMNc-3uX-Atmri4OLGQ',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%BA%9E%E9%97%A8%E6%AD%A3%E9%81%93%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E5%BA%9E%E9%97%A8%E6%AD%A3%E9%81%93%E7%B2%97%E4%B9%A6%E4%BD%93.ttf',
        desc: '「庞门正道粗书体」由庞门正道公众号2018年发布的第二款免费商用字体，由车港敏设计完成'
    },
    PangMenZhengDaoQingSongTi_Regular: {
        type: '4',
        code: 'pangmenzhengdaoqingsongti',
        name: '庞门正道轻松体',
        preview: 'images/font/pangmenzhengdaoqingsongti/font.svg',
        posters: ['images/font/pangmenzhengdaoqingsongti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://mp.weixin.qq.com/s/1ccpLCOrIn81JhV9ulwPIQ',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%BA%9E%E9%97%A8%E6%AD%A3%E9%81%93%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E5%BA%9E%E9%97%A8%E6%AD%A3%E9%81%93%E8%BD%BB%E6%9D%BE%E4%BD%93.otf',
        desc: '「庞门正道轻松体」由庞门正道在2019年发布的第三款免费字体。'
    },
    ZhanKuGaoDuanHei_Regular: {
        type: '4',
        code: 'zhankugaoduanhei',
        name: '站酷高端黑',
        preview: 'images/font/zhankugaoduanhei/font.svg',
        posters: ['images/font/zhankugaoduanhei/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/article/ZMTQyOTUy.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E7%AB%99%E9%85%B7%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%20%E7%AB%99%E9%85%B7%E9%AB%98%E7%AB%AF%E9%BB%91.ttf',
        desc: '「站酷高端黑」由字体设计师胡晓波、刘兵克发起，参与汉字百人舞100位字体设计师共同完成。是2014年圣诞发布的第一款由站酷冠名的公益字体，字体设计师胡晓波、刘兵克在站酷网发起“汉字百人舞”的征集设计师集体造字，前后参与设计师近百人。2014年12月发布第一版，2015年11月发布最新修订版。包含6763个汉字、数字和英文字母。「庞门正道轻松体」由庞门正道在2019年发布的第三款免费字体。'
    },
    ZhanKuWenYiTi_Regular: {
        type: '4',
        code: 'zhankuwenyiti',
        name: '站酷文艺体',
        preview: 'images/font/zhankuwenyiti/font.svg',
        posters: ['images/font/zhankuwenyiti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZMjc2NDA5NDA=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E7%AB%99%E9%85%B7%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E7%AB%99%E9%85%B7%E6%96%87%E8%89%BA%E4%BD%93.ttf',
        desc: '「站酷文艺体」由字体设计师刘兵克确定字形和规范，由刘兵克工作室以及刘兵克字体设计直播课学员共同创作完成，设计师郑庆科完成了最终的字库生成工作。字形新颖独特，简洁有力，清新淡雅，文艺范十足。包含7155个常用字，52个英文字母，10 个阿拉伯数字，67个常用标点及符号。'
    },
    ZhanKuXiaoWeiLOGOTi_Regular: {
        type: '4',
        code: 'zhankuxiaoweilogo',
        name: '站酷小微LOGO体',
        preview: 'images/font/zhankuxiaoweilogo/font.svg',
        posters: ['images/font/zhankuxiaoweilogo/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/special/zcoolfonts/',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E7%AB%99%E9%85%B7%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E7%AB%99%E9%85%B7%E5%B0%8F%E8%96%87LOGO%E4%BD%93.otf',
        desc: '「站酷小微LOGO体」由上海佐兹品牌设计工作室设计总监李大卫 (David 小马哥）带领其工作室团队共成完成。是李大卫送给自己女儿出生三周年的一个礼物。其目的是为了填补免费字体中的LOGO体空缺。字体笔画浑厚，识别性高,放大放小空间间隙都能如意灵通。2018年1月最新修订版。采用GB2312汉字编码，共收录6763个汉字。'
    },
    ZhanKuQingKeHuangYouTi_Regular: {
        type: '4',
        code: 'zhankuqingkehuangyouti',
        name: '站酷庆科黄油体',
        preview: 'images/font/zhankuqingkehuangyouti/font.svg',
        posters: ['images/font/zhankuqingkehuangyouti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZMTg5MDEyMDQ=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E7%AB%99%E9%85%B7%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E7%AB%99%E9%85%B7%E5%BA%86%E7%A7%91%E9%BB%84%E6%B2%B9%E4%BD%93.ttf',
        desc: '「站酷庆科黄油体」，由字体设计师郑庆科开发，线条圆润。并且字体数量多，达到了9千个多个汉字。站酷庆科黄油体是一款字型创新、线条圆润的字体。笔划的每一个直角，都被处理成了半径为4pt的圆角。在设计中需遵循笔划简化但不省略，笔划角度尽量为垂直角度。字体部首的右下角均为45°缺角，提高了字体视觉中心，并有效的解决了一些字体因笔划交叉，字体阅读困难的毛病。'
    },
    ZhanKuKuHei_Regular: {
        type: '4',
        code: 'zhankukuhei',
        name: '站酷酷黑',
        preview: 'images/font/zhankukuhei/font.svg',
        posters: ['images/font/zhankukuhei/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZMTc2MDM5MTY=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E7%AB%99%E9%85%B7%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E7%AB%99%E9%85%B7%E9%85%B7%E9%BB%91%E4%BD%93.ttf',
        desc: '「站酷酷黑」由胡晓波发起，字游工作室成员进行基础字形设计。胡晓波设计班十名学员共同设计完成。[站酷酷黑体验版］在站酷十周年之际横空出世。字形笔画粗犷有力，用宽扁型的字面构建出厚重的字体形态，笔画细节上的修饰既增强了字体的设计感，又让字体多了一些小小的精致感，中宫的饱满使得文字之间的排版组合非常醒目好看。2016年7月发布体验版。包含3500个常用字，52个英文字母，10个阿拉伯数字。'
    },
    ZhanKuKuaiLeTi_Regular: {
        type: '4',
        code: 'zhankukuaileti',
        name: '站酷快乐体',
        preview: 'images/font/zhankukuaileti/font.svg',
        posters: ['images/font/zhankukuaileti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZMTMzMDQ0Mjg=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E7%AB%99%E9%85%B7%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E7%AB%99%E9%85%B7%E5%BF%AB%E4%B9%90%E4%BD%93.ttf',
        desc: '「站酷快乐体」由刘兵克学员和工作室团队设计。是在“站酷快乐体”基础上耗时7个月进行的大幅修改与提升，经过多轮校审之后已正式对外公布并提供下载。2015年9月发布第一版，2016年6月发布最新修订版。采用GB2312汉字编码，共收录6763个汉字。'
    },
    HuXiaoBoNanShenTi_Regular: {
        type: '4',
        code: 'huxiaobonanshenti',
        name: '胡晓波男神体',
        preview: 'images/font/huxiaobonanshenti/font.svg',
        posters: ['images/font/huxiaobonanshenti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZNDE3NjcwMTY=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E8%83%A1%E6%99%93%E6%B3%A2%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E8%83%A1%E6%99%93%E6%B3%A2%E7%94%B7%E7%A5%9E%E4%BD%93.otf',
        desc: '「胡晓波男神体」由设计师胡晓波设计的一款免费字体'
    },
    HuXiaoBoSaoBaoTi_Regular: {
        type: '4',
        code: 'huxiaobosaobaoti',
        name: '胡晓波骚包体',
        preview: 'images/font/huxiaobosaobaoti/font.svg',
        posters: ['images/font/huxiaobosaobaoti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZNDE3NjcwMTY=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E8%83%A1%E6%99%93%E6%B3%A2%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E8%83%A1%E6%99%93%E6%B3%A2%E9%AA%9A%E5%8C%85%E4%BD%93.otf',
        desc: '「胡晓波骚包体」由设计师胡晓波设计的一款免费字体'
    },
    HuXiaoBoZhenShuaiTi_Regular: {
        type: '4',
        code: 'huxiaobozhenshuaiti',
        name: '胡晓波真帅体',
        preview: 'images/font/huxiaobozhenshuaiti/font.svg',
        posters: ['images/font/huxiaobozhenshuaiti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZNDE3NjcwMTY=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E8%83%A1%E6%99%93%E6%B3%A2%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E8%83%A1%E6%99%93%E6%B3%A2%E7%9C%9F%E5%B8%85%E4%BD%93.otf',
        desc: '「胡晓波真帅体」是由设计师胡晓波设计的一款免费字体'
    },
    MuYaoRuanBiShouXieTi_Regular: {
        type: '5',
        code: 'muyaoruanbishouxieti',
        name: '沐瑶软笔手写体',
        preview: 'images/font/muyaoruanbishouxieti/font.svg',
        posters: ['images/font/muyaoruanbishouxieti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZMjg5MjAwMDQ=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E6%B2%90%E7%91%B6%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E6%B2%90%E7%91%B6%E8%BD%AF%E7%AC%94%E6%89%8B%E5%86%99%E4%BD%93.ttf',
        desc: '「沐瑶软笔手写体」（Muyao-Softbrush ） 是一款手写体，自来站酷设计师@春颜秋色送给女儿的礼物。也是以女儿名字命名的一款可免费商用的手写字体。遵循GB2312标准，共包含6763个汉字加数字英文和常用标点。'
    },
    MuYaoSuiXinShouXieTi_Regular: {
        type: '5',
        code: 'muyaosuixinshouxieti',
        name: '沐瑶随心手写体',
        preview: 'images/font/muyaosuixinshouxieti/font.svg',
        posters: ['images/font/muyaosuixinshouxieti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZMzYwMzk2MjA=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E6%B2%90%E7%91%B6%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/%E6%B2%90%E7%91%B6%E9%9A%8F%E5%BF%83%E6%89%8B%E5%86%99%E4%BD%93.ttf',
        desc: '「沐瑶随心手写体」站酷设计师@春颜秋色免费开发的第二款公益字体。沐瑶是以其女儿的名字命名的。字体本身是基于GB2312-80标准，共包含6763个汉字和数百个符号。'
    },
    BaoTuXiaoBaiTi_Regular: {
        type: '4',
        code: 'baotuxiaobaiti',
        name: '包图小白体',
        preview: 'images/font/baotuxiaobaiti/font.svg',
        posters: ['images/font/baotuxiaobaiti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://act.ibaotu.com/activity/1.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E5%8C%85%E5%9B%BE%E5%B0%8F%E7%99%BD%E4%BD%93.ttf',
        desc: '「包图小白体」定义为一款简单可爱的创意字体。在字形笔画上去除了折笔的弧形，换之以平直的笔画，竖弯钩转为竖折，同时弱化了钩笔画，省去了许多笔画末尾的小尾巴，显得更加直白可爱。粗短的笔画，像柯基的小短腿，相比细长的字体能给人更多的轻松感。整体形态采用了镂空的制作技巧，增强了字体的立体感，适合用于品牌标志、海报、包装、影视综艺、游戏、漫画等场景。包图小白体采用GB2312编码，共收容7707个字符，包含6763个简体汉字、110个大写字母、139个小写字母、102个数字、95个标点符号、其他特殊类符号288个、其他字母210个（包含日文平假名片假名）。'
    },
    JiangXiZhuoKai_Regular: {
        type: '4',
        code: 'jiangxizhuokai',
        name: '江西拙楷',
        preview: 'images/font/jiangxizhuokai/font.svg',
        posters: ['images/font/jiangxizhuokai/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZNDE4MzY4Mjg=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E6%B1%9F%E8%A5%BF%E6%8B%99%E6%A5%B7.ttf',
        desc: '「江西拙楷」由站酷设计师@Fontree （黄煜臣）个人开发并发布，这是一套手写楷体，相比电脑中标准化制作的楷体，这套字体的笔画会带有一些书写的痕迹，每个字的笔画是没有统一标准的，所以看上去显得不够规范，但是会有一种手写的自然之感。'
    },
    WenCangShuFang_Regular: {
        type: '4',
        code: 'wencangshufang',
        name: '问藏书房',
        preview: 'images/font/wencangshufang/font.svg',
        posters: ['images/font/wencangshufang/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.wencang.com/font.jsp',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E9%97%AE%E8%97%8F%E4%B9%A6%E6%88%BF.ttf',
        desc: '「问藏书房」字体是由问藏书房联合造字工房一起的设计的一款免费字体，字体整体现代简约，中宫紧凑，视觉阅读极具层次感，字字俊秀且呈现古雅之风，设计团队以精心的设计赋予了汉字全新美感！字符编码采用中华人民共和国GB2312-80字符集标准，按需添加101个汉字。共收容字数6864CJK汉字，ASCII常用字符100个。'
    },
    LianMengQiYiLuShuaiZhenRuiHeiTi_Regular: {
        type: '4',
        code: 'lianmengqiyilushuaizhenruiheiti',
        name: '联盟起艺卢帅正锐黑体',
        preview: 'images/font/lianmengqiyilushuaizhenruiheiti/font.svg',
        posters: ['images/font/lianmengqiyilushuaizhenruiheiti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZMzUxMzUzNzY=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E8%81%94%E7%9B%9F%E8%B5%B7%E8%89%BA%E5%8D%A2%E5%B8%85%E6%AD%A3%E9%94%90%E9%BB%91%E4%BD%93.ttf',
        desc: '「联盟起艺卢帅正锐黑体」由站酷设计师@设计师卢帅 在站酷发布，共计8000余字'
    },
    XianErTi_Regular: {
        type: '4',
        code: 'xianerti',
        name: '贤二体',
        preview: 'images/font/xianerti/font.svg',
        posters: ['images/font/xianerti/poster.svg'],
        license: '商免',
        auth: true,
        source: 'https://www.zcool.com.cn/article/ZNjk4NDM2.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E8%B4%A4%E4%BA%8C%E4%BD%93.ttf',
        desc: '「贤二体」是龙泉专寺动漫中心与汉仪字库联合推出的一款免费商用字体。贤二体的字形偏长，起笔收笔锋利且粗细对比明显，笔画笨拙微带曲线感。字体组合结构松散，重心不稳，达到诙谐幽默，惹人喜爱的效果。'
    },
    ShouShuTi_Regular: {
        type: '5',
        code: 'shoushuti',
        name: '手书体',
        preview: 'images/font/shoushuti/font.svg',
        posters: ['images/font/shoushuti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZMjI2MDk1MDg=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E6%89%8B%E4%B9%A6%E4%BD%93.ttf',
        desc: '由站酷设计师@Joker9 设计，收录基本汉字6763个，字体风格为手写风格，可以用于slogan、banner、海报、商标等设计里面。'
    },
    YangRenDongZhuShiTi_Regular: {
        type: '4',
        code: 'yangrendongzhushiti',
        name: '杨任东竹石体',
        preview: 'images/font/yangrendongzhushiti/font.svg',
        posters: ['images/font/yangrendongzhushiti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://mp.weixin.qq.com/s/7kv3i_YEs7x9_9IrCDYvBA',
        download: '',
        desc: '杨任东竹石体于2017年4月26日世界知识产权日正式发布，本字体版本为1.23字体按照GB2312-80书写，并增补了少量常见汉字；整套字体有7个字重，共计50000余个字符'
    },
    ZiTiShiJieFaGunTi_Regular: {
        type: '4',
        code: 'zitishijiefagunti',
        name: '字体视界法棍体',
        preview: 'images/font/zitishijiefagunti/font.svg',
        posters: ['images/font/zitishijiefagunti/poster.svg'],
        license: '商免',
        auth: true,
        source: 'https://www.17font.com/fontDay/OpenSource',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E5%AD%97%E4%BD%93%E8%A7%86%E7%95%8C%E6%B3%95%E6%A3%8D%E4%BD%93.ttf',
        desc: '「字体视界法棍体」由原字体（《义启嘟嘟体》登记号：沪作登字-2016-F-00712739）更名而来。由上海义启信息科技有限公司字库部员工通过字体软件进行设计与制作，为了让更多的人可以免费使用商用字体，公司决定改名为《字体视界法棍体》，并于2019年7月17日字体节这天在字体视界官网发布许可广大用户免费商用。字体视界法棍体笔画中间呈弧形外拓，充满张力，加粗字形笔画显得更可爱个性；结构空间变化不像正体那样小，以拙为巧，憨态可掬。这款字体笔画纤细充满张力，规律加粗，曲线折角充分展现它可爱不粗笨的气质笔画，结构外圆内疏，左右呼应如手写，各个字生机勃勃又融为一体，整体一气呵成。采用 GB2312 编码，共收容 7698 个字符，包含 6771 个汉字，110 个大写字母，139 个小写字母，102 个数字（包含阿拉伯数字，罗马数字等），98 个标点符号，其他特殊符号 164 个，其他字母 224 个。'
    },
    ZhuoJianGanLanJianTi_Regular: {
        type: '4',
        code: 'zhuojianganlanjianti',
        name: '卓健橄榄简体',
        preview: 'images/font/zhuojianganlanjianti/font.svg',
        posters: ['images/font/zhuojianganlanjianti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZNDA2MzA3ODQ=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E5%8D%93%E5%81%A5%E6%A9%84%E6%A6%84%E7%AE%80%E4%BD%93.ttf',
        desc: '「卓健橄榄简体」由卓米品牌设计发布，并于于2019年底授权限时免费商用。收容7050个常用字，52 个英文字母，139个阿拉伯数字及常用标点符号，卓健橄榄简体是一款相对较时尚的字体，部分笔画斜切处理，让字体更具时尚感和时尚属性，整体中心偏上，更符合现代审美。官方给出的说法是限时免费下载，免费商用。具体是指可以免费商用，限时下载，还是限时免费商用，官方没有给出明确解释，这点存有疑问。如果有商用需求，请与官方联系求证。'
    },
    YouSheBiaoTiHei_Regular: {
        type: '4',
        code: 'youshebiaotihei',
        name: '优设标题黑',
        preview: 'images/font/youshebiaotihei/font.svg',
        posters: ['images/font/youshebiaotihei/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.uisdc.com/uisdc-first-free-font',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E4%BC%98%E8%AE%BE%E6%A0%87%E9%A2%98%E9%BB%91.ttf',
        desc: '「优设标题黑」由优设与字由合作完成，是一款适用性广，速度感、力量感极强的专业美术标题字体。它以黑体字型为基础，整体字形沉稳，同时采用较大字面和粗壮的笔画来强化力量感。每个字体水平倾斜 8° 的设计，赋予了字体极强的速度感，为了让字体倾斜后也能保持稳固，设计师将整体字身设定宽扁。而起笔和弯钩上独具匠心的尖角设计，不仅突显了设计的几何感，而且方便后期修改。'
    },
    RuiZiZhenYanTi_Regular: {
        type: '4',
        code: 'ruizizhenyanti',
        name: '锐字真言体',
        preview: 'images/font/ruizizhenyanti/font.svg',
        posters: ['images/font/ruizizhenyanti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'http://reeji.com/font/rui_zi_zhen_yan_ti/',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E9%94%90%E5%AD%97%E7%9C%9F%E8%A8%80%E4%BD%93.ttf',
        desc: '「锐字真言体」是锐字家族字体当中第一款免费可商用的字体。真言体笔触浑厚有力，笔画曲折有度，字形个性鲜明，刚柔并济，落笔简洁有序，给人以遒劲有力、端正凝练的感受。直角与圆角的错落搭配使得字体婉转有度，落落大方，具有自己独到的风格！这款字体特别适用于文字标题、竞技视觉、广告设计、个性品牌设计推广、企业宣传及时尚品牌的设计应用。'
    },
    XinYeNianTi_Regular: {
        type: '4',
        code: 'xinyenianti',
        name: '新叶念体',
        preview: 'images/font/xinyenianti/font.svg',
        posters: ['images/font/xinyenianti/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.zcool.com.cn/work/ZMzc1MDI2Njg=.html',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E6%96%B0%E5%8F%B6%E5%BF%B5%E4%BD%93.otf',
        desc: '「新叶念体」采用GB2312编码，约6900字，王亚设计 在站酷发布。'
    },
    QingSongShouXieTiYi_Regular: {
        type: '5',
        code: 'qingsongshouxietiyi',
        name: '清松手写体1',
        preview: 'images/font/qingsongshouxietiyi/font.svg',
        posters: ['images/font/qingsongshouxietiyi/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.facebook.com/groups/549661292148791/',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E6%B8%85%E6%9D%BE%E6%89%8B%E5%AF%AB%E9%AB%94/%E6%B8%85%E6%9D%BE%E6%89%8B%E5%AF%AB%E9%AB%941.ttf',
        desc: '「清松手写体」它是一款来自台湾的字体，它由游清松建立，为了创建这个字体，他还成立了一个小组： 「顺其字然」，首先先在稿纸上用原子笔手写，然后，透过「守写字」网站产生出初稿字体，再透过字体软件后制加工的手写字体。「顺其字然」手写字体，没有一般计算机字型的生硬感，多了几分手写般的自然感。不论是中文、英文、符号数字，适合在计算机屏幕上阅读、排版，打印出来效果也很棒的！'
    },
    QingSongShouXieTiEr_Regular: {
        type: '5',
        code: 'qingsongshouxietier',
        name: '清松手写体2',
        preview: 'images/font/qingsongshouxietier/font.svg',
        posters: ['images/font/qingsongshouxietier/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.facebook.com/groups/549661292148791/',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E6%B8%85%E6%9D%BE%E6%89%8B%E5%AF%AB%E9%AB%94/%E6%B8%85%E6%9D%BE%E6%89%8B%E5%AF%AB%E9%AB%942.ttf',
        desc: '「清松手写体」它是一款来自台湾的字体，它由游清松建立，为了创建这个字体，他还成立了一个小组： 「顺其字然」，首先先在稿纸上用原子笔手写，然后，透过「守写字」网站产生出初稿字体，再透过字体软件后制加工的手写字体。「顺其字然」手写字体，没有一般计算机字型的生硬感，多了几分手写般的自然感。不论是中文、英文、符号数字，适合在计算机屏幕上阅读、排版，打印出来效果也很棒的！'
    },
    QingSongShouXieTiSan_Regular: {
        type: '5',
        code: 'qingsongshouxietisan',
        name: '清松手写体3',
        preview: 'images/font/qingsongshouxietisan/font.svg',
        posters: ['images/font/qingsongshouxietisan/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://www.facebook.com/groups/549661292148791/',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/%E6%B8%85%E6%9D%BE%E6%89%8B%E5%AF%AB%E9%AB%94/%E6%B8%85%E6%9D%BE%E6%89%8B%E5%AF%AB%E9%AB%943.ttf',
        desc: '「清松手写体」它是一款来自台湾的字体，它由游清松建立，为了创建这个字体，他还成立了一个小组： 「顺其字然」，首先先在稿纸上用原子笔手写，然后，透过「守写字」网站产生出初稿字体，再透过字体软件后制加工的手写字体。「顺其字然」手写字体，没有一般计算机字型的生硬感，多了几分手写般的自然感。不论是中文、英文、符号数字，适合在计算机屏幕上阅读、排版，打印出来效果也很棒的！'
    },
    FandolFang_Regular: {
        type: '2',
        code: 'fandolfang',
        name: '破产字体仿宋',
        preview: 'images/font/fandolfang/font.svg',
        posters: ['images/font/fandolfang/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://ctan.org/tex-archive/fonts/fandol',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E7%A0%B4%E4%BA%A7%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/FandolFang-Regular.otf',
        desc: '「破产字体」（Fandol）来自一家已经破产的字体公司，现在已经开源了。包含FandolFang、FandolHei、FandolKai、FandolSong四个字体。'
    },
    FandolHei_Regular: {
        type: '1',
        code: 'fandolhei',
        name: '破产字体黑体',
        preview: 'images/font/fandolhei/font.svg',
        posters: ['images/font/fandolhei/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://ctan.org/tex-archive/fonts/fandol',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E7%A0%B4%E4%BA%A7%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/FandolHei-Regular.otf',
        desc: '「破产字体」（Fandol）来自一家已经破产的字体公司，现在已经开源了。包含FandolFang、FandolHei、FandolKai、FandolSong四个字体。'
    },
    FandolKai_Regular: {
        type: '3',
        code: 'fandolkai',
        name: '破产字体楷体',
        preview: 'images/font/fandolkai/font.svg',
        posters: ['images/font/fandolkai/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://ctan.org/tex-archive/fonts/fandol',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E7%A0%B4%E4%BA%A7%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/FandolKai-Regular.otf',
        desc: '「破产字体」（Fandol）来自一家已经破产的字体公司，现在已经开源了。包含FandolFang、FandolHei、FandolKai、FandolSong四个字体。'
    },
    FandolSong_Regular: {
        type: '2',
        code: 'fandolsong',
        name: '破产字体宋体',
        preview: 'images/font/fandolsong/font.svg',
        posters: ['images/font/fandolsong/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://ctan.org/tex-archive/fonts/fandol',
        download: 'https://github.com/wordshub/free-font/raw/master/assets/font/%E4%B8%AD%E6%96%87/%E7%A0%B4%E4%BA%A7%E5%AD%97%E4%BD%93%E7%B3%BB%E5%88%97/FandolSong-Regular.otf',
        desc: '「破产字体」（Fandol）来自一家已经破产的字体公司，现在已经开源了。包含FandolFang、FandolHei、FandolKai、FandolSong四个字体。'
    },
    OPPOSans_Regular: {
        type: '1',
        code: 'opposans',
        name: 'OPPO Sans 字体',
        preview: 'images/font/opposans/font.svg',
        posters: ['images/font/opposans/poster.svg'],
        license: '商免',
        auth: false,
        source: 'https://bbs.coloros.net/graphic?id=2272309',
        download: 'https://github.com/wordshub/free-font/tree/master/assets/font/%E4%B8%AD%E6%96%87/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/OPPO%20Sans',
        desc: '「OPPO Sans」 是 OPPO 全新品牌字体，首发于 ColorOS 6 操作系统，由 OPPO 与国内知名字体厂商汉仪合作开发出的全新中文字库，总共 226003 个字节。OPPO Sans 紧随品牌升级的步调，用文字全方位探索科技美感，字体整体简洁优雅，字型设计富有现代感，极具科技美感。字体采用全新骨架设计，中宫自然舒适，更加挺拔优雅；同时简化笔画，把握更多细节处理，去除出脚，使字体显得更加干净。简洁富有变化的字体线条还融入 OPPO 产品曲线美学，极具现代感和未来感，字体更加现代，笔画更加均匀，视觉表现更加整洁，非常适合用来作为设计素材使用，实用性相当广泛。'
    }

};