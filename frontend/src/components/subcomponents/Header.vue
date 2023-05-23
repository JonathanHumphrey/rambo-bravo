<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    message: {
      type: String,
    },
  },
  setup() {},
});
</script>

<template>
  <div class="container">
    <h1>{{ message }}</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>