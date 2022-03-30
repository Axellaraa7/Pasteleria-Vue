<template>
  <section class="pedidos">
    <table class="tableYellow">
      <caption class="titlesSection">PEDIDOS</caption>
      <thead>
        <tr>
          <th>NOMBRE</th>
          <th>TELEFONO</th>
          <th>EMAIL</th>
          <th>SABOR</th>
          <th>ADORNOS</th>
          <th>CANTIDAD</th>
          <th>DESCRIPCION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pedido of this.$store.getters.getPedidos" :key="pedido.id">
          <td>{{pedido.name}}</td>
          <td>{{pedido.tel}}</td>
          <td>{{pedido.email}}</td>
          <td>{{pedido.sabor.name}}</td>
          <td>
            <ul>
              <li v-for="adorno of pedido.adornos" :key="adorno.id">
                {{adorno.name}}
              </li>
            </ul>
          </td>
          <td>{{pedido.cantidad}}</td>
          <td>{{pedido.descripcion}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default{
  name: "PedidosComponent"
}
</script>

<style scoped>
  .pedidos{
    display:flex;
    justify-content: center;

    padding:3rem;

    /* border:2px solid green; */
  }
</style>
