<template>
  <el-empty :description="messages.desc" >
    <template #image>
      <img src="../assets/bg.jpg" alt="ALC Logo" />
    </template>
  </el-empty>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AlcFrameBetaEmpty",
  data() {
    return {
      messages: {
        desc: "未初始化模型",
      },
    };
  },
});
</script>

<style scoped></style>
