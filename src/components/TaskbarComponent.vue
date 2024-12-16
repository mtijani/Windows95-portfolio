<template>
  <div class="taskbar" ref="taskbar">
    <!-- Start button to toggle the Start Menu -->
    <div class="start-button" @click="toggleStartMenu">
      <img :src="require('@/assets/win95.png')" alt="Start" />
      Start
    </div>

    <!-- Start Menu - only visible when isStartMenuOpen is true -->
    <div v-if="isStartMenuOpen" class="start-menu">
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
          <a v-for="item in socialMediaItems" :key="item.name" :href="item.url" target="_blank">
            <img :src="item.icon" :alt="item.name" />
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>

    <!-- Taskbar Windows Section -->
    <div class="taskbar-windows">
      <div
        v-for="window in windows"
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
          url: "https://linkedin.com",
          icon: require('@/assets/SocialMediaIcons/Linkedin.webp'),
        },
        {
          name: "Github",
          url: "https://github.com",
          icon: require('@/assets/SocialMediaIcons/Github.webp'),
        },
      ],
      currentTime: this.getCurrentTime(),
    };
  },
  methods: {
    toggleStartMenu() {
      this.isStartMenuOpen = !this.isStartMenuOpen;
    },
    toggleWindow(window) {
      if (window.isMinimized) {
        this.$emit("restoreWindow", window.id);
      } else {
        this.$emit("toggleWindow", window.id);
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
      this.$emit("openWindow", id);  // Open the clicked window
    },
    handleClickOutside(event) {
      const taskbar = this.$refs.taskbar;
      if (taskbar && !taskbar.contains(event.target)) {
        this.isStartMenuOpen = false;
      }
    },
  },
  mounted() {
    this.timeInterval = setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    clearInterval(this.timeInterval);
    document.removeEventListener("click", this.handleClickOutside);
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
  background: #005a8b; /* Dark blue background */
  color: white;
  font-family: "Tahoma", sans-serif;
  font-size: 14px;
  font-weight: normal;
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
  background: #003d66; /* Darker blue when hovered */
}

/* Start Menu styles */
.start-menu {
  position: absolute;
  bottom: 45px;
  left: 0;
  background: #c0c0c0; /* Light grey background */
  border: 2px solid #808080; /* Darker grey border */
  padding: 10px;
  width: 300px; /* Increased width for better layout */
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for 3D effect */
  display: flex;
}

.win95-image {
  width: 80px; /* Adjust the size of the image */
  margin-right: 10px; /* Space between the image and the content */
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
  padding-left: 5px; /* Add some padding on the left */
}

.taskbar-window {
  background: #c0c0c0;
  border: 2px solid #808080;
  padding: 3px 8px; /* Reduced padding for a thinner window */
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px; /* Slight rounded corners for the windows */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* 3D effect */
  min-width: 80px; /* Thinner minimum width */
  height: 24px; /* Reduced height to make it thinner */
  font-size: 12px; /* Smaller font size to fit text better */
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
  font-size: 14px; /* Adjusted font size for better fit */
  padding: 0;
  margin-left: 5px;
  width: 16px; /* Smaller close button */
  height: 16px; /* Adjusted to match new size */
  text-align: center;
  line-height: 12px; /* Smaller line height to fit the button */
  border-radius: 50%; /* Rounded close button */
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

