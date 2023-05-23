import { createApp } from "vue";

import App from "./App.vue";
import HomePage from "./components/HomePage.vue";
import Search from "./components/subcomponents/Search.vue";
import Creatures from "./components/subcomponents/Creatures.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = new createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: HomePage },
		{ path: "/search", component: Search },
		{ path: "/creatures", component: Creatures },
	],
});

createApp(App).use(router).mount("#app");
