<template>
  <div class="desktop">
    <!-- Desktop Icons -->
    <div class="desktop-icons">
      <div
        v-for="icon in desktopIcons"
        :key="icon.id"
        class="desktop-icon"
        @click="openWindow(icon.id)"
      >
        <img :src="icon.icon" alt="icon" />
        <span>{{ icon.title }}</span>
      </div>
    </div>

    <!-- Windows -->
    <WindowComponent
      v-for="window in openWindows"
      :key="window.id"
      :window="window"
      :isActive="activeWindowId === window.id"
      @closeWindow="closeWindow"
      @minimizeWindow="minimizeWindow"
      @maximizeWindow="maximizeWindow"
      @updateWindowPosition="updateWindowPosition"
      @mousedown="setActiveWindow(window.id)"
    />

    <!-- Taskbar -->
    <TaskbarComponent
      :windows="minimizedWindows.concat(openWindows)"
      :activeWindowId="activeWindowId"
      @restoreWindow="restoreWindow"
      @toggleStartMenu="toggleStartMenu"
      @closeWindow="closeWindow"
    />

    <!-- Start Menu -->
    <StartMenu
      v-if="isStartMenuOpen"
      :windows="openWindows"
      @openWindow="openWindow"
      @restoreWindow="restoreWindow"
    />
  </div>
</template>

<script>
import WindowComponent from "./components/WindowComponent.vue";
import TaskbarComponent from "./components/TaskbarComponent.vue";
import StartMenu from "./components/StartMenuComponent.vue";

export default {
  name: "App",
  components: {
    WindowComponent,
    TaskbarComponent,
    StartMenu,
  },
  data() {
    return {
      desktopIcons: [
        { id: 1, title: "My Computer", icon: require("@/assets/bio.png") },
        { id: 2, title: "Recycle Bin", icon: require("@/assets/file.png") },
      ],
      openWindows: [],
      minimizedWindows: [],
      activeWindowId: null,
      isStartMenuOpen: false,
    };
  },
  methods: {
    openWindow(id) {
  const existingWindow = this.openWindows.find((win) => win.id === id);
  if (!existingWindow) {
    this.openWindows.push({
      id: Date.now(), // Use a unique identifier (e.g., timestamp or UUID)
      title: this.getWindowTitle(id),
      isMinimized: false,
      isMaximized: false,
      position: { top: 100, left: 100 },
      size: { width: 400, height: 300 },
    });
  }
  this.setActiveWindow(id);
  this.isStartMenuOpen = false;
},
    closeWindow(id) {
      // Close only the specific window that matches the id
      this.openWindows = this.openWindows.filter((win) => win.id !== id);
      this.minimizedWindows = this.minimizedWindows.filter((win) => win.id !== id);
      this.activeWindowId = this.openWindows.length
        ? this.openWindows[this.openWindows.length - 1].id
        : null;
    },
    minimizeWindow(id) {
      const window = this.openWindows.find((win) => win.id === id);
      if (window) {
        window.isMinimized = true;
        this.minimizedWindows.push(window);
        this.openWindows = this.openWindows.filter((win) => win.id !== id);
      }
    },
    maximizeWindow(id) {
      const window = this.openWindows.find((win) => win.id === id);
      if (window) {
        window.isMaximized = !window.isMaximized;
        if (window.isMaximized) {
          window.position = { top: 0, left: 0 };
          window.size = { width: window.innerWidth, height: window.innerHeight };
        } else {
          window.size = { width: 400, height: 300 };
        }
      }
    },
    restoreWindow(id) {
      const minimizedWindow = this.minimizedWindows.find((win) => win.id === id);
      if (minimizedWindow) {
        minimizedWindow.isMinimized = false;
        this.openWindows.push(minimizedWindow);
        this.minimizedWindows = this.minimizedWindows.filter((win) => win.id !== id);
      }
      this.setActiveWindow(id);
    },
    updateWindowPosition(id, position) {
      const window = this.openWindows.find((win) => win.id === id);
      if (window && !window.isMaximized) {
        window.position = position;
      }
    },
    setActiveWindow(id) {
      this.activeWindowId = id;
    },
    toggleStartMenu() {
      this.isStartMenuOpen = !this.isStartMenuOpen;
    },
    getWindowTitle(id) {
      const icon = this.desktopIcons.find((icon) => icon.id === id);
      return icon ? icon.title : "Untitled";
    },
  },
};
</script>

<style scoped>
.desktop {
  width: 100vw;
  height: 100vh;
  background-color: #008080;
  position: relative;
  overflow: hidden;
}

.desktop-icons {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 10px;
  left: 10px;
}

.desktop-icon {
  width: 80px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
}

.desktop-icon img {
  width: 50px;
  height: 50px;
}

.desktop-icon span {
  display: block;
  font-size: 12px;
  margin-top: 5px;
}
</style>
