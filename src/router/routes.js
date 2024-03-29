
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('pages/Authentication.vue')
  },
  {
    path: '/event/:lng/:lat',
    name: 'event',
    component: () => import('pages/PublicEvent.vue'),
    props: true
  },
  {
    path: '/display/:event',
    name: 'displayEvent',
    component: () => import('pages/DisplayEvent.vue'),
    props: true
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
