<template>
  <div
    class="window"
    :style="{
      top: window.position.top + 'px',
      left: window.position.left + 'px',
      width: window.isMaximized ? '100%' : window.size.width + 'px',
      height: window.isMaximized ? '100%' : window.size.height + 'px',
    }"
    :class="{ active: isActive, minimized: window.isMinimized, maximized: window.isMaximized }"
    @mousedown="startDrag"
  >
    <!-- Window Header -->
    <div class="window-header" @dblclick="toggleMaximize">
      <span>{{ window.title }}</span>
      <div class="window-buttons">
        <button class="minimize-btn" @click.stop="minimize">_</button>
        <button class="maximize-btn" @click.stop="toggleMaximize">
          {{ window.isMaximized ? '⧉' : '□' }}
        </button>
        <button class="close-btn" @click.stop="close">X</button>
      </div>
    </div>

    <!-- Window Content -->
    <div class="window-content">
      <!-- Custom Content Slot -->
      <slot name="custom-content"></slot>

      <!-- Default Content Types -->
      <div v-if="window.content.type === 'text'">
        {{ window.content.content }}
      </div>

      <iframe
        v-else-if="window.content.type === 'pdf'"
        :src="window.content.url"
        frameborder="0"
        style="width: 100%; height: 100%; border: none;"
      ></iframe>

      <!-- Win95PFE content -->
      <Win95PFE
        v-else-if="window.content.type === 'Win95PFE'"
        :someProp="window.content.props.someProp"
      />
    </div>
  </div>
</template>

<script>
import Win95PFE from "@/components/Win95PFE.vue";  // Make sure to import the component

export default {
  name: "WindowComponent",
  components: {
    Win95PFE, // Register the component here
  },
  props: {
    window: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("closeWindow", this.window.id);
    },
    minimize() {
      this.$emit("minimizeWindow", this.window.id);
    },
    toggleMaximize() {
      this.$emit("maximizeWindow", this.window.id);
    },
    startDrag(event) {
      if (this.window.isMaximized) return;

      const initialMouseX = event.clientX;
      const initialMouseY = event.clientY;
      const { top, left } = this.window.position;

      const onMouseMove = (e) => {
        const deltaX = e.clientX - initialMouseX;
        const deltaY = e.clientY - initialMouseY;
        this.$emit("updateWindowPosition", this.window.id, {
          top: top + deltaY,
          left: left + deltaX,
        });
      };

      const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
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
  font-family: "MS Sans Serif", sans-serif;
  overflow: hidden; /* Prevent content overflow */
}

.window-header {
  background-color: #444;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  cursor: grab;
  font-size: 14px;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #c0c0c0; /* Matches the Win95 theme */
}

.window-content.maximized {
  font-size: 18px; /* Bigger font when maximized */
}

.window-content.minimized {
  display: none;
}

.active {
  border: 2px solid #1e90ff;
}

/* Custom Scrollbar */
.window-content::-webkit-scrollbar {
  width: 8px;
}

.window-content::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.window-content::-webkit-scrollbar-track {
  background-color: #e0e0e0;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
