<template>
  <div>导航栏</div>
  <hr>
  <router-link to="/">Home</router-link> |
  <router-link to="/test">Test</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style></style>
