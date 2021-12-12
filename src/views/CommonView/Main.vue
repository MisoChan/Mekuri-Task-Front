<template>
  <div id="main">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Main/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
