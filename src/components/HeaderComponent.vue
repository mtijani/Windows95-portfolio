<template>
  <header class="header bg-blue-600 text-white flex items-center justify-between p-2">
    <!-- Left side: System name -->
    <div class="system-name text-lg font-semibold">Windows 95 Portfolio</div>

    <!-- Center: Active Window Title -->
    <div v-if="activeWindow" class="active-window text-sm font-medium">
      {{ activeWindow.title }}
    </div>

    <!-- Right side: Window Actions (Minimize, Maximize, Close buttons) -->
    <div class="window-actions flex space-x-1">
      <button class="action-btn minimize" @click="minimizeWindow">_</button>
      <button class="action-btn maximize" @click="maximizeWindow">□</button>
      <button class="action-btn close" @click="closeWindow">X</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    // activeWindow is passed from the parent to display the title of the currently active window
    activeWindow: {
      type: Object,
      default: null,
    },
  },
  methods: {
    minimizeWindow() {
      console.log('Minimizing window...');
      // Handle minimizing logic here
    },
    maximizeWindow() {
      console.log('Maximizing window...');
      // Handle maximizing logic here
    },
    closeWindow() {
      console.log('Closing window...');
      // Handle closing logic here
    },
  },
};
</script>

<style scoped>
/* Basic header styling */
.header {
  background-color: #1a5cb8; /* Windows 95 blue background */
  color: white;
}

.system-name {
  font-weight: bold;
  font-size: 1.2rem;
}

.active-window {
  flex-grow: 1;
  text-align: center;
}

.window-actions button {
  background-color: #d3d3d3;
  border: 1px solid #999;
  border-radius: 3px;
  padding: 0.25rem;
  cursor: pointer;
  font-weight: bold;
}

.window-actions button:hover {
  background-color: #888;
}

.action-btn {
  font-family: sans-serif;
  font-size: 1.1rem;
}

.minimize {
  background-color: #c9c9c9;
}

.maximize {
  background-color: #c9c9c9;
}

.close {
  background-color: #e87474;
}
</style>