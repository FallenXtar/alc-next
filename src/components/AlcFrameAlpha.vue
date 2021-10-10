<template>
  <el-card shadow="hover">
    <template #header>
      <div class="card-header">
        <span>{{ messages.title }}</span>
        <el-button
          class="button"
          type="text"
          icon="el-icon-question"
          @click="helpVisible = true"
        >
          {{ messages.info }}
        </el-button>
      </div>
    </template>
    <alc-frame-alpha-form></alc-frame-alpha-form>
    <alc-frame-alpha-help v-model="helpVisible"></alc-frame-alpha-help>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AlcFrameAlphaHelp from "./AlcFrameAlphaHelp.vue";
import AlcFrameAlphaForm from "./AlcFrameAlphaForm.vue";

export default defineComponent({
  name: "AlcFrameAlpha",
  components: {
    AlcFrameAlphaHelp,
    AlcFrameAlphaForm,
  },
  data() {
    return {
      helpVisible: false,
      messages: {
        title: "模型参数设置",
        info: "使用说明",
      },
    };
  },
  computed: {
    test() {},
  },
});
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
