<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  moreText: { type: String, default: "Show More" },
  moreLink: { type: String },
});
</script>
<template>
  <div class="flex justify-between items-center py-4">
    <h2 class="font-bold text-2xl">{{ props.title }}</h2>
    <span class="border-b-1 border-gray-300 grow mx-4"></span>
    <template v-if="props.moreLink">
      <router-link :to="props.moreLink" class="font-bold">
        {{ props.moreText }}
      </router-link></template
    >
  </div>
</template>
