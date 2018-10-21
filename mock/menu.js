const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '1',
    icon: 'appstore',
    name: '近期活动',
    route: '/newActivity',
  },
  {
    id: '2',
    name: '活动信息',
    icon: 'bars',

  },
  {
    id: '21',
    bpid: '2',
    mpid: '2',
    name: '讲座报名',
    route: '/Activity/Lecture',
  },
  {
    id: '22',
    bpid: '2',
    mpid: '2',
    name: '活动报名',
    route: '/Activity/Live',
  },
  {
    id: '23',
    bpid: '2',
    mpid: '2',
    name: '往期讲座',
    route: '/Activity/Past',
  },
  // {
  //   id: '24',
  //   bpid: '2',
  //   mpid: '2',
  //   name: '线下活动',
  //   route: '/chart/ECharts',
  // },
  {
    id: '3',
    name: '联系方式',
    icon: 'user',
    route: '/contact',
  },
  // {
  //   id: '7',
  //   bpid: '1',
  //   name: 'Request',
  //   icon: 'api',
  //   route: '/request',
  // },
  {
    id: '4',
    bpid: '1',
    name: '活动统计',
    icon: 'bar-chart',
  },
  {
    id: '41',
    bpid: '4',
    mpid: '4',
    name: 'ECharts',
    icon: 'line-chart',
    route: '/chart/ECharts',
  },
  {
    id: '42',
    bpid: '4',
    mpid: '4',
    name: 'highCharts',
    icon: 'bar-chart',
    route: '/chart/highCharts',
  },
  {
    id: '43',
    bpid: '4',
    mpid: '4',
    name: 'Rechartst',
    icon: 'area-chart',
    route: '/chart/Recharts',
  },
  {
    id: '5',
    bpid: '1',
    name: '发布活动',
    icon: 'camera-o',
  },
  {
    id: '51',
    bpid: '5',
    mpid: '5',
    name: '讲座发布',
    route: '/Release',
  },
  // {
  //   id: '52',
  //   bpid: '5',
  //   mpid: '5',
  //   name: 'DataTable',
  //   icon: 'database',
  //   route: '/UIElement/dataTable',
  // },
  // {
  //   id: '53',
  //   bpid: '5',
  //   mpid: '5',
  //   name: 'DropOption',
  //   icon: 'bars',
  //   route: '/UIElement/dropOption',
  // },
  // {
  //   id: '54',
  //   bpid: '5',
  //   mpid: '5',
  //   name: 'Search',
  //   icon: 'search',
  //   route: '/UIElement/search',
  // },
  // {
  //   id: '55',
  //   bpid: '5',
  //   mpid: '5',
  //   name: '56pxor',
  //   icon: 'edit',
  //   route: '/UIElement/editor',
  // },
  // {
  //   id: '56',
  //   bpid: '5',
  //   mpid: '5',
  //   name: 'layer (Function)',
  //   icon: 'credit-card',
  //   route: '/UIElement/layer',
  // },

  {
    id: '6',
    bpid: '1',
    name: '设置',
    icon: 'setting',
  },
  {
    id: '61',
    bpid: '6',
    mpid: '6',
    name: '修改密码',
    route: '/Setting',
  }
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
