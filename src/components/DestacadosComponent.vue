<template>

<!--EJEMPLO DE V-FOR CON UN ARREGLO RECIBIDO POR COMPONENTE-->

  <section class="destacados">
    <h2 class="titlesSection">DESTACADOS DE LA SEMANA</h2>
    <div v-for="(sabor,index) in sabores" :key="sabor.id" class="card">
      <figure>
        <img :src="getUrlImg(sabor)" :alt="sabor">
        <figcaption>{{ sabor }}</figcaption>
      </figure>
      <div class="buy">
        <span>${{ precios[index] }}.00</span>
        <button class="btn btnBuy"> Comprar </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DestacadosComponent",
  props:{
    sabores: Array,
    precios: Array
  },
  methods:{
    getUrlImg(img){
      let folder = require.context("../assets/IMG/SABORES",false,/\.jpg$/);
      console.log(folder('./'+img+".jpg"));
      return folder("./"+img+".jpg");
    }
  }
}
</script>

<style scoped>
  .destacados{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    padding:2rem;

    background-color: hsla(var(--colorPink),68%,.45);
/* 
    border:2px solid black; */
  }

  .card{
    flex:0 1 450px;

    margin:2rem;
    padding:3rem 0;

    text-align: center;

    background: linear-gradient(
      .60deg,
      hsla(var(--colorLetter),23%,.8),
      hsla(var(--colorLetter),39%,.8)
    );

    border:2px solid #666;
    border-radius:3rem;
    box-shadow:0px 2px 10px 0px #666;
  }

  img{
    width:70%;
    height:20rem;

    animation-name:shake;
    animation-duration:1.5s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-delay:0s;
    animation-iteration-count: infinite;
    animation-direction:normal;
    animation-fill-mode:none;
    animation-play-state: running;
  }

  @keyframes shake {
    0%,100%{
      transform:skew(5deg);
    }

    50%{
      transform:skew(-5deg);
    }
  }

  figcaption{
    color:white;
    font-size:3rem;
    letter-spacing: .2rem;
  }

  .buy{
    display:flex;
    justify-content: space-around;
    align-items: center;

    padding-top:1rem;
  }

  .buy span{
    color:white;
  } 
</style>
