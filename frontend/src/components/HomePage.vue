<script>
import { defineComponent } from "vue";
import Header from "./subcomponents/Header.vue";
//import Body from "./subcomponents/Body.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Header,
  },
  data() {
    return {
      message: "Welcome!",
    };
  },
});
</script>

<template>
  <div class="home-container">
    <Header :message="message" />
    <div class="body-container">
      <img
        src="@/assets\icon.png"
        alt="Shiekah emblem from The Legend of Zelda"
        class="icon"
      />
      <div class="button-group">
        <router-link to="/search">
          <button class="blend-in">Search</button></router-link
        >
        <router-link to="/creatures">
          <button class="blend-in">Creatures</button></router-link
        >
        <router-link to="/items">
          <button class="blend-in">Items</button></router-link
        >
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  border: solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.body-container {
  background: #75462f;
  display: flex;
  flex-direction: column;
  min-height: 75vh;
  width: 80%;
  animation: breathing 4s infinite;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  position: relative;
}
.button-group {
  position: absolute;
  top: 47%;

  width: 960px;
  display: flex;
  justify-content: space-between;
}

.blend-in {
  background: #44c9e7;

  border-radius: 100%;
  height: 3rem;
  width: 4rem;
  padding: 0.1rem;
  border: none;
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s;
}
.blend-in:hover {
  background: #3297ae;
  transform: scale(1.5);
}
.icon {
  height: 700px;
  width: 1000px;
  border: solid black;
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