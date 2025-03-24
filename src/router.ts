import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "./page/HomePage.vue";

const routes = [{ path: "/", component: HomePage }];

export default createRouter({
  history: createMemoryHistory(),
  routes,
});
