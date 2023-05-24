<template>
  <router-view></router-view>
</template>

<script>
//import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {},
};
</script>

<style>
@font-face {
  font-family: face;
  src: url("./assets/fonts/font.otf");
}

#app {
  font-family: face, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  letter-spacing: 0px;
  font-size: 1.5rem;
  overflow-x: hidden;
}
html {
  background: #392d2e;
  height: 100%;
  width: 100%;
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
</style>
