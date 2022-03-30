<template>
  <section class="login" v-if="!state">
    <div class="loginContainer">
      <h2>Ingresa tus datos</h2>
      <div class="data">
        <input type="text" max="10" placeholder="Usuario" v-model="this.usuario">
        <input type="password" name="password" id="password" placeholder="Password" v-model="this.password">
        <button class="btn btnBlueDark" @click="verificarAdmin">INGRESAR</button>
      </div>
      <div class="rememberData">
        <div class="rememberMe">
          <input type="checkbox" name="remember" id="remember">
          <label for="remember">RECUERDAME</label>
        </div>
        <button class="btn forget">¿Olvide mi contraseña?</button>
      </div>
    </div>
  </section>
  <section></section>
</template>

<script>
export default {
  name:"LoginAdminComponent",
  data(){
    return{
      usuario: "",
      password: "",
      state:false
    }
  },
  methods:{

    /*Funcion para ir a otra pagina usando $router*/

    verificarAdmin(){
      let admin = this.$store.getters.getAdmin;
      if(admin.user == this.usuario && admin.password == this.password) this.$router.push("/admin_orders");
      else{
        this.state = true;
      }
    }
  }
}
</script>

<style scoped>
  .login{
    display:flex;
    justify-content: center;
    align-items: flex-start;
    padding-top:10vh;

    min-height:90vh;
    background-image: url("../assets/IMG/LocalPasteleria2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .loginContainer{
    padding:4rem 1rem;
    background-color: hsla(var(--colorLetter),95%,.5);
    border-radius:3rem;
    /* border:2px solid black; */
  }

  h2{
    margin-bottom:2rem;

    text-align: center;
    font-size: 2.5rem;
    font-family: "Segoe UI";
    /* border:2px solid black; */
  }

  .data{
    margin-bottom: 2rem;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    gap:1rem;

    /* border:2px solid black; */
  }

  input[type=password],input[type=text], .btnBlueDark{
    flex-basis:40%;
    margin:0 30%;
    padding:.5rem 1.5rem;
    border-radius:25px;
    border:none;
  }

  .rememberData{
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap:wrap;

    /* border:2px solid black; */
  }

  .rememberMe{
    display:flex;
    align-items: center;
    gap:1rem;
    /* border:2px solid black; */
  }
  .forget{
    background-color: transparent;
    border:none;
    /* border:2px solid black; */
  }

  .forget:hover{
    transform: scale(.9);
  }

  

  
</style>
