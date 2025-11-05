import App from '@/App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
    { path: '/home', name: 'Home', component: App }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;