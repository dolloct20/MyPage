import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { name: 'Dashboard', path: 'dashboard', component: () => import('pages/Dashboard.vue') },
      { name: 'LabPage', path: 'lab_page', component: () => import('pages/LabPage.vue') },
      { name: 'ExamPage', path: 'exam_page', component: () => import('pages/ExamPage.vue') },
      { name: 'CulturePage', path: 'culture_page', component: () => import('pages/CulturePage.vue') },
      { name: 'ProfilePage', path: 'profile_page', component: () => import('pages/ProfilePage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
