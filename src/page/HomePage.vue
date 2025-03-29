<script setup lang="ts">
import NavbarHeader from "@components/NavbarHeader.vue";
import HeroSection from "@components/HeroSection.vue";
import FooterMain from "@components/FooterMain.vue";
import TitleBar from "@components/TitleBar.vue";
import LatestPosts from "@components/LatestPosts.vue";
</script>

<template>
  <NavbarHeader />
  <HeroSection
    :title="'Welcome to my blog'"
    :body="'This is a blog about Vue.js, Nuxt.js, and other web development technologies.'"
  />
  <TitleBar :title="'Latest Posts'" moreLink="/posts" />
  <LatestPosts />
  <FooterMain />
</template>
