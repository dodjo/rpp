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
          path: '/990',
          visible: true
        },
        {
          icon: 'sidebar/icon-pay',
          name: 'Оплата',
          path: '/123',
          visible: true
        },
        {
          icon: 'sidebar/icon-id',
          name: 'ID',
          path: '/123',
          visible: true
        },
        {
          icon: 'sidebar/icon-users',
          name: 'Пользователи',
          path: '/123',
          visible: true,
          children: [
            {
              icon: 'sidebar/icon-user',
              name: 'Покупатели',
              path: '/buyers',
              visible: true
            },
            {
              icon: 'sidebar/icon-store',
              name: 'Магазины',
              path: '/stores',
              visible: true
            }
          ]
        },
        {
          icon: 'sidebar/icon-support',
          name: 'Поддержка',
          path: '/123',
          visible: true,
          children: [
            {
              icon: 'sidebar/icon-new',
              name: 'Новое',
              path: '/123',
              visible: true
            },
            {
              icon: 'sidebar/icon-work',
              name: 'В работе',
              path: '/qwe',
              visible: true
            },
            {
              icon: 'sidebar/icon-ready',
              name: 'Решенное',
              path: '/qwe',
              visible: true
            }
          ]
        },
        {
          icon: 'sidebar/icon-complaint',
          name: 'Жалобы',
          path: '/123',
          visible: true,
          children: [
            {
              icon: 'sidebar/icon-new',
              name: 'Новое',
              path: '/123',
              visible: true
            },
            {
              icon: 'sidebar/icon-work',
              name: 'В работе',
              path: '/qwe',
              visible: true
            },
            {
              icon: 'sidebar/icon-ready',
              name: 'Решенное',
              path: '/qwe',
              visible: true
            }
          ]
        },
        {
          icon: 'sidebar/icon-stat',
          name: 'Статистика',
          path: '/123',
          visible: true,
          children: [
            {
              icon: 'sidebar/icon-user',
              name: 'Покупатели',
              path: '/123',
              visible: true
            },
            {
              icon: 'sidebar/icon-store',
              name: 'Магазины',
              path: '/qwe',
              visible: true
            }
          ]
        },
        {
          icon: 'sidebar/icon-notify',
          name: 'Уведомления',
          path: '/123',
          visible: true
        },
        {
          icon: 'sidebar/icon-settings',
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
