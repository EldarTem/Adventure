<!-- src/App.vue -->
<!-- src/App.vue -->
<template>
  <router-view />
  <Loader :loading="uiStore.isLoading" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUiStore } from "@/store/useUiStore";
import Loader from "@/components/Loader.vue";

export default defineComponent({
  name: "App",
  components: { Loader },
  setup() {
    const uiStore = useUiStore();
    return { uiStore };
  },
});
</script>

<style>
body,
html,
#app {
  font-family: "Roboto", sans-serif;
  height: 100%;
  margin: 0;
}

.el-container {
  min-height: 100vh;
}

.el-main {
  padding: 20px;
}
button {
  background-color: #576652 !important;
}
</style>
