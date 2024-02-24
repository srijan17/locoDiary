<template>
  <v-app>
    <DefaultBar />
    <DefaultDrawer />
    <DefaultView class="mt-12"/>
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './default/AppBar.vue'
  import DefaultView from './default/View.vue'
  import DefaultDrawer from './default/NavigationDrawer.vue'
</script>
