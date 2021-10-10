<template>
  <el-collapse-transition>
    <el-card shadow="hover">
      <el-empty :description="messages.desc" v-show="showResult">
        <template #image>
          <img src="../assets/bg.jpg" alt="ALC Logo" />
        </template>
      </el-empty>
    </el-card>
  </el-collapse-transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AlcFrameBeta",
  data() {
    return {
      showResult: true,
      messages: {
        desc: "未初始化模型",
      },
    };
  },
});
</script>

<style scoped></style>
