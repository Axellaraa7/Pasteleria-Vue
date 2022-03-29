<template>
  <section class="favorite">
    <div class="sloganContainer">
      <h1>PASTELERIA ESPACIAL</h1>
      <p>CONTIGO HASTA LAS ESTRELLAS</p>
      <!-- <a href="#Destacados" class="buttonNav">VER DESTACADOS</a> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.favorite{
  min-height:80vh;
  padding:8rem 5rem;

  background-image: url("../assets/IMG/LocalPasteleriaBN.png");
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
}

.sloganContainer{
  padding-left:40%;
  text-align: center;
}

.sloganContainer>*{
  letter-spacing: .5rem;
  color:var(--colorTitles);
  text-shadow: 2px 2px 5px white;
}


.sloganContainer h1{
  font-size:7rem; 
  margin-bottom:5rem;
}

.sloganContainer p{
  font-size:4rem;
}
</style>
