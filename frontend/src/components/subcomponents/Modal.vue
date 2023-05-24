
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
      <img class="item-img" :src="dataObject.image" />
      <p class="description">{{ dataObject.description }}</p>
      <div class="list-columns">
        <div>
          <h3>Spawn Locations</h3>
          <ul
            v-for="location in dataObject.common_locations"
            :key="location"
            class="list"
          >
            <li>{{ location }}</li>
          </ul>
        </div>
        <div v-if="dataObject.drops && dataObject.drops.length > 0">
          <h3>Drops</h3>
          <ul v-for="item in dataObject.drops" :key="item" class="list">
            <li>{{ item }}</li>
          </ul>
        </div>
        <div v-else-if="dataObject.cooking_effect">
          <h3>Cooking Effect</h3>
          <p>{{ dataObject.cooking_effect }}</p>
          <h3>Hearts Recovered</h3>
          <p>{{ dataObject.hearts_recovered }}</p>
        </div>
        <div v-else>
          <h3>Drops</h3>
          <p>none</p>
        </div>
      </div>
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
.description {
  text-align: left;
  line-height: 1.1rem;
}
.list-columns {
  display: flex;
  justify-content: space-around;
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
  background-color: rgb(240, 228, 196);
  padding: 20px;
  border-radius: 4px;
  width: 50rem;
  animation: breathing 8s infinite;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 2rem;
}
.close-button {
}
.list {
  text-align: left;
}

@keyframes breathing {
  0% {
    box-shadow: 0px -1px 12px 3px #44c9e7;
  }
  50% {
    box-shadow: 0px -2px 28px 6px #44c9e7;
  }
  100% {
    box-shadow: 0px -1px 12px 3px #44c9e7;
  }
}
</style>
