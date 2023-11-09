import { createRouter, createWebHistory } from 'vue-router';

import HomeView from "@/views/HomeView.vue";
import LexicalAnalyzer from "@/views/LexicalAnalyzer.vue";
import SyntacticAnalyzer from "@/views/SyntacticAnalyzer.vue";

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lexical',
      name: 'lexical',
      component: LexicalAnalyzer
    },
    {
      path: '/syntactic',
      name: 'syntactic',
      component: SyntacticAnalyzer
    }
  ]
});

export default router;
