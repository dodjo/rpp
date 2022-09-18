<template>
  <div class='page'>
    <the-header/>
    {{ users }}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      users: []
    }
  },
  fetch() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      this.users = await this.$axios.$get('users')
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
