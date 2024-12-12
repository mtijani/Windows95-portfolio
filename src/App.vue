<template>
  <div class="desktop">
    <!-- Desktop Icons -->
    <DesktopIcon
      v-for="icon in icons"
      :key="icon.id"
      :icon="icon"
      @openWindow="openWindow"
    />
    
    <!-- Windows -->
    <WindowComponent
      v-for="window in openWindows"
      :key="window.id"
      :window="window"
      :isActive="activeWindowId === window.id"
      @closeWindow="closeWindow"
      @minimizeWindow="minimizeWindow"
      @dragWindow="updateWindowPosition"
      @mousedown="setActiveWindow(window.id)"
    />
    
    <!-- Taskbar -->
    <TaskbarComponent
      :windows="minimizedWindows.concat(openWindows)"
      :activeWindowId="activeWindowId"
      @restoreWindow="restoreWindow"
      @toggleStartMenu="toggleStartMenu"
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
import DesktopIcon from "./components/DesktopIcon.vue";
import WindowComponent from "./components/WindowComponent.vue";
import TaskbarComponent from "./components/TaskbarComponent.vue";
import StartMenu from "./components/StartMenuComponent.vue";

export default {
  name: "App",
  components: {
    DesktopIcon,
    WindowComponent,
    TaskbarComponent,
    StartMenu,
  },
  data() {
    return {
      icons: [
        { id: 1, name: "My Computer", image: require("@/assets/bio.png") },
        { id: 2, name: "Recycle Bin", image: require("@/assets/file.png") },
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
          id,
          title: this.getWindowTitle(id),
          isMinimized: false,
          position: { top: 100, left: 100 },
        });
      }

      this.setActiveWindow(id);
      this.isStartMenuOpen = false;
    },
    closeWindow(id) {
      this.openWindows = this.openWindows.filter((win) => win.id !== id);
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
      if (window) {
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
      const icon = this.icons.find((icon) => icon.id === id);
      return icon ? icon.name : "Untitled";
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
</style>
