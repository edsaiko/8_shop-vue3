import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'

const routes=[
  {
    path:'/Main',
    component:()=>import('@/views/Main.vue'),
  },
  {
    path:'/home',
    component:()=>import('@/views/home/Home.vue'),
    // children:[
    //     {
    //         path:'/',
    //         name:'home',
    //         component:()=>import('@/views/home/Home.vue')
    //     }
    // ]
  },
  {
    path:'/category',
    component:()=>import('@/views/category/Category.vue'),
    children:[
      {
          path:'/category/man',
          name:'man',
          component:()=>import('@/views/category/man/Man.vue')
      },
      {
        path:'/category/girl',
        name:'girl',
        component:()=>import('@/views/category/girl/Girl.vue')
      },
      {
        path:'/category/all',
        name:'all',
        component:()=>import('@/views/category/all/All.vue')
      },
    ]
  },
  {
    path:'/search',
    component:()=>import('@/views/search/Search.vue'),
  },
  {
    path:'/detail',
    component:()=>import('@/views/detail/Detail.vue'),
  },
  {
    path:'/cart',
    component:()=>import('@/views/cart/Cart.vue'),
  },
  {
    path:'/settlement',
    component:()=>import('@/views/settlement/Settlement.vue'),
  },
  {
    path:'/login',
    component:()=>import('@/views/login/Login.vue'),
  },
  {
    path:'/register',
    component:()=>import('@/views/register/Register.vue'),
  },
  {
    path:'/user-center',
    name:'test',
    component:()=>import('@/views/userCenter/UserCenter.vue'),
    redirect:"/user-center/my",
    children:[
      {
        path:'/user-center/my',
        name:'my',
        component:()=>import('@/views/userCenter/my/My.vue')
      },
      {
        path:'/user-center/save',
        name:'save',
        component:()=>import('@/views/userCenter/save/Save.vue')
      },
    ]
  },
  //其它错误地址重定向用*在这里失效了，会报错，说*要被定义
  // {
  //     path:'*',
  //     redirect:"/"
  // }
]

const router = createRouter({
  //用哈希的不成功？哈希好像对回退有帮助
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router