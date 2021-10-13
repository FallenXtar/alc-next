<template>
  <el-descriptions
    class="margin-center"
    title="something"
    :column="4"
    :border="true"
  >
    <el-descriptions-item align="center">
      <template #label>总经验值</template>
      {{ $store.state.SandboxState.totalExp }}
    </el-descriptions-item>
    <el-descriptions-item align="center">
      <template #label>最高经验值</template>
      {{ $store.state.SandboxState.highestExp }}
    </el-descriptions-item>
    <el-descriptions-item align="center">
      <template #label>已运行回合</template>
      {{ $store.state.SandboxState.internalTurns }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AlcFrameBetaResult",
});
</script>
