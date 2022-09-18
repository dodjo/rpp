<template>
  <div v-if='dataItem.visible'>
    <div
      v-if='dataItem.children'
      :class="['base-menu-item', {'base-menu-item--open':toggleVisible}]"
      @click='toggleVisible = !toggleVisible'>
      <svg-icon :name='dataItem.icon' />
      {{ dataItem.name }}
      <svg-icon class='icon-arrow' name='sidebar/icon-arrow-down'/>
    </div>

    <nuxt-link v-else  :to='dataItem.path' class='base-menu-item' >
      <svg-icon :name='dataItem.icon' />
      {{ dataItem.name }}
    </nuxt-link>

    <div :class="['base-submenu', {'base-submenu--open':toggleVisible}]">
      <nuxt-link
        v-for='subMenu in dataItem.children' :key='subMenu.name'
        :to='subMenu.path'
        class='base-submenu-item'>
        <svg-icon :name='subMenu.icon' />
        {{ subMenu.name }}
      </nuxt-link>
    </div>


  </div>
</template>

<script>
export default {
  name: 'BaseMenuItem',
  props: {
    dataItem: {
      type: Object,
      default: ()=>{}
    }
  },
  data() {
    return {
      toggleVisible: true,
    }
  }
}
</script>

<style lang='scss' scoped>
.base-menu-item {
  display: flex;
  align-items: center;
  line-height: 15px;
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
  .icon-arrow {
    margin-left: auto;
    transform: rotate(90deg);
    transition: $transition;
  }
  &--open .icon-arrow {
    transform: rotate(0deg);
  }
}
.base-submenu {
  transition: all .5s ease;
  overflow: hidden;
  max-height: 0px;
  &--open {
    max-height: 400px;
  }
}
.base-menu-item.active {
  color: $color5;
  background-color: $color2;
}
.base-submenu-item {
  display: flex;
  align-items: center;
  line-height: 15px;
  color: $color2;
  text-decoration: none;
  gap: 5px;
  padding: 10px 23px 10px 30px;
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
.base-submenu-item.active {
  color: $color5;
  background-color: $color3;
}
</style>
