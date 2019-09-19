
export default [
  {
    path: '/',
    component: () => import('@/components/body')
  },
  {
    path: '/login',
    component: () => import('@/view/login')
  }
] 