<template>
    <div class="login-page">
      <h2>登录页面</h2>
      <el-button @click="handleLogin">登录</el-button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    methods: {
      handleLogin() {
        this.$store.commit('login');
        this.$router.push('/'); // 登录后跳转到首页
      }
    }
  }
  </script>
  
  <style scoped>
  .login-page {
    text-align: center;
    margin-top: 50px;
  }
  </style>