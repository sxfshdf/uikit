<template>
  <div>
   <Topnav />
    <div class="content-wrapper">
      <aside>菜单</aside>
      <main>内容</main>
    </div>
  </div>
</template>

<script>
  import {defineComponent} from 'vue'
  import Topnav from '../components/Topnav.vue'
  export default defineComponent({
    name: 'Doc',
    components: {Topnav}
  })
</script>
