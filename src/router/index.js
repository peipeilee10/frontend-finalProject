import Vue from 'vue'
import VueRouter from 'vue-router'
import Front from '../views/front/Front.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Front',
    component: Front,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Front" */ '../views/front/Home.vue'),
        meta: {
          title: '關於我們 | Happy Shower'
        }
      },
      {
        path: 'service',
        name: 'Service',
        component: () => import(/* webpackChunkName: "Front" */ '../views/front/Service.vue'),
        meta: {
          title: '服務項目 | Happy Shower'
        }
      },
      {
        path: 'appointment',
        name: 'Appointment',
        component: () => import(/* webpackChunkName: "Front" */ '../views/front/Appointment.vue'),
        meta: {
          title: '線上預約 | Happy Shower'
        }
      },
      {
        path: 'appointmentCheckout',
        name: 'AppointmentCheckout',
        component: () => import(/* webpackChunkName: "Front" */ '../views/front/AppointmentCheckout.vue'),
        meta: {
          title: '線上預約結帳 | Happy Shower'
        }
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "Front" */ '../views/front/Products.vue'),
        meta: {
          title: '線上購物 | Happy Shower'
        }
      },
      {
        path: 'product/:id',
        name: 'Productself',
        component: () => import(/* webpackChunkName: "Front" */ '../views/front/Productself.vue'),
        meta: {
          title: '商品介紹 | Happy Shower'
        }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "Front" */ '../views/front/Cart.vue'),
        meta: {
          title: '購物車 | Happy Shower'
        }
      },
      {
        path: 'photo',
        name: 'Photo',
        component: () => import(/* webpackChunkName: "Front" */ '../views/front/Photo.vue'),
        meta: {
          title: '寵物寫真 | Happy Shower'
        }
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "Front" */ '../views/front/Contact.vue'),
        meta: {
          title: '聯絡我們 | Happy Shower'
        }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Front" */ '../views/front/Login.vue'),
        meta: {
          title: '登入 | Happy Shower'
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "Front" */ '../views/front/Register.vue'),
        meta: {
          title: '註冊 | Happy Shower'
        }
      }
    ]
  },
  {
    path: '/back',
    name: 'Back',
    component: () => import(/* webpackChunkName: "Back" */ '../views/back/Back.vue'),
    children: [
      {
        path: 'member',
        name: 'Member',
        component: () => import(/* webpackChunkName: "Member" */ '../views/back/member/Member.vue'),
        meta: {
          login: true,
          title: '會員專區'
        },
        children: [
          {
            path: '',
            name: 'MemberSettings',
            component: () => import(/* webpackChunkName: "Member" */ '../views/back/member/MemberSettings.vue'),
            meta: {
              login: true,
              title: '會員資料專區'
            }
          },
          {
            path: 'appointment',
            name: 'MemberAppointment',
            component: () => import(/* webpackChunkName: "Member" */ '../views/back/member/MemberAppointment.vue'),
            meta: {
              login: true,
              title: '會員美容預約管理'
            }
          },
          {
            path: 'orders',
            name: 'MemberOrders',
            component: () => import(/* webpackChunkName: "Member" */ '../views/back/member/MemberOrders.vue'),
            meta: {
              login: true,
              title: '會員商品訂單管理'
            }
          }
        ]
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "Admin" */ '../views/back/admin/Admin.vue'),
        meta: {
          login: true,
          admin: true,
          title: '管理員專區'
        },
        children: [
          {
            path: '/',
            name: 'AdminAppointment',
            component: () => import(/* webpackChunkName: "admin" */ '../views/back/admin/AdminAppointment.vue'),
            meta: {
              login: true,
              admin: true,
              title: '預約管理 | 管理頁面'
            }
          },
          {
            path: 'orders',
            name: 'AdminOrders',
            component: () => import(/* webpackChunkName: "admin" */ '../views/back/admin/AdminOrders.vue'),
            meta: {
              login: true,
              admin: true,
              title: '訂單管理 | 管理頁面'
            }
          },
          {
            path: 'productsell',
            name: 'Productsell',
            component: () => import(/* webpackChunkName: "admin" */ '../views/back/admin/Productsell.vue'),
            meta: {
              login: true,
              admin: true,
              title: '商品管理 | 管理頁面'
            }
          },
          {
            path: 'carouselchange',
            name: 'CarouselChange',
            component: () => import(/* webpackChunkName: "admin" */ '../views/back/admin/CarouselChange.vue'),
            meta: {
              login: true,
              admin: true,
              title: '輪播圖置換 | 管理頁面'
            }
          }
        ]
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

// 路由守衛

router.beforeEach((to, from, next) => {
  const user = store.getters['user/user']
  // 如果要去的那頁需要登入，並且使用者沒有登錄
  if (to.meta.login && !user.isLogin) {
    next('/login')
  // 如果要去的那頁需要管理員身分，並且使用者沒有權限
  } else if (to.meta.admin && !user.isAdmin) {
    // 回首頁
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
