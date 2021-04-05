<template>
  <div>
   <Topnav />
    <div class="content-wrapper">
      <aside :class="menuVisible ? 'open' : 'close'">
        <ul class="slider-navs">
          <li>
            <div class="title">组件列表</div>
          </li>
          <ul>
            <li>
              <router-link to="/">Button</router-link>
            </li>
            <li>
              <router-link to="/">Layout</router-link>
            </li>
          </ul>
        </ul>
      </aside>
      <div :class="{'slider-mask': true, close: !menuVisible}" @click="toggleMenu" />
      <main>
        Content
      </main>
    </div>
  </div>
</template>

<script>
  import {defineComponent, inject} from 'vue'
  import Topnav from 'src/components/Topnav.vue'
  export default defineComponent({
    name: 'Doc',
    components: {Topnav},
    setup() {
      const menuVisible = inject('menuVisible')
      const toggleMenu = () => {
        menuVisible.value = !menuVisible.value
      }
      return {
        menuVisible,
        toggleMenu
      }
    }
  })
</script>

<style lang="scss" scoped>
  .content-wrapper {
    aside {
      font-size: $browser-default-font-size;
      width: PxToRem(160px);
      position: fixed;
      transform: translateX(0);
      border-right: 1px solid $light-border;
      height: 100%;
      transition: all 0.3s;
      background: #f5f5f5;
      z-index: 10;
      &.close {
        transform: translateX(-100%);
      }
      ul {
        &.slider-navs {
          padding: PxToRem(10px) 0;
        }
        li {
          .title {
            padding: PxToRem(8px) PxToRem(12px) PxToRem(8px);
            font-weight: bold;
          }
          a {
            display: block;
            line-height: 1.5;
            padding: PxToRem(5px) PxToRem(20px);
            font-size: PxToRem(14px);
          }
        }
      }
    }
    .slider-mask {
      background: transparent;
      position: fixed;
      top: 44px;
      bottom: 0;
      width: 100%;
      height: calc(100% - 44px);
      &.close {
        transform: translateX(-100%);
      }
    }
    main {

    }
  }
</style>
