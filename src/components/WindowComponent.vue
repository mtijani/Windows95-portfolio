<template>
  <div
    class="window"
    :style="{
      top: window.position.top + 'px',
      left: window.position.left + 'px',
      width: window.isMaximized ? '100vw' : window.size.width + 'px',
      height: window.isMaximized ? '100vh' : window.size.height + 'px',
    }"
    :class="{ active: isActive, minimized: window.isMinimized }"
    @mousedown="startDrag($event)"
  >
    <div class="window-header">
      <span>{{ window.title }}</span>
      <div class="window-buttons">
        <button @click="minimize">_</button>
        <button @click="maximize">{{ window.isMaximized ? '[]' : '□' }}</button>
        <button @click="close">X</button>
      </div>
    </div>
    <div class="window-content">
      <!-- Window content here -->
      Content of the {{ window.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "WindowComponent",
  props: {
    window: Object,
    isActive: Boolean,
  },
  data() {
    return {
      isDragging: false,
      offsetX: 0,
      offsetY: 0,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    };
  },
  methods: {
    // Minimize the window
    minimize() {
      this.$emit("minimizeWindow", this.window.id);
    },

    // Maximize/Restore the window
    maximize() {
      this.$emit("maximizeWindow", this.window.id);
    },

    // Close the window
    close() {
      // Emit close event with specific window's ID
      this.$emit("closeWindow", this.window.id);
    },

    // Start dragging the window
    startDrag(event) {
      if (event.target.closest('.window-header')) {
        this.isDragging = true;
        this.offsetX = event.clientX - this.window.position.left;
        this.offsetY = event.clientY - this.window.position.top;
        window.addEventListener('mousemove', this.onDrag);
        window.addEventListener('mouseup', this.stopDrag);
      }
    },

    // Dragging the window
    onDrag(event) {
      if (this.isDragging) {
        let newLeft = event.clientX - this.offsetX;
        let newTop = event.clientY - this.offsetY;

        // Ensure the window stays within bounds
        newLeft = Math.max(0, Math.min(this.screenWidth - this.window.size.width, newLeft));
        newTop = Math.max(0, Math.min(this.screenHeight - this.window.size.height, newTop));

        // Emit updated window position
        this.$emit('updateWindowPosition', this.window.id, { top: newTop, left: newLeft });
      }
    },

    // Stop dragging the window
    stopDrag() {
      this.isDragging = false;
      window.removeEventListener('mousemove', this.onDrag);
      window.removeEventListener('mouseup', this.stopDrag);
    },
  },
};
</script>

<style scoped>
.window-buttons button {
  background: #c0c0c0; /* Windows 95 button gray */
  border: 1px solid #808080; /* Gray border */
  padding: 2px 6px;
  font-family: "Microsoft Sans Serif", sans-serif;
  font-size: 12px;
  cursor: pointer;
  color: black;
  text-align: center;
  border-radius: 2px;
}

.window-buttons button:hover {
  background: #a0a0a0; /* Slightly darker gray on hover */
}

.window-buttons button:active {
  background: #808080; /* Darker gray on click */
  border: 1px solid #505050;
}

.window-header {
  background-color: #000080; /* Classic Windows 95 header blue */
  color: white;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  border: 2px solid #808080;
  font-family: "Microsoft Sans Serif", sans-serif;
  font-size: 14px;
}

.window-header .window-buttons {
  display: flex;
  gap: 5px;
}

.window-header .window-buttons button {
  border-radius: 2px;
}

.window {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.window-header {
  background-color: #444;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  cursor: grab;
}

.window-header:active {
  cursor: grabbing;
}

.window-buttons button {
  background: none;
  color: white;
  border: none;
  cursor: pointer;
}

.window-content {
  padding: 20px;
  background: #f4f4f4;
}

.active {
  border: 2px solid #1e90ff;
}

.minimized {
  display: none;
}
</style>
