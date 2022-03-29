import { createStore } from 'vuex'

export default createStore({
  state: {
    name: "",
    sabores: [
      {
        name:"Chocolate",
        precio: 300,
        url: "Chocolate.jpg"
      },
      {
        name:"Frambuesa",
        precio: 350,
        url: "Frambuesa.jpg"
      },
      {
        name:"Fresa",
        precio: 400,
        url: "Fresa.jpg"
      },
      {
        name:"Zanahoria",
        precio: 250,
        url: "Zanahoria.jpg"
      },
      {
        name:"Manzana",
        precio: 250,
        url: "Manzana.jpg"
      },
      {
        name:"Queso",
        precio: 500,
        url: "Queso.jpg"
      },
      {
        name:"Coco",
        precio: 280,
        url: "Coco.jpg"
      },
      {
        name:"Frutos Rojos",
        precio: 450,
        url: "FrutosRojos.jpg"
      }
    ],
    adornos: [
      {
        name:"Vela de cumpleaños",
        precio: 25,
        url:"cumpleanios.jpg"
      },
      {
        name:"Personaje Animado",
        precio: 100,
        url:"personaje.png"
      }, 
      {
        name:"Vela de boda",
        precio: 25,
        url:"boda.jpg"
      },
      {
        name:"Petalos de flores",
        precio: 50,
        url:"petalos.jpg"
      }, 
      {
        name:"Corazones comestibles",
        precio:200,
        url:"corazones.jpg"
      },
      {
        name:"Numeros de cumpleaños",
        precio:20,
        url:"numeros.jpg"
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
    }
  },
  mutations: { 
    fillOrders(state){
      state.pedidos.push(state.pedido);
      state.pedido = {};
      console.log(state.pedidos);
    }
  },
  actions: {
    fillOrders(context){
      context.commit("fillOrders");
    }
  },
  modules: {
  }
})
