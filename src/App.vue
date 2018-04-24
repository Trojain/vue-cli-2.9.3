<template>
  <div id="app">

    <AppHeader></AppHeader>
    <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to='/HelloWorld'>hellow</router-link>   
        <router-link to='/xia'>xia</router-link>     
    </p>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view/>

    <!-- 子组件Home -->
    <Home></Home>

    <AppFooter></AppFooter>
    
  </div>
</template>


<script>

    import Home from './components/home'
    import AppHeader from './components/head'
    import AppFooter from './components/foot'

    export default {  
        components: {
            Home,AppHeader,AppFooter
        },  
        methods: {},  
    }  

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
