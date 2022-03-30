<template>
  <section class="inventario">
    <table class="tableYellow">
      <caption class="titlesSection">Sabores</caption>
      <thead>
        <tr>
          <th>NOMBRE</th>
          <th>PRECIO</th>
          <th>VISTA</th>
          <th>CANTIDAD</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sabor of this.$store.getters.getSabores" :key="sabor.id">
          <td>{{sabor.name}}</td>
          <td>{{sabor.precio}}</td>
          <td>
            <figure>
              <img :src="getUrlImg('SABORES/'+sabor.url)" alt="">
            </figure>
          </td>
          <td>{{sabor.inventario}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name:"InventarioSaboresComponent",
  methods:{
    getUrlImg(img){
      let folder = require.context("../assets/IMG/",true);
      return folder("./"+img);
      }
  }
}
</script>

<style scoped>
  .inventario{
    display:flex;
    justify-content: center;

    padding:3rem;
  }

  img{
    width:15rem;
    height:15rem;
  }
</style>