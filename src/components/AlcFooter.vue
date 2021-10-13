<template>
  <el-footer>
    <div>
      <el-alert
        :title="text.tip"
        type="success"
        :closable="false"
        center
      ></el-alert>
    </div>
    <el-divider></el-divider>
    <el-row>
      <div>
        <span>
          ALC-NEXT 由
          <el-popover trigger="hover" placement="bottom" width="180px">
            <template #reference>
              <el-link
                type="primary"
                target="_blank"
                href="https://space.bilibili.com/39091086/"
                >@XTARZ</el-link
              >
            </template>
            <el-row>
              <a
                target="_blank"
                href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=-pe_hoqfjITQnZA"
              >
                <el-button icon="el-icon-message">联系作者</el-button>
              </a>
            </el-row>
          </el-popover>
          使用&nbsp;
          <el-link
            type="primary"
            target="_blank"
            href="https://v3.cn.vuejs.org/"
            >Vue3</el-link
          >&nbsp;+&nbsp;
          <el-link
            type="primary"
            target="_blank"
            href="https://element-plus.gitee.io/"
            >Element Plus</el-link
          >&nbsp;构建
        </span>

        <el-divider direction="vertical"></el-divider>
        <span>
          灵感来自于
          <el-link
            type="primary"
            target="_blank"
            href="https://space.bilibili.com/9174385/"
            >@看到什么你</el-link
          >
        </span>
      </div>
    </el-row>
    <el-row justify="center">
      <el-col>
        <el-link
          type="default"
          target="_blank"
          href="https://support.qq.com/product/358477"
          >意见、建议、反馈</el-link
        >
        <el-divider direction="vertical"></el-divider>
        <el-link
          type="primary"
          target="_blank"
          href="https://github.com/FallenXtar/alc-next"
          >Github</el-link
        >
        <el-divider direction="vertical"></el-divider>
        <el-link
          type="primary"
          target="_blank"
          href="https://gitee.com/xtarz/alc-next"
          >Gitee</el-link
        >
        <el-divider direction="vertical"></el-divider>
        <el-link
          type="primary"
          target="_blank"
          href="https://xtarz.coding.net/p/alc-next/d/alc-next/git"
          >Coding</el-link
        >
      </el-col>
    </el-row>
    <el-divider>{{ text.versionInfo }}{{ version }}</el-divider>
  </el-footer>
</template>

<script lang="ts">
import { ElPopover } from "element-plus"; // 此处的导入和引用是为了解决 ElPopover 下面 template 元素插槽无法自动识别的问题，问题原因未知，但是手动导入之后确实就不报错了。

import { defineComponent } from "vue";
import pkg from "../../package.json";

export default defineComponent({
  name: "AlcFooter",
  components: {
    ElPopover,
  },
  data() {
    return {
      version: pkg.version,
      text: {
        tip: "为保证功能正常，请使用现代化的浏览器，并以1024*768以上分辨率访问本网站",
        versionInfo: "版本：",
      },
    };
  },
});
</script>

<style scoped>
.el-row {
  justify-content: space-around;
}
.el-footer {
  margin-top: 20px;
  color: #606266;
}
.el-link {
  font-size: 16px;
  vertical-align: 0;
}
.el-divider__text {
  padding: 0 0;
}
</style>
