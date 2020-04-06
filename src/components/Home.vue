<template>
    <el-button type="info" @click="logout">退出</el-button>
</template>

<script>
export default {
  methods: {
    logout () {
      // 清除token
    //   window.sessionStorage.clear()
      // 跳转到登录页
    //   this.$router.push('/login')
    }
  }
}
</script>

<style long="less" scoped>
</style>
