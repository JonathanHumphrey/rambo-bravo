<script>
import { defineComponent } from "vue";

//const icon = require("./assets/icon.png");
//console.log(icon);
//#44c9e7
export default defineComponent({
  name: "Body",
  props: {
    message: {
      type: String,
    },
  },
  setup() {},
});
</script>

<template>
  <div class="body-container"></div>
</template>

<style scoped>
</style>
