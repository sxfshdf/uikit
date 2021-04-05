<template>
  <div>
    <Topnav />
    <div class="banner">
      <h2>Ui</h2>
      <h3>关于 ui</h3>
      <p class="content">
        <a href="">Github</a>
        <router-link to="/doc">Start</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Topnav from 'src/components/Topnav.vue'

export default defineComponent({
  name: 'Home',
  components: {Topnav},
  setup: () => {

  }
})
</script>

<style lang="scss" scoped>

</style>
