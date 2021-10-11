<template>
  <el-main>
    <alc-frame-alpha></alc-frame-alpha>
    <el-divider></el-divider>
    <alc-frame-beta></alc-frame-beta>
  </el-main>
</template>

<script lang="ts">
import { ElMessageBox } from "element-plus";
import { defineComponent } from "vue";
import AlcFrameAlpha from "./AlcFrameAlpha.vue";
import AlcFrameBeta from "./AlcFrameBeta.vue";

export default defineComponent({
  name: "AlcFrame",
  components: {
    AlcFrameAlpha,
    AlcFrameBeta,
  },
  created(): void {
    if (!sessionStorage.getItem("alertConfirmed")) {
      ElMessageBox.alert(
        "请勿尝试使用异常或过大的参数初始化模型！可能导致你的浏览器冻结甚至设备死机！",
        "重要提示",
        {
          confirmButtonText: "知道了",
        }
      );
      sessionStorage.setItem("alertConfirmed", "true");
    }
  },
});
</script>

<style scoped>
.el-main {
  background: whitesmoke;
}
</style>
