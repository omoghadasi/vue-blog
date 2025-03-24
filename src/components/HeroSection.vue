<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  btnText: {
    type: String,
  },
  btnLink: {
    type: String,
  },
});
</script>
<template>
  <div class="hero bg-base-200 py-24 my-8" v-show="props.title || props.body">
    <div class="hero-content text-center w-full">
      <div class="max-w-lg">
        <h1 class="text-5xl font-bold">{{ props.title }}</h1>
        <p class="py-6">
          {{ props.body }}
        </p>
        <template v-show="props.btnText && props.btnLink">
          <RouterLink :to="props.btnLink" class="btn btn-primary">{{
            props.btnText
          }}</RouterLink>
        </template>
      </div>
    </div>
  </div>
</template>
``
