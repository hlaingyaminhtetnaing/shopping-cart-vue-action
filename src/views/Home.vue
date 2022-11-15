<template>
  <div>
    <HomeList></HomeList>
      <CardList></CardList>
  </div>
</template>
  
<script>
// @ is an alias to /src

import HomeList from '@/components/HomeList.vue'
import CardList from '@/components/CardList.vue';
export default {
  name: 'Home',
  data() {
    return {
    
    }
  }
  ,
  components: {
    HomeList,
    CardList,
  }
}
</script>
  