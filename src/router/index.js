import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login/Login.vue';
import DashBoard from '../views/DashBoard/DashBoard.vue';
import Notice from '../views/Management/Notice.vue';

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/vue',
        name: 'vue',
        component: DashBoard,
        children: [
            {
                path: 'management',
                name: 'management',
                children: [
                    {
                        path: 'notice',
                        name: 'notice',
                        component: Notice,
                    },
                ],
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
