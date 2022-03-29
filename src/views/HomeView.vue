<template>
  <HomeComponent/>
  <DestacadosComponent :sabores="['Chocolate','Fresa','Queso']" :precios="[200,300,500]" />
  <NosotrosComponent/>
</template>

<script>
import HomeComponent from "../components/HomeComponent.vue";
import DestacadosComponent from "../components/DestacadosComponent.vue";
import NosotrosComponent from "../components/NosotrosComponent.vue";

export default {
  name: 'HomeView',
  components: {
    HomeComponent,
    DestacadosComponent,
    NosotrosComponent
  }
}
</script>
