<template>
  <div class='main'>
    <div class='main__sidebar'>
      <side-bar/>
    </div>
    <div class='main__page'>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import SideBar from '~/components/SideBar'
export default {
  name: 'default',
  components: { SideBar }
}
</script>

<style lang='scss' scoped>
.main {
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;
}
</style>
