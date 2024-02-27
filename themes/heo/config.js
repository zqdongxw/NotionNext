const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '心中心法简介', url: 'https://blog.customai.win/xinzhongxin' },
    { title: '十大行愿', url: 'https://blog.customai.win/xingyuan' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '唯有如来心中心',
  HEO_HERO_TITLE_2: '余不能及',
  HEO_HERO_TITLE_3: '印心学堂',
  HEO_HERO_TITLE_4: '祖师开示',
  HEO_HERO_TITLE_5: '心密影音',
  HEO_HERO_TITLE_LINK: 'http://www.hljsyxjs.net/pc/video',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '大愚阿阇黎', url: '/tag/大愚阿阇黎' },
  HEO_HERO_CATEGORY_2: { title: '仁知阿阇黎', url: '/tag/仁知阿阇黎' },
  HEO_HERO_CATEGORY_3: { title: '元音阿阇黎', url: '/tag/元音阿阇黎' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
     '你好！',
    '南无心密历代祖师',
    '南无根本上师元音阿阇黎'
  ],
  HEO_INFO_CARD_URL: '', // 个人资料底部按钮链接

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'dayuzushi',
      img_1: '/images/heo/dayuzushi.jpg',
      color_1: '#989bf8',
      title_2: 'renzhizushi',
      img_2: '/images/heo/renzhizushi.jpg',
      color_2: '#ffffff'
    },
    {
      title_1: 'dayuzushi2',
      img_1: '/images/heo/dayuzushi2.jpg',
      color_1: '#57b6e6',
      title_2: 'renzhizushi2',
      img_2: '/images/heo/renzhizushi2.jpg',
      color_2: '#4082c3'
    },
    {
      title_1: 'yuanyinzushi',
      img_1: '/images/heo/yuanyinzushi.jpg',
      color_1: '#ffffff',
      title_2: 'yuanyinzushi2',
      img_2: '/images/heo/yuanyinzushi2.jpg',
      color_2: '#ffffff'
    },
    {
      title_1: 'yuanyinzushi3',
      img_1: '/images/heo/yuanyinzushi3.jpg',
      color_1: '#eb6840',
      title_2: 'yuanyinzushi4',
      img_2: '/images/heo/yuanyinzushi4.jpg',
      color_2: '#8f55ba'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '齐说齐闻',
  HEO_SOCIAL_CARD_TITLE_2: '周一 晚上 7:30-9:00',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入腾讯会议',
  HEO_SOCIAL_CARD_URL: 'https://meeting.tencent.com/dw/KKFYupjykzoG',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
