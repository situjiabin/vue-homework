<template>
  <div class="home">
    <h1>主页</h1>
    <p v-if="!isLoggedIn">
      尚未登录，请前往登录 <router-link to="/login">Login</router-link>
    </p>
    <p v-else>
      已经登录！
    </p>

    <!-- 按钮根据登录状态显示 -->
    <div v-if="!isLoggedIn">
      <!-- <button @click="goToLogin">登录</button> -->
      <el-button type="primary" @click="goToLogin">登录</el-button>
    </div>
    <div v-else>
      <!-- <button @click="logout">退出登录</button> -->
      <el-button @click="logout">退出登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    isLoggedIn() {
      return this.$store.state.isLogin
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/login')
    },
    logout() {
      this.$store.commit('logout')
    }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
