<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  background-image: url("./assets/smoothie-bg.jpg");
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  background-size: 100%;
}
</style>
