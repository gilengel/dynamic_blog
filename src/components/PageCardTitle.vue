<script setup lang="ts">
defineProps<{
  title: string;
  subtitles: string[];
}>();
</script>

<template>
  <div class="main-text">
    <h1>{{ title }}</h1>
    <h2 v-for="subtitle in subtitles" :key="subtitle">
      {{ subtitle }}
    </h2>
  </div>
</template>

<style lang="scss">
.main-text {
  transform: rotate(45deg);
  display: block;

  h1 {
    font-size: 6em;
  }

  h2 {
    font-size: 4em;
    margin: 0em;
  }
}
</style>
