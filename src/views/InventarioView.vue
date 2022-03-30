<template>
  <InventarioSaboresComponent/>
  <InventarioAdornosComponent/>
</template>

<script>
import InventarioSaboresComponent from "../components/InvSabComponent.vue";
import InventarioAdornosComponent from "../components/InvAdrnsComponent.vue";

export default {
  name:"InventarioView",
  components:{
    InventarioSaboresComponent,
    InventarioAdornosComponent
  }
}

</script>
