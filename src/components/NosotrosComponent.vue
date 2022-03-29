<template>
  <section class="nosotros">
    <figure>
      <img src="../assets/IMG/LocalPasteleria2.jpg" alt="">
    </figure>
    <div class="info">
      <h2 class="titlesSection">Pasteleria Espacial</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus doloremque, labore natus similique esse quibusdam repellat sunt sapiente asperiores accusantium quam expedita alias officia omnis id? Rerum, provident corrupti? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vel placeat cumque recusandae facilis, nam iusto corrupti iure officiis. Ipsa quod ad laudantium, quia quaerat sint eaque similique vel possimus.</p>
      <button class="btn">HAZ TU PEDIDO AQUI</button>
    </div> 
  </section>
</template>

<script>
export default {
  name: "NosotrosComponent"
}
</script>

<style scoped>
  .nosotros{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    padding:7rem 2rem;
/*     border:2px solid black; */
  }

  figure{
    flex:1 0 500px;
  }
  img{
    width:100%;
    height:100%;

    border-radius:20px;
    box-shadow: 0px 5px 10px 0px #666;
  }

  .info{
    flex:1 0 50%;

    padding:2rem;
  }

  .info p{
    padding:3rem;
  }

  .btn{
    display:block;

    margin:0 auto;
    background-color: var(--colorYellow1);
    border:2px solid var(--colorYellow1);

    border-radius:20px;
  }
</style>
