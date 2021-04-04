<template>
  <div>
    <Topnav />
    <div class="banner">
      <h2>Ui</h2>
      <h3>关于 ui</h3>
      <p class="content">
        <a href="">Github</a>
        <a href="">Start</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Topnav from '../components/Topnav.vue'

export default defineComponent({
  name: 'Home',
  components: {Topnav},
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style lang="scss" scoped>

</style>
