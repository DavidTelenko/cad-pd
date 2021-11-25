import { createRouter, createWebHistory } from 'vue-router';
import InputGroup from "../components/InputGroup.vue";
import Modeler from "../components/Modeler.vue";
import NotFoundComponent from "../components/NotFoundComponent.vue";

const routes = [
    {
        path: "/",
        name: "input",
        component: InputGroup,
    },
    {
        path: "/modeler",
        name: "modeler",
        component: Modeler,
        beforeEnter: (to, from, next) => {
            if (from.name == "input") next();
            else next('/');
        },
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundComponent
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;