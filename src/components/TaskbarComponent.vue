<template>
  <div class="taskbar" ref="taskbar">
    <!-- Start button to toggle the Start Menu -->
    <div class="start-button" @click="toggleStartMenu">
      <img :src="require('@/assets/win95.png')" alt="Start" />
      Start
    </div>

    <!-- Start Menu - only visible when isStartMenuOpen is true -->
    <div v-if="isStartMenuOpen" key="start-menu-open" class="start-menu">
      <!-- Sidebar Image on the Left -->
      <div class="win95-image">
        <img :src="require('@/assets/sidebar-image.png')" alt="Windows 95" />
      </div>

      <!-- Start Menu Content on the Right -->
      <div class="start-menu-content">
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

        <!-- Social Media Links Section -->
        <div class="social-media-links">
          <a
            v-for="item in socialMediaItems"
            :key="item.name"
            :href="item.url"
            target="_blank"
          >
            <img :src="item.icon" :alt="item.name" />
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
    <div v-else key="start-menu-closed">
      <!-- Placeholder or nothing when Start Menu is closed -->
    </div>

    <!-- Taskbar Windows Section -->
    <div class="taskbar-windows">
      <div
        v-for="window in displayedWindows"
        :key="window.id"
        class="taskbar-window"
        :class="{ active: activeWindowId === window.id }"
      >
        <span @click="toggleWindow(window)" class="window-title">
          {{ window.title }}
        </span>
        <button @click="closeWindow(window.id)" class="close-button">X</button>
      </div>
    </div>

    <!-- Taskbar Clock Section -->
    <div class="taskbar-clock">
      {{ currentTime }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskbarComponent",
  props: {
    windows: Array,
    activeWindowId: Number,
  },
  data() {
    return {
      isStartMenuOpen: false,
      socialMediaItems: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/mohamed-tijani-khammouma/",
          icon: require('@/assets/SocialMediaIcons/Linkedin.webp'),
        },
        {
          name: "Github",
          url: "https://github.com/mtijani/",
          icon: require('@/assets/SocialMediaIcons/Github.webp'),
        },
      ],
      currentTime: this.getCurrentTime(),
    };
  },
  computed: {
    displayedWindows() {
      // Show only the active window if the user is on a phone, otherwise show all.
      return this.isMobile() ? this.windows.filter(w => w.id === this.activeWindowId) : this.windows;
    },
  },
  methods: {
    toggleStartMenu() {
      this.isStartMenuOpen = !this.isStartMenuOpen;
    },
    toggleWindow(window) {
  if (window.isMinimized) {
    this.$emit("restoreWindow", window.id);  // Restore window if minimized
  } else {
    this.$emit("activateWindow", window.id); // Activate the window
  }
},
    closeWindow(windowId) {
      this.$emit("closeWindow", windowId);
    },
    getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    },
    openWindow(id) {
      this.$emit("openWindow", id); // Open the clicked window
    },
    handleClickOutside(event) {
      const taskbar = this.$refs.taskbar;
      if (taskbar && !taskbar.contains(event.target)) {
        this.isStartMenuOpen = false;
      }
    },
    isMobile() {
      return window.innerWidth <= 768; // Define a breakpoint for mobile devices
    },
  },
  mounted() {
    this.timeInterval = setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
    document.addEventListener("click", this.handleClickOutside);
    window.addEventListener("resize", this.checkMobileView);
  },
  beforeUnmount() {
    clearInterval(this.timeInterval);
    document.removeEventListener("click", this.handleClickOutside);
    window.removeEventListener("resize", this.checkMobileView);
  },
};
</script>

<style scoped>
/* Taskbar styles */
.taskbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: #c0c0c0;
  border-top: 2px solid #808080;
  display: flex;
  align-items: center;
  padding: 0 10px;
  z-index: 1000;
}

.start-button {
  background: #005a8b;
  color: white;
  font-family: "Tahoma", sans-serif;
  font-size: 14px;
  padding: 5px 15px;
  border: 1px solid #808080;
  cursor: pointer;
  text-align: center;
}

.start-button img {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.start-button:hover {
  background: #003d66;
}

/* Start Menu styles */
.start-menu {
  position: absolute;
  bottom: 45px;
  left: 0;
  background: #c0c0c0;
  border: 2px solid #808080;
  padding: 10px;
  width: 300px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  display: flex;
}

.win95-image {
  width: 80px;
  margin-right: 10px;
}

.start-menu-content {
  flex-grow: 1;
}

.start-menu-item {
  padding: 10px;
  border: 1px solid #808080;
  background: #e0e0e0;
  cursor: pointer;
  font-size: 14px;
}

.start-menu-item:hover {
  background: #005a8b;
  color: white;
}

/* Social Media Links */
.social-media-links {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.social-media-links a {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border: 1px solid transparent;
}

.social-media-links a:hover {
  background: #e0e0e0;
  border: 1px solid #808080;
}

.social-media-links img {
  width: 16px;
  height: 16px;
}

/* Taskbar Window styles */
.taskbar-windows {
  display: flex;
  gap: 5px;
  flex-grow: 1;
  padding-left: 5px;
}

.taskbar-window {
  background: #c0c0c0;
  border: 2px solid #808080;
  padding: 3px 8px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  min-width: 80px;
  height: 24px;
  font-size: 12px;
}

.taskbar-window.active {
  background: #0078d7;
  color: white;
  border-color: #0055a5;
}

.taskbar-window:hover {
  background: #a8a8a8;
}

/* Taskbar Clock styles */
.taskbar-clock {
  background: #e0e0e0;
  border: 1px solid #808080;
  padding: 5px 10px;
  font-weight: bold;
}

.close-button {
  background: transparent;
  color: black;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  margin-left: 5px;
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 12px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.close-button:hover {
  background-color: #ff4c4c;
  color: white;
}

.close-button:active {
  background-color: #ff0000;
}
</style>
