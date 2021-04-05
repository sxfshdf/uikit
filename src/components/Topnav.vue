<template>
  <div class="top-nav flex-space-between">
    <div class="logo-wrapper" @click="toggleMenu">Logo</div>
    <ul class="nav-wrapper flex">
      <li class="nav-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/doc">Doc</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {defineComponent, inject, Ref} from 'vue'
  export default defineComponent({
    name: 'Topnav',
    setup() {
      const menuVisible = inject<Ref<Boolean>>('menuVisible')
      const toggleMenu = () => {
        menuVisible.value = !menuVisible.value
      }
      return {
        toggleMenu
      }
    }
  })
</script>

<style lang="scss" scoped>
  .top-nav {
    border-bottom: 1px solid $light-border;
    height: $top-nav-height;
    .logo-wrapper {
      padding: 10px;
    }
    .nav-wrapper {
      .nav-item {
        padding: 10px 16px;
        cursor: pointer;
      }
    }
  }
</style>
