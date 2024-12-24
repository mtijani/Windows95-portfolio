<template>
  <div
    class="window"
    :style="{
      top: window.isCV ? '0px' : window.position.top + 'px',
      left: window.isCV ? '0px' : window.position.left + 'px',
      width: window.isCV || window.isMaximized ? '100vw' : window.size.width + 'px',
      height: window.isCV || window.isMaximized ? '100vh' : window.size.height + 'px',
    }"
    :class="{ active: isActive, minimized: window.isMinimized }"
    @mousedown="startDrag($event)"
  >
    <!-- Window header for non-CV windows -->
    <div class="window-header" v-if="!window.isCV">
      <span>{{ window.title }}</span>
      <div class="window-buttons">
        <button @click="minimize">_</button>
        <button @click="maximize">{{ window.isMaximized ? '⧉' : '□' }}</button>
        <button @click="close">X</button>
      </div>
    </div>

    <!-- Window content -->
    <div class="window-content">
      <!-- Text content -->
      <div v-if="window.content.type === 'text'">
        {{ window.content.content }}
      </div>

      <!-- PDF content -->
      <iframe
        v-if="window.content.type === 'pdf'"
        :src="window.content.url"
        frameborder="0"
        :style="{
          width: '100%',
          height: '100%',
          border: 'none',
          position: 'absolute',
          top: '0',
          left: '0',
        }"
      ></iframe>
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
    minimize() {
      this.$emit("minimizeWindow", this.window.id);
    },
    maximize() {
      this.$emit("maximizeWindow", this.window.id);
    },
    close() {
      this.$emit("closeWindow", this.window.id);
    },
    startDrag(event) {
      if (event.target.closest(".window-header") && !this.window.isCV) {
        this.isDragging = true;
        this.offsetX = event.clientX - this.window.position.left;
        this.offsetY = event.clientY - this.window.position.top;
        window.addEventListener("mousemove", this.onDrag);
        window.addEventListener("mouseup", this.stopDrag);
      }
    },
    onDrag(event) {
      if (this.isDragging) {
        let newLeft = event.clientX - this.offsetX;
        let newTop = event.clientY - this.offsetY;

        // Keep window within bounds
        newLeft = Math.max(0, Math.min(this.screenWidth - this.window.size.width, newLeft));
        newTop = Math.max(0, Math.min(this.screenHeight - this.window.size.height, newTop));

        this.$emit("updateWindowPosition", this.window.id, { top: newTop, left: newLeft });
      }
    },
    stopDrag() {
      this.isDragging = false;
      window.removeEventListener("mousemove", this.onDrag);
      window.removeEventListener("mouseup", this.stopDrag);
    },
  },
};
</script>

<style scoped>
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
  position: relative; /* Ensures child iframe is positioned relative to this container */
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevents overflow of the iframe */
}

.active {
  border: 2px solid #1e90ff;
}

.minimized {
  display: none;
}

/* Full-screen iframe styles */
iframe {
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

