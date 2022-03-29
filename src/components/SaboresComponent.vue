<template>
  <section class="sabores">
    <h2 class="titlesSection">NUESTROS SABORES</h2> 
    <div class="card">
      <figure>
        <img src="../assets/IMG/SABORES/Chocolate.jpg" alt="">
        <figcaption>Chocolate</figcaption>
      </figure>
      <div class="buy">
        <span>500$</span>
        <button class="btn btnBuy"> Comprar </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SaboresComponent"
}
</script>

<style scoped>
  .sabores{
    border:2px solid black;
  }
</style>