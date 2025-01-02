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
        <button class="minimize-btn" @click.stop="minimize"></button>
        <button class="maximize-btn" @click.stop="toggleMaximize"></button>
        <button class="close-btn" @click.stop="close"></button>
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
       <Win95Internship2021  v-else-if="window.content.type === 'Win95Internship2021'"
       :someProp="window.content.props.someProp" />
      <Win95PFE
        v-else-if="window.content.type === 'Win95PFE'"
        :someProp="window.content.props.someProp"
      />
      <win95Internship2022
       v-else-if="window.content.type === 'win95Internship2022'"
      :someProp="window.content.props.someProp"  />
    </div>
  </div>
</template>

<script>
import Win95PFE from "@/components/Win95PFE.vue"; 
import win95Internship2022 from "@/components/Win95Internship2022.vue"
import Win95Internship2021 from "@/components/Win95Internship2021.vue"
export default {
  name: "WindowComponent",
  components: {
    Win95PFE, // Register the component here
    win95Internship2022,
    Win95Internship2021
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
  z-index: 1;
  font-family: "MS Sans Serif", sans-serif;
  overflow: hidden; /* Prevent content overflow */
}

/* Window Header */
.window-header {
  background-color: #000080; /* Dark blue */
  color: white;
  padding: 2px 5px;
  font-family: "MS Sans Serif", sans-serif;
  font-size: 12px;
  border: 1px solid #808080; /* Outer border */
  display: flex;
  justify-content: space-between;
  cursor: grab;
  box-shadow: inset -1px -1px #ffffff, inset 1px 1px #000080; /* Beveled effect */
}

.window-header:active {
  cursor: grabbing;
}

/* Window Buttons */
.window-buttons button {
  width: 20px;
  height: 20px;
  background: #d4d0c8; /* Classic gray */
  border: 1px solid #808080; /* Outer dark border */
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  padding: 0;
  margin-left: 2px;
  color: black; /* Button text color */
  box-shadow: inset -1px -1px #ffffff, inset 1px 1px #808080; /* Beveled effect */
  cursor: pointer;
}

.window-buttons button:hover {
  background: #c0c0c0; /* Slightly darker on hover */
}

.window-buttons .minimize-btn::before {
  content: "_";
  font-weight: bold;
  font-size: 14px;
}

.window-buttons .maximize-btn::before {
  content: "□";
  font-weight: bold;
  font-size: 14px;
}

.window-buttons .close-btn {
  color: red; /* Red close button text */
  font-weight: bold;
}

.window-buttons .close-btn::before {
  content: "X";
  font-weight: bold;
}

/* Window Content */
.window-content {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: auto; /* Make the content scrollable */
  font-size: 14px;
  line-height: 1.5;
}

.window-content.maximized {
  font-size: 18px; /* Bigger font when maximized */
}

.window-content.minimized {
  display: none;
}

/* Active Window Border */
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
