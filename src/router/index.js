import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PedidosView from "../views/PedidosView.vue";
import SaboresView from "../views/SaboresView.vue";
import LoginView from "../views/LoginView.vue";
import AdminLoginView from "../views/AdminLoginView.vue";
import AdminPedidoView from "../views/AdminPedidosView.vue";
import InventarioView from "../views/InventarioView.vue";

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
    component: AdminLoginView
  },
  {
    path:"/admin_orders",
    name: "Admin Orders",
    component: AdminPedidoView
  },
  {
    path:"/inventario",
    name:"Inventario",
    component: InventarioView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
