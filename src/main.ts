import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ShopwareFrontends from "./plugins/shopware-frontends";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)",
      component: () => import("./pages/Resolver.vue"),
    },
  ],
});
app.use(ShopwareFrontends, {
  shopwareEndpoint: "https://demo-frontends.shopware.store",
  shopwareAccessToken: "SWSCBHFSNTVMAWNZDNFKSHLAYW",
  apiDefaults: {},
});

app.use(router);
app.mount("#app");
