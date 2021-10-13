<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">{{ messages.input.mapSize.text }}</el-col>
      <el-col :span="6">{{ messages.input.player.text }}</el-col>
      <el-col :span="6">{{ messages.input.turnsToRun.text }}</el-col>
      <el-col :span="6">{{}}</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input-number
          :min="1"
          v-model="inputValue.mapSize"
          size="small"
          :step="100"
        ></el-input-number>
      </el-col>
      <el-col :span="6">
        <el-input-number
          :min="1"
          v-model="inputValue.player"
          size="small"
          :step="100"
        ></el-input-number>
      </el-col>
      <el-col :span="6">
        <el-input-number
          :min="1"
          v-model="inputValue.turnsToRun"
          size="small"
          :step="100"
        ></el-input-number>
      </el-col>
      <el-col :span="6">
        <el-input-number size="small" :step="100"></el-input-number>
      </el-col>
    </el-row>
    <el-row>
      <el-button type="primary" icon="el-icon-check" @click="initModel()">{{
        messages.button.apply.text
      }}</el-button>
      <el-button type="danger" icon="el-icon-refresh-left">{{
        messages.button.reset.text
      }}</el-button>
      <el-button type="success" icon="el-icon-video-play" @click="runModel()">
        {{ messages.button.run.text }}</el-button
      >
      <el-button
        type="info"
        icon="el-icon-video-pause"
        disabled
        title="尚未完成"
        >{{ messages.button.pause.text }}</el-button
      >
      <el-button type="info" disabled title="尚未完成">{{
        messages.button.step.text
      }}</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VideoPlay } from "@element-plus/icons";
import { SandboxInstance } from "../scripts/sandbox";
import { ElMessage } from "element-plus";
import { debounce } from "lodash";

export default defineComponent({
  name: "AlcFrameAlphaForm",
  components: {
    VideoPlay,
  },

  data() {
    return {
      messages: {
        input: {
          mapSize: {
            text: "地图大小",
          },
          player: {
            text: "玩家数量",
          },
          turnsToRun: {
            text: "运行回合",
          },
        },
        button: {
          apply: {
            text: "应用参数",
          },
          reset: {
            text: "重置模型",
          },
          run: {
            text: "运行模型",
          },
          pause: {
            text: "暂停运行",
          },
          step: {
            text: "步进运行",
          },
        },
      },
      inputValue: {
        mapSize: 500,
        player: 500,
        turnsToRun: 500,
      },
    };
  },
  methods: {
    initModel() {
      SandboxInstance.sandboxMapSize = this.inputValue.mapSize;
      SandboxInstance.sandboxCapicity = this.inputValue.player;
      SandboxInstance.initModel();
    },
    resetModel() {},
    runModel() {
      if (SandboxInstance.map.length === 0) {
        alert();
      } else {
        this.$store.commit("resultShow");

        SandboxInstance.run(this.inputValue.turnsToRun);
        this.$store.commit("updateData");
      }
    },
  },
});

const alert = debounce(function () {
  ElMessage.error("未初始化模型");
}, 500);
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  text-align: center;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
