<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const a: any = {
      k: 1,
    };
    const b = 2;
    a.k ??= b;
    const str = `
            hellow
        `;
    console.error(str);
    console.error(a.k, a.name ?? 1, a?.value || 3);
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100px;
  height: 100px;
}
</style>
