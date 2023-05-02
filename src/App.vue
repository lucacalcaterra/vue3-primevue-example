<template>
  <div class="card">
    <TabMenu :model="items" />
    <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    to: '/'
  },
  {
    label: 'About',
    icon: 'pi pi-fw pi-cog',
    to: '/about'
  }
]);

</script>
