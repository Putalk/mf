<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="btn">
      <Button text="ocrm" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "../components/ButtonView.vue"; // @ is an alias to /src

@Options({
  components: {
    Button,
  },
})
export default class HomeView extends Vue {}
</script>
<style scoped>
.btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
