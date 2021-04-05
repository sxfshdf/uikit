<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, provide } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const menuVisible = ref<Ref<Boolean>>(false)
    provide('menuVisible', menuVisible)
  }
})
</script>

<style lang="scss">
  @import './assets/css/common.scss';
  @import './assets/css/base.scss';
  @import './assets/css/variables.scss';
</style>
