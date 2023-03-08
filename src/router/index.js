import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
import ProjectPage from "../views/ProjectPage.vue";
import ContactPage from "../views/ContactPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
    meta: {
      title: "Home | Ariyibi Baseet",
    },
  },
  {
    path: "/project-page",
    name: "ProjectPage",
    component: ProjectPage,
    meta: {
      title: "Project | Ariyibi Baseet",
    },
  },
  {
    path: "/contact-page",
    name: "ContactPage",
    component: ContactPage,
    meta: {
      title: "Contact | Ariyibi Baseet",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
