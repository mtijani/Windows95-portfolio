<template>
  <div class="start-menu">
    <div class="start-menu-header">Programs</div>
    <ul class="start-menu-list">
      <li
        v-for="window in windows"
        :key="window.id"
        @click="openWindow(window.id)"
        class="start-menu-item"
      >
        {{ window.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StartMenu",
  props: {
    windows: Array,
  },
  methods: {
    openWindow(id) {
      this.$emit("openWindow", id);
    },
    restoreWindow(id) {
      this.$emit("restoreWindow", id);
    },
  },
};
</script>

<style scoped>
.start-menu {
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 200px;
  background: #c0c0c0;
  border: 1px solid black;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.start-menu-header {
  background: #0078d7;
  color: white;
  padding: 10px;
  font-weight: bold;
  text-align: center;
}

.start-menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.start-menu-item {
  padding: 10px;
  cursor: pointer;
}

.start-menu-item:hover {
  background: #0078d7;
  color: white;
}
/* StartMenuComponent Styles */
.start-menu {
  position: absolute;
  bottom: 45px;
  left: 0;
  background: #f0f0f0;
  border: 1px solid #808080;
  padding: 10px;
  width: 200px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-family: "Microsoft Sans Serif", sans-serif;
  font-size: 12px;
}

.start-menu-header {
  font-weight: bold;
  margin-bottom: 10px;
}

.start-menu-list {
  list-style-type: none;
  padding: 0;
}

.start-menu-item {
  padding: 5px;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: #f0f0f0;
  margin-bottom: 2px;
}

.start-menu-item:hover {
  background-color: #d0d0d0;
}

.start-menu-item:active {
  background-color: #a0a0a0;
}

</style>
