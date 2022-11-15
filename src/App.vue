<template>
  <v-app>
    <Navbar />
    <v-main class="height:100%">
      <router-view></router-view>
    </v-main>
    <FooterPage></FooterPage>
  </v-app>

</template>

<script>
import Navbar from '@/components/Navbar.vue'
import FooterPage from './components/FooterPage.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    FooterPage
},
  data: () => ({
    //
  }),
};
</script>
<style scoped>

</style>
