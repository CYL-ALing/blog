const { editLinks } = require("./themeConfig");

// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'Java',
    link: '/java/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        // text: 'java进阶',
        items: [
          { text: 'Java进阶', link: '/java/generics/' },
          //此处放文件夹
          // { text: '《Git》',link: '/note/git/',},
          // { text: '《WinForm》笔记',link: '/note/WinForm/',},
        ],
      },
    ],
  },
  {
    text: 'Kotlin',
    link: '/kotlin/',
    // items: [
    //   { text: '《安卓》笔记', link: '/note/mcu/' },
    // ]
  },
  {
    text: 'Android',
    link: '/android/',
    // items: [
    //   { text: '《安卓》笔记', link: '/note/mcu/' },
    // ]
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      //{ text: '学习', link: '/pages/f2a556/' },
      //{ text: '面试', link: '/pages/aea6571b7a8bae86/' },
      //{ text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      //{ text: '实用技巧', link: '/pages/baaa02/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '书签',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '书签', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
