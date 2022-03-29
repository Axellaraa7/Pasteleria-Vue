<template>
  <header>
    <nav>
      <router-link to="/" class="buttonNav">HOME</router-link>
      <router-link to="/pedido" class="buttonNav">HAZ TU PEDIDO</router-link>
      <router-link to="/sabores" class="buttonNav">NUESTROS SABORES</router-link>
      <router-link to="/login" class="buttonNav">REGISTRATE</router-link>
      <router-link to="/admin" class="buttonNav">ADMIN</router-link> 
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>

  </footer>
  <footer>
    <InformationComponent/>
  </footer>
</template>

<script>
import InformationComponent from "./components/InformationComponent.vue";
export default {
  name:"AppView",
  components: {
    InformationComponent
  }
}
</script>


<style>
header{
 /*  border:2px solid black; */
  display:flex;
  justify-content: flex-end;
  align-items: center;

  position:sticky;
  top:0;
  z-index:1;
  
  min-height: 12vh;
  width:100%;
  padding:0 5rem;

  background-image: url("assets/IMG/PASTELERIA.png");
  background-position: 10% center;
  background-repeat: no-repeat;
  background-color: var(--colorPink1);
  background-size:contain;

  /* border-bottom:2px solid black; */
}

nav{
  /* border:2px solid black; */
  width:60%;
  display:flex;
  justify-content: space-between;
}

.buttonNav{
  flex:0 1 auto;

  padding:.5rem 2rem;
  font-size:1.6rem;
  /* border:2px solid black; */

  background-color:var(--colorYellow1);
  border-radius:1rem;

  transition:all .25s ease-in-out 0s;
}

.buttonNav:hover{
  color:var(--colorYellow1);
  background-color: var(--colorLetterDark);
}

.router-link-exact-active{
  color:var(--colorYellow1);
  background-color: var(--colorLetterDark);
}

main{
  min-height:100vh;
 /*  border:2px solid black; */
}

footer{
  background-color:var(--colorLetterDark);
}


</style>
