<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const posts = ref<Post[]>([]);

onMounted(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(({ data }) => (posts.value = data.slice(-6)));
});
</script>

<template>
  <div class="mb-6">
    <swiper
      :slides-per-view="3"
      :space-between="10"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide v-for="post in posts" :key="post.id">
        <div class="card bg-base-200 shadow-sm">
          <div class="card-body">
            <h2 class="card-title min-h-20 font-bold text-2xl items-start">
              {{ post.title }}
            </h2>
            <p class="min-h-20">
              {{ post.body }}
            </p>
            <div class="card-actions justify-end">
              <router-link :to="`/post/${post.id}`" class="btn btn-primary"
                >Show More</router-link
              >
            </div>
          </div>
        </div></swiper-slide
      >
    </swiper>
  </div>
</template>
