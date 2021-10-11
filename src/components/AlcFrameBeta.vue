<template>
  <el-collapse-transition>
    <el-card shadow="hover">
      <alc-frame-beta-empty v-show="false"></alc-frame-beta-empty>
    </el-card>
  </el-collapse-transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AlcFrameBetaEmpty from "./AlcFrameBetaEmpty.vue";

export default defineComponent({
  name: "AlcFrameBeta",
  components: {
    AlcFrameBetaEmpty,
  },
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
