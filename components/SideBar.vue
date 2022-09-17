<template>
  <aside class='sidebar'>
    <div class='sidebar__header'>
      <svg-icon class='logo' name='logo'/>
    </div>
    <div class='sidebar__body'>
      <div class='menu'>
        <nuxt-link to="/" class='menu__item'>
          <svg-icon name='sidebar/icon-cup'/>
          Тарифы
        </nuxt-link>
        <nuxt-link to="/help" class='menu__item'>
          <svg-icon name='sidebar/icon-cup'/>
          Тарифы
        </nuxt-link>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style lang='scss' scoped>
.sidebar {
  height: 100%;
  border-radius: 0 20px 0 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  background-color: $color5;
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
  }

  .logo {
    width: 98px;
    height: 25px;
  }

  .menu {
    &__item {
      display: flex;
      align-items: center;
      line-height: 14px;
      color: $color2;
      text-decoration: none;
      gap: 5px;
      padding: 10px 23px 10px 15px;
      border-bottom: 1px solid $sidebar-border-color;
      transition: $transition;
      cursor: pointer;
      &:hover {
        background-color: $sidebar-menu-hover;
      }
      .icon {
        width: 15px;
        height: 15px;
      }
    }

    &__item.active {
      color: $color5;
      background-color: $color2;
    }
  }
}
</style>
