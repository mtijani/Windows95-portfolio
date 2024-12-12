<template>
  <div
    v-if="!window.isMinimized"
    class="window"
    :class="{ active: isActive }"
    :style="{ top: `${window.position.top}px`, left: `${window.position.left}px` }"
    @mousedown="startDrag"
    @mouseup="stopDrag"
    @mousemove="dragWindow"
  >
    <div class="window-header">
      <span>{{ window.title }}</span>
      <div class="window-controls">
        <button class="minimize-btn" @click="minimizeWindow">_</button>
        <button class="close-btn" @click="closeWindow">X</button>
      </div>
    </div>
    <div class="window-body">
      <p>Window Content Goes Here</p>
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
    };
  },
  methods: {
    closeWindow() {
      this.$emit("closeWindow", this.window.id);
    },
    minimizeWindow() {
      this.$emit("minimizeWindow", this.window.id);
    },
    startDrag(event) {
      this.isDragging = true;
      this.offsetX = event.clientX - this.window.position.left;
      this.offsetY = event.clientY - this.window.position.top;
    },
    stopDrag() {
      this.isDragging = false;
    },
    dragWindow(event) {
      if (this.isDragging) {
        this.$emit("dragWindow", this.window.id, {
          top: event.clientY - this.offsetY,
          left: event.clientX - this.offsetX,
        });
      }
    },
  },
};
</script>

<style scoped>
.window {
  position: absolute;
  width: 300px;
  height: 200px;
  background: #c0c0c0;
  border: 2px solid black;
  box-sizing: border-box;
}

.window-header {
  background: #0078d7;
  color: white;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: move;
}

.window-controls {
  display: flex;
  gap: 5px;
}

.window-body {
  padding: 10px;
}
</style>
