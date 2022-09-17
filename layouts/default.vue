<template>
  <div class='main'>
    <div class='main__sidebar'>
      <side-bar/>
    </div>
    <div class='main__page'>
      <the-header/>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import SideBar from '~/components/SideBar'
import TheHeader from '~/components/TheHeader'
export default {
  name: 'default',
  components: { TheHeader, SideBar }
}
</script>

<style lang='scss' scoped>
.main {
  display: flex;
  width: 100%;
  height: 100vh;
  &__sidebar {
    flex: 0 0 250px;
    width: 250px;
  }
  &__page {
    flex: 1 1 100%;
    padding: 0 20px;
  }
}
</style>
