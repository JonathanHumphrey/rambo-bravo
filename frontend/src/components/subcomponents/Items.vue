<script>
import { defineComponent } from "vue";

import Modal from "./Modal.vue";

export default defineComponent({
  data() {
    return {
      items: [],
      dataLoaded: false,
      selectedItem: null,
      showModal: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("https://botw-compendium.herokuapp.com/api/v2/category/materials")
        .then((response) => response.json())
        .then((data) => {
          console.log(data.data);
          this.items = data.data;
          this.dataLoaded = true;
          console.log(this.items);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleItemClick(id) {
      this.items.forEach((item) => {
        if (item.id === id) {
          this.selectedItem = item;
          this.openModal();
        }
      });
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  components: {
    Modal,
  },
});
</script>
<template>
  <div class="body-container">
    <Modal
      :dataObject="selectedItem"
      v-if="showModal"
      @close-modal="closeModal"
    />
    <div v-if="dataLoaded">
      <h3>Items</h3>
      <ul class="list">
        <li
          v-for="item in items"
          :key="item.id"
          @click="handleItemClick(item.id)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.body-container {
  background: #75462f;
  display: flex;
  flex-direction: row;
  min-height: 75vh;
  width: 80%;
  animation: breathing 4s infinite;
  justify-content: space-around;
  border-radius: 2rem;
  position: relative;
  margin: 2rem;
}
.list {
  border: solid black;
  text-align: left;
  list-style-type: none;
  color: rgb(53, 40, 40);
}
li:hover {
  color: #44c9e7;
  cursor: pointer;
}
@keyframes breathing {
  0% {
    box-shadow: 0px -1px 12px 3px rgba(190, 122, 55, 1);
  }
  50% {
    box-shadow: 0px -2px 28px 6px rgba(190, 122, 55, 1);
  }
  100% {
    box-shadow: 0px -1px 12px 3px rgba(190, 122, 55, 1);
  }
}
</style>