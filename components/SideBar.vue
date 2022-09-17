<template>
  <aside class='sidebar'>
    <div class='sidebar__header'>
      <svg-icon class='logo' name='logo' />
    </div>
    <div class='sidebar__body'>
      <base-menu/>
    </div>
  </aside>
</template>

<script>
import BaseMenu from '~/components/BaseMenu'
export default {
  name: 'SideBar',
  components: { BaseMenu }
}
</script>

<style lang='scss' scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 0 20px 0 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  background-color: $color5;
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 100px;
    height: 100px;
  }
  &__body {
    overflow-y: auto;
  }
  .logo {
    width: 150px;
    height: 35px;
  }

}
</style>
