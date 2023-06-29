<template>
  <div>
    <h1 class="brand">{{ brand }}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      brand: 'Cellinlab ©',
    }
  },
}
</script>

<style lang="less">
@fontColor: red;
@bgColor: #eee;
.brand {
  color: @fontColor;
  background-color: @bgColor;
}
</style>
