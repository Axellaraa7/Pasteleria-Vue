<template>
  <section class="information">
    <div class="infoColumn">
      <h3>POLITICAS</h3>
      <ul>
        <li>Privacidad</li>
        <li>Terminos y condiciones</li>
        <li><a href="https://picjumbo.com/">IMAGENES</a></li>
        <li><a href="https://www.pexels.com/es-es/">IMAGENES 2</a></li>
      </ul>
    </div>

    <div class="infoColumn">
      <h3>SIGUENOS</h3>
      <ul>
        <li>INSTAGRAM</li>
        <li>FACEBOOK</li>
        <li>TWITTER</li>
      </ul>
    </div>

    <div class="infoColumn">
      <h3>CONTACTANOS</h3>
      <address>
        Dirección:
        <a href="https://www.google.com.mx/maps/preview"
          ><strong>Neptuno #300</strong></a
        ><br />
        Telefono: 299-792-458 <br />
        Email:
        <a href="mailto:pasteleriaespecial@pastesp.com.mx"
          ><strong>pasteleriaespecial@pastesp.com.mx</strong></a
        ><br />
        Horarios: Todos los días de 14:00 a 2:00 hrs.
      </address>
    </div>

    <p>
      &copy; Pasteleria Espacial 2022
    </p>
  </section>
</template>

<script>
export default {
  name: "InformationComponent",
};
</script>

<style scoped>
.information {
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  /* border: 2px solid black; */
}

.information .infoColumn{
  flex:1 0 30%;
  padding:1rem 5rem;
}

h3,a,li,address,strong{
  color:hsla(var(--colorYellow),79%,1);
  font-family: "Trebuchet MS";
}

h3{
  text-align: center;
  margin-bottom:1.5rem;
}

.information p{
  flex: 1 0 100%;
  
  padding:0 5%;
  
  text-align: right;
  color:hsla(var(--colorYellow),79%,1);
  border-top:2px solid black;
}
</style>
