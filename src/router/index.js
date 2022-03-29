import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PedidosView from "../views/PedidosView.vue";
import SaboresView from "../views/SaboresView.vue";
import LoginView from "../views/LoginView.vue";
import AdminView from "../views/AdminPedidosView.vue";

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: HomeView
  },
  {
    path: "/pedido",
    name: "Pedidos",
    component: PedidosView
  },
  {
    path: "/sabores",
    name: "Sabores",
    component: SaboresView
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
