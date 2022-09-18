<template>
  <div class='main' v-loading="$store.state.isRequestLoading">
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
