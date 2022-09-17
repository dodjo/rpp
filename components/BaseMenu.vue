<template>
  <div class='menu'>
      <base-menu-item
        v-for='itemMenu in menuList' :key='itemMenu.name'
        :data-item='itemMenu' />
  </div>
</template>

<script>
import BaseMenuItem from '~/components/BaseMenuItem'

export default {
  name: 'BaseMenu',
  components: { BaseMenuItem },
  data() {
    return {
      menuList: [
        {
          icon: 'sidebar/icon-cup',
          name: 'Тарифы',
          path: '/',
          visible: true
        },
        {
          icon: 'sidebar/icon-cup',
          name: 'Оплата',
          path: '/123',
          visible: true
        },
        {
          icon: 'sidebar/icon-cup',
          name: 'ID',
          path: '/123',
          visible: true
        },
        {
          icon: 'sidebar/icon-cup',
          name: 'Пользователи',
          path: '/123',
          visible: true,
          children: [
            {
              icon: 'sidebar/icon-cup',
              name: 'Покупатели',
              path: '/123',
              visible: true
            },
            {
              icon: 'sidebar/icon-cup',
              name: 'Магазины',
              path: '/qwe',
              visible: true
            }
          ]
        },
        {
          icon: 'sidebar/icon-cup',
          name: 'Поддержка',
          path: '/123',
          visible: true,
          children: [
            {
              icon: 'sidebar/icon-cup',
              name: 'Новое',
              path: '/123',
              visible: true
            },
            {
              icon: 'sidebar/icon-cup',
              name: 'В работе',
              path: '/qwe',
              visible: true
            },
            {
              icon: 'sidebar/icon-cup',
              name: 'Решенное',
              path: '/qwe',
              visible: true
            }
          ]
        },
        {
          icon: 'sidebar/icon-cup',
          name: 'Статистика',
          path: '/123',
          visible: true,
          children: [
            {
              icon: 'sidebar/icon-cup',
              name: 'Покупатели',
              path: '/123',
              visible: true
            },
            {
              icon: 'sidebar/icon-cup',
              name: 'Магазины',
              path: '/qwe',
              visible: true
            }
          ]
        },
        {
          icon: 'sidebar/icon-cup',
          name: 'Уведомления',
          path: '/123',
          visible: true
        },
        {
          icon: 'sidebar/icon-cup',
          name: 'Настройки',
          path: '/213',
          visible: true
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
