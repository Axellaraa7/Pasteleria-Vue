<template>
  <h1 class="titlesSection">Realizar Pedido</h1>
  <section class="formulario">
    <fieldset class="formElement">
      <legend>DATOS</legend>
      <div class="inputText">
        <label for="nombre" class="labelRequired">Nombre:   </label>
        <input type="text" v-model="name" name="nombre" placeholder="Introduce tu nombre" required>
      </div>

      <div class="inputText">
        <label for="telefono" class="labelRequired">Telefono: </label>
        <input type="tel" v-model="tel" name="telefono" placeholder="Introduce tu telefono" required>
      </div>
      
      <div class="inputText">
        <label for="email" class="labelRequired">Email: </label>
        <input type="email" v-model="email" name="email" placeholder="Introduce tu email" required>
      </div>   
    </fieldset>
    
    <fieldset class="formElement">
      <legend>PEDIDO</legend>
      <div class="inputRatioCheck">
        <p>Elija el sabor:</p>
        <label v-for="(sabor) of $store.getters.getSabores" :key="sabor.id" :for="sabor.name" >
          <input type="radio" :id="sabor.name" v-model="this.sabor" :value="sabor" name="sabor" required> 
          {{sabor.name}}
        </label>
      </div>

      <div class="inputRatioCheck">
        <p>Elija los adornos:</p>
        <label v-for="(adorno) of $store.getters.getAdornos" :key="adorno.id" :for="adorno.name">
          <input type="checkbox" :id="adorno.name" name="adornos" :value="adorno" v-model="adornos"> 
          {{adorno.name}}
        </label>
      </div>

      <div class="details">
        <div class="counter">
          <p>Cantidad</p>
          <button @click="restar" class="btn btnBlueDark"> - </button>
          <span> {{ cantidad }}</span>
          <button @click="sumar" class="btn btnBlueDark"> + </button>
        </div>

        <div class="textAreaInput"> 
          <p>Descripcion del pedido</p>
          <textarea v-model="descripcion" name="descripcion" cols="20" rows="5" placeholder="Escribe una descripcion general del pastel"></textarea>
        </div>
      </div>

      <figure class="imgButtons">
        <img :src="(this.sabor == '') ? getUrlImg('PASTELERIA.png') : getUrlImg('SABORES/'+this.sabor.url)" alt="pedido">
        
        <figcaption v-if="this.sabor != ''">{{sabor.name}} <span>TOTAL: ${{ makeTotal() }}.00</span></figcaption>
        
        <div class="acceptDeclineButtons">
          <button @click="makeOrder" class="btn btnConfirmar">PEDIR</button>
          <button type="reset" class="btn btnBorrar">BORRAR</button>
        </div>
      </figure>

    </fieldset>
  </section>

</template>

<script>
  export default {
    name: "FormPedidosComponent",
    data (){
      return {
        name: "",
        tel: "",
        email: "",
        sabor: "",
        adornos: [],
        cantidad:1,
        descripcion: "",
        total: 1
      }
    },
    methods: {
      makeOrder(){
        this.$store.state.pedido.name = this.name;
        this.$store.state.pedido.tel = this.tel;
        this.$store.state.pedido.email = this.email;
        this.$store.state.pedido.sabor = this.sabor;
        this.$store.state.pedido.adornos = this.adornos;
        this.$store.state.pedido.cantidad = this.cantidad;
        this.$store.state.pedido.descripcion = this.descripcion;
        this.$store.dispatch("fillOrders");
      },
      restar(){
        this.cantidad = (this.cantidad > 1) ? this.cantidad - 1 : 1 ;
      },
      sumar(){
        this.cantidad = (this.cantidad < 5) ? this.cantidad + 1 : 5 ;
      },
      makeTotal(){
        let totalAdornos = 0;
        this.adornos.forEach((adorno)=>totalAdornos+=adorno.precio);
        return (this.cantidad * this.sabor.precio) + totalAdornos;
      },
      getUrlImg(img){
      let folder = require.context("../assets/IMG/",true);
      return folder("./"+img);
      }

      
    }
  }
</script>

<style scoped>
@import '../CSS/pedidos.css';
</style>
