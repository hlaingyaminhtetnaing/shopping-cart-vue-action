<template>
    <div>
        <ItemDetailList></ItemDetailList>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src

import ItemDetailList from '@/components/ItemDetailList.vue'
  export default {
    name: 'Home',
    components: {
        ItemDetailList
}
  }
  </script>
  