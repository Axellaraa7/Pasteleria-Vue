import { createStore } from 'vuex'

export default createStore({
  state: {
    user: true,
    admin: {
      user: "axelLara",
      password: "1234",
      state: false,
      logged: false
    },
    sabores: [
      {
        name:"Chocolate",
        precio: 300,
        url: "Chocolate.jpg",
        inventario: 15
      },
      {
        name:"Frambuesa",
        precio: 350,
        url: "Frambuesa.jpg",
        inventario: 15
      },
      {
        name:"Fresa",
        precio: 400,
        url: "Fresa.jpg",
        inventario: 15
      },
      {
        name:"Zanahoria",
        precio: 250,
        url: "Zanahoria.jpg",
        inventario: 15
      },
      {
        name:"Manzana",
        precio: 250,
        url: "Manzana.jpg",
        inventario: 15
      },
      {
        name:"Queso",
        precio: 500,
        url: "Queso.jpg",
        inventario: 15
      },
      {
        name:"Coco",
        precio: 280,
        url: "Coco.jpg",
        inventario: 15
      },
      {
        name:"Frutos Rojos",
        precio: 450,
        url: "FrutosRojos.jpg",
        inventario: 15
      }
    ],
    adornos: [
      {
        name:"Vela de cumpleaños",
        precio: 25,
        url:"cumpleanios.jpg",
        inventario: 15
      },
      {
        name:"Personaje Animado",
        precio: 100,
        url:"personaje.png",
        inventario: 15
      }, 
      {
        name:"Vela de boda",
        precio: 25,
        url:"boda.jpg",
        inventario: 15
      },
      {
        name:"Petalos de flores",
        precio: 50,
        url:"petalos.jpg",
        inventario: 15
      }, 
      {
        name:"Corazones comestibles",
        precio:200,
        url:"corazones.jpg",
        inventario: 15
      },
      {
        name:"Numeros de cumpleaños",
        precio:20,
        url:"numeros.jpg",
        inventario: 15
      }
    ],
    pedidos: [],
    pedido:{
      name: "",
      tel: "",
      email: "",
      sabor: "",
      adornos: [],
      cantidad: 0,
      descripcion: ""
    }
  },
  getters: {
    getName(state){
      return state.name;
    },
    getSabores(state){
      return state.sabores;
    },
    getAdornos(state){
      return state.adornos;
    },
    getPedidos(state){
      return state.pedidos;
    },
    getUser(state){
      return state.user;
    },
    getAdmin(state){
      return state.admin;
    }
  },
  mutations: { 
    fillOrders(state){
      state.pedidos.push(state.pedido);
      state.pedido = {};
      console.log(state.pedidos);
    },
    change2User(state){
      state.user = true;
      state.admin.state = false;
    },
    change2Admin(state){
      state.admin.state = true;
      state.user = false;
    }
  },
  actions: {
    fillOrders(context){
      context.commit("fillOrders");
    },
    changeUser(context,ban){
      if(ban) context.commit("change2Admin"); 
      else context.commit("change2User");
    }
  },
  modules: {
  }
})
