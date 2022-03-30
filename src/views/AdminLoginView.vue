<template>
  <LoginAdminComponent/>
</template>

<script>
import LoginAdminComponent from "../components/LoginAdminComponent.vue";
export default {
  name: "AdminLoginView",
  components:{
    LoginAdminComponent
  },
  created(){
    this.changeUser();
  },
  methods:{
    changeUser(){
      this.$store.dispatch("changeUser",true);
    }
  }
}
</script>