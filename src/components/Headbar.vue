<template>
  <header class='header'>
    <div class='logo'>vue-Admin</div>
    <ul class='nav'>
      <li>
        <a href="a">首页</a>
      </li>
    </ul>
    <div class='logout'>退出登录</div>
  </header>
</template>

<script>
  export default {
    name: 'headbar',
    methods: {
    }
  }
</script>

<style lang='scss' scoped>
  .header{
    color: #FFF;
    height: 48px;
    line-height: 48px;
    display: flex;
    flex-direction: row;
    background-color: #37474f;
    .logo{
      width: 260px;
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 50px;
      padding-left: 60px;
    }
    .nav{
      flex: 1;
      margin: 0;
      padding: 0;
      list-style: none;
      li{
        width: 120px;
        text-align: center;
        a{
          height: 50px;
          display: block;
          font-size: 16px;
          line-height: 50px;
        }
      }
      .left{
        float: left;
        a:hover{
          color: #EEE;
          background-color: #364248;
        }
        a.router-link-active{
          transition: all .2s;
          background-color: #263238;
          border-bottom: 4px solid #26a69a;
        }
      }
      .right{
        float: right;
        margin-right: 30px;
        a {
          position: relative;
          padding-left: 20px;
          font-size: 14px;
          &::before {
            content: '';
            position: absolute;
            top: 15px;
            left: 15px;
            width: 20px;
            height: 20px;
            background-size: cover;
          }
          &:hover {
            color: #EEE;
            background-color: #364248;
          }
          &.router-link-active {
            transition: all .2s;
            background-color: #263238;
            border-bottom: 4px solid #26a69a;
          }
        }
      }
    }
    .logout{
      cursor: pointer;
      font-size: 14px;
      line-height: 50px;
      padding-right: 20px;
    }
  }
</style>
