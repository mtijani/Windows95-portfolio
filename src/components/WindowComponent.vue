<template>
  <div v-if="!window.isMinimized" class="window" :class="{ active: isActive }">
    <div class="window-header">
      <span>{{ window.title }}</span>
      <button class="close-btn" @click="$emit('closeWindow', window.id)">X</button>
    </div>
    <div class="window-body">
      <!-- Content of the window -->
      <p>Window Content Goes Here</p>
    </div>
    <div class="window-footer">
      <button @click="$emit('minimizeWindow', window.id)">_</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WindowComponent',
  props: {
    window: Object,
    isActive: Boolean,
  },
};
</script>

<style scoped>
.window {
  position: absolute;
  width: 300px;
  height: 200px;
  background-color: white;
  border: 2px solid #000;
  box-sizing: border-box;
  top: 50px;
  left: 50px;
  z-index: 100;
}

.window.active {
  border-color: #0078d7;
}

.window-header {
  background: #0078d7;
  color: white;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.window-header span {
  font-size: 14px;
}

.window-body {
  padding: 10px;
}

.window-footer {
  background: #e0e0e0;
  padding: 5px;
  text-align: right;
}

button {
  background: none;
  border: none;
  color: #0078d7;
  font-size: 14px;
  cursor: pointer;
}

button:hover {
  text-decoration: underline;
}
</style>
