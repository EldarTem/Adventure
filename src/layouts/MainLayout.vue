<!-- src/layouts/MainLayout.vue -->
<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <router-view />

      <Footer />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    Header,
    Footer,
  },
});
</script>

<style>
.el-main {
  padding: 0 !important;
  top: 0 !important;
  position: absolute !important;
}
</style>
