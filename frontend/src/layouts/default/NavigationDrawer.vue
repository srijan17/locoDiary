<script setup lang="ts">
const drawer = ref(true)
const navigationItems = [
  { id:1, title: 'Home', icon: 'mdi-home', to: '/' },
  { id:2, title: 'Bookings', icon: 'mdi-calendar', to: '/bookings' },
  { id:3, title: 'Vehicles', icon: 'mdi-car', to: '/vehicles' },
  { id:4, title: 'Customers', icon: 'mdi-account-group', to: '/customers' },
  { id:5, title: 'Settings', icon: 'mdi-cog', to: '/settings' },
]
</script>
<template>
<v-navigation-drawer
     v-model="drawer"
      class="pt-4"
      color="grey-lighten-3"
      rail
    >
      <v-avatar
        v-for="item in navigationItems"
        :key="item.id"
        class="d-block text-center mx-auto mb-9"
        :icon="item.icon"
      ></v-avatar>
    </v-navigation-drawer>
</template>
