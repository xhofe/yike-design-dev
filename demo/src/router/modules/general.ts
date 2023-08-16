import { RouteRecordRaw } from 'vue-router';

const generalRoutes: Array<RouteRecordRaw> = [
  {
    path: 'affix',
    component: () => import('@/examples/affix/doc.md'),
  },
  {
    path: 'alert',
    component: () => import('@/examples/alert/doc.md'),
  },
  {
    path: 'anchor',
    component: () => import('@/examples/anchor/doc.md'),
  },
  {
    path: 'avatar',
    component: () => import('@/examples/avatar/doc.md'),
  },
  {
    path: 'back-top',
    component: () => import('@/examples/back-top/doc.md'),
  },
  {
    path: 'badge',
    component: () => import('@/examples/badge/doc.md'),
  },
  {
    path: 'breadcrumb',
    component: () => import('@/examples/breadcrumb/doc.md'),
  },
  {
    path: 'button',
    component: () => import('@/examples/button/doc.md'),
  },
  {
    path: 'checkbox',
    component: () => import('@/examples/checkbox/doc.md'),
  },
  {
    path: 'collapse',
    component: () => import('@/examples/collapse/doc.md'),
  },
  {
    path: 'collapse',
    component: () => import('@/examples/collapse/doc.md'),
  },
  {
    path: 'color',
    component: () => import('@/examples/color/doc.md'),
  },
  {
    path: 'color',
    component: () => import('@/examples/color/doc.md'),
  },
  {
    path: 'drawer',
    component: () => import('@/examples/drawer/doc.md'),
  },
  {
    path: 'dropdown',
    component: () => import('@/examples/dropdown/doc.md'),
  },
  {
    path: 'empty',
    component: () => import('@/examples/empty/doc.md'),
  },
  {
    path: 'form',
    component: () => import('@/examples/form/doc.md'),
  },
  {
    path: 'icon',
    component: () => import('@/examples/icon/doc.md'),
  },
  {
    path: 'image',
    component: () => import('@/examples/image/doc.md'),
  },
  {
    path: 'input',
    component: () => import('@/examples/input/doc.md'),
  },
  {
    path: 'input-number',
    component: () => import('@/examples/input-number/doc.md'),
  },
  {
    path: 'popconfirm',
    component: () => import('@/examples/popconfirm/doc.md'),
  },
  {
    path: 'progress',
    component: () => import('@/examples/progress/doc.md'),
  },
  {
    path: 'radio',
    component: () => import('@/examples/radio/doc.md'),
  },
  {
    path: 'rate',
    component: () => import('@/examples/rate/doc.md'),
  },
  {
    path: 'scrollbar',
    component: () => import('@/examples/scrollbar/doc.md'),
  },
  {
    path: 'slider',
    component: () => import('@/examples/slider/doc.md'),
  },
  {
    path: 'space',
    component: () => import('@/examples/space/doc.md'),
  },
  {
    path: 'spinner',
    component: () => import('@/examples/spinner/doc.md'),
  },
  {
    path: 'switch',
    component: () => import('@/examples/switch/doc.md'),
  },
  {
    path: 'timeline',
    component: () => import('@/examples/timeline/doc.md'),
  },
  {
    path: 'tree',
    component: () => import('@/examples/tree/doc.md'),
  },
  {
    path: 'tree-select',
    component: () => import('@/examples/treeSelect/doc.md'),
  },
  {
    path: 'typography',
    component: () => import('@/examples/typography/doc.md'),
  },
  {
    path: 'upload',
    component: () => import('@/examples/upload/doc.md'),
  },
];

export default generalRoutes;
