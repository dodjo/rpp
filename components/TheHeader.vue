<template>
  <div class='header'>
    <h1 class='title'>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss' scoped>
  .header {
    position: relative;
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E7F7F8;
    margin-bottom: 20px;

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #55C6CD;
      left: 0;
      bottom: 0;
    }
  }
  .title {
    font-weight: 700;
    font-size: 18px;
    color: $color1;
  }
</style>
