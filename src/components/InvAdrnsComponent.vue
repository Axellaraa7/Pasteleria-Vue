<template>
  <section class="inventario">
    <table class="tableYellow">
      <caption class="titlesSection">Adornos</caption>
      <thead>
        <tr>
          <th>NOMBRE</th>
          <th>PRECIO</th>
          <th>VISTA</th>
          <th>CANTIDAD</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="adorno of this.$store.getters.getAdornos" :key="adorno.id">
          <td>{{adorno.name}}</td>
          <td>{{adorno.precio}}</td>
          <td>
            <figure>
              <img :src="getUrlImg('ADORNOS/'+adorno.url)" alt="">
            </figure>
          </td>
          <td>{{adorno.inventario}}</td>
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