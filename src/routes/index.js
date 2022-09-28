import { createRouter, createWebHashHistory } from "vue-router";

import CreateListPage from "../pages/CreateListPage.vue";
import TasksListPage from "../pages/TasksListPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
  
    {
      path: "/createtask",
      component: CreateListPage,
    },
    {
      path: "/taskslist",
      component: TasksListPage,
    },
  ],
});
