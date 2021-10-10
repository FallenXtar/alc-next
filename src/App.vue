<template>
  <el-container direction="vertical">
    <alc-header></alc-header>
    <el-container>
      <el-container direction="vertical">
        <alc-frame></alc-frame>
        <alc-footer></alc-footer>
      </el-container>
      <alc-aside></alc-aside>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AlcHeader from "./components/AlcHeader.vue";
import AlcAside from "./components/AlcAside.vue";
import AlcFooter from "./components/AlcFooter.vue";
import AlcFrame from "./components/AlcFrame.vue";

export default defineComponent({
  name: "App",
  components: {
    AlcHeader,
    AlcAside,
    AlcFooter,
    AlcFrame,
  },
  data() {
    return {};
  },
});
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 995px;
  margin: auto;
}
</style>
