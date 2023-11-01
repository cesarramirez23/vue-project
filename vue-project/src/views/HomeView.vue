<script setup>
  import { useStorage } from "@/composables/userStorage.js";
  let food = useStorage('food', 'tacos');
</script>

<template>
  <main>
    <p>
      What is your favorite food? <input type="text" v-model="food">
    </p>
  </main>
</template>