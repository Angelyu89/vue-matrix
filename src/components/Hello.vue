<template>
  <div class="main">
    <Headbar></Headbar>
    <div class="content">
      <sidebar></sidebar>
      <div class="right-con">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Headbar from './Headbar'
import Sidebar from './Sidebar'

export default {
  name: 'hello',
  components: {
    Headbar,
    Sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    height: 100%;
  }
  .content{
    height: 100%;
    margin-top: -48px;
    padding-top: 48px;
    display: flex;
  }
  .right-con{
    height: 100%;
    flex: 1;
  }
</style>
