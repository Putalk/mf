<template>
  <div class="home">
    <p>以下为ACRM内容</p>
    <div v-if="isLoadingComponent">Loading List.vue</div>
    <List></List>
    <p>以下为OCRM内容</p>
    <div class="btn">
      <Button text="container"></Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
const isLoadingComponent = ref(true);
const List = defineAsyncComponent(() =>
  import("acrmRemote/List.vue").finally(() => {
    isLoadingComponent.value = false;
  })
);
const Button = defineAsyncComponent(() =>
  import("ocrmRemote/Button.vue").finally(() => {
    isLoadingComponent.value = false;
  })
);
</script>
<style>
.btn {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
