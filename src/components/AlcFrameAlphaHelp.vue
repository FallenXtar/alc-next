<template>
  <el-dialog
    :title="messages.title"
    v-model="showHelp"
    width="30%"
    destroy-on-close
  >
    <ol>
      <li v-for="item in messages.content">{{ item }}</li>
    </ol>
    <a
      target="_blank"
      href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=-pe_hoqfjITQnZA"
    >
      <el-button icon="el-icon-message" type="warning">
        {{ messages.buttons.contact }}
      </el-button>
    </a>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AlcFrameAlphaHelp",
  props: ["show"],
  data() {
    return {
      showHelp: this.show,
      messages: {
        title: "使用说明",
        content: [
          "输入参数",
          "点击[更新参数]",
          "点击[初始化模型]",
          "运行模型",
          "若要更改参数，回到步骤 1",
        ],
        buttons: {
          contact: "还不明白",
        },
      },
    };
  },
});
</script>

<style scoped></style>
