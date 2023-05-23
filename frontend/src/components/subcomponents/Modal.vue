
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    dataObject: {
      type: Object,
      required: true,
    },
  },

  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
  setup() {},
});
</script>
<template>
  <div class="modal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">X</button>
      <h1>{{ dataObject.name }}</h1>
      <h3>Spawn Locations</h3>
      <ul
        v-for="location in dataObject.common_locations"
        :key="location"
        class="list"
      >
        <li>{{ location }}</li>
      </ul>
      <h3>Drops</h3>
      <ul v-for="item in dataObject.drops" :key="item" class="list">
        <li>{{ dataObject.drops.length !== 0 ? item : "None" }}</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  width: 50rem;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.list {
  text-align: left;
}
</style>
