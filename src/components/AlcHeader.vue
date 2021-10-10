<template>
  <el-header>
    <h1>{{ messages.title }}</h1>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AlcHeader",
  data() {
    return {
      messages: {
        title: "众生之门 模拟器",
      },
    };
  },
});
</script>

<style scoped>
.el-header {
  background: white;
  border-bottom: 1px solid #dcdfe6;
}
</style>
