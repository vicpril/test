import Hello from './components/front/Hello.vue';
import Home from './components/front/Home.vue';

export const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
    },
    {
      path: '/articles',
      name: 'articles',
//       component: Hello,
    },
]
