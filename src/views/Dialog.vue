<template>
    <div>
    <dialogList></dialogList>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src

import dialogList from '@/components/dialogList.vue'
  export default {
    name: 'Dialog',
    components: {
        dialogList,
}
  }
  </script>
  