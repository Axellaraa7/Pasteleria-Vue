<template>
  <SaboresComponent/>
  <AdornosComponent/>
</template>

<script>
import SaboresComponent from "../components/SaboresComponent.vue";
import AdornosComponent from "../components/AdornosComponent.vue";

export default {
  name: "SaboresView",
  components:{
    SaboresComponent,
    AdornosComponent
  }
}
</script>