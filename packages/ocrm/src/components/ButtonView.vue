<template>
  <div class="button">{{ `button组件-${text}` }}</div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  text: {
    type: String,
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  width: 100px;
  height: 50px;
  background: palegreen;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
