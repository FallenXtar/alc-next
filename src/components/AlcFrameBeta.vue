<template>
  <el-collapse-transition>
    <el-card shadow="hover">
      <alc-frame-beta-empty v-show="!showResult"></alc-frame-beta-empty>
      <alc-frame-beta-result v-show="showResult"></alc-frame-beta-result>
    </el-card>
  </el-collapse-transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AlcFrameBetaEmpty from "./AlcFrameBetaEmpty.vue";
import AlcFrameBetaResult from "./AlcFrameBetaResult.vue";

export default defineComponent({
  name: "AlcFrameBeta",
  components: {
    AlcFrameBetaEmpty,
    AlcFrameBetaResult,
  },
  data() {
    return {
      messages: {
        desc: "未初始化模型",
      },
    };
  },
  computed:{
    showResult():boolean{
      return this.$store.state.showResult
    }
  }
});
</script>

<style scoped></style>
