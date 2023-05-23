<script>
import Modal from "./Modal.vue";

export default {
  data() {
    return {
      creatures: [],
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
      fetch("https://botw-compendium.herokuapp.com/api/v2/category/creatures")
        .then((response) => response.json())
        .then((data) => {
          this.creatures = data.data;
          this.dataLoaded = true;
          console.log(this.creatures["food"]);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handleItemClick(id) {
      let food = this.creatures.food;
      let non_food = this.creatures.non_food;
      food.forEach((element) => {
        if (element.id === id) {
          this.selectedItem = element;
        }
      });
      non_food.forEach((element) => {
        if (element.id === id) {
          this.selectedItem = element;
        }
      });
      console.log(this.selectedItem);
      this.openModal();
    },
    openModal() {
      this.showModal = true;
      console.log(this.showModal);
    },
    closeModal() {
      this.showModal = false;
    },
  },
  components: {
    Modal,
  },
};
</script>

<template>
  <div class="body-container">
    <Modal
      :dataObject="selectedItem"
      v-if="showModal"
      @close-modal="closeModal"
    />
    <ul v-if="dataLoaded" class="list">
      <li v-for="creature in creatures.food" :key="creature.id">
        {{ creature.name }}
      </li>
    </ul>
    <ul v-if="dataLoaded" class="list">
      <li
        v-for="creature in creatures.non_food"
        :key="creature.id"
        @click="handleItemClick(creature.id)"
      >
        {{ creature.name }}
      </li>
    </ul>
    <p v-else>Loading...</p>
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
  justify-content: center;

  border-radius: 2rem;
  position: relative;
}
.list {
  border: solid black;
  text-align: left;
}
</style>