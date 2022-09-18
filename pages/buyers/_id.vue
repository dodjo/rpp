<template>
  <div class=''>{{id}}</div>
</template>

<script>
export default {
  name: 'BuyersId',
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
