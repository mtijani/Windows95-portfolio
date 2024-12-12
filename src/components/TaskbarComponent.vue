<template>
  <div class="taskbar" ref="taskbar">
    <div class="start-button" @click="toggleStartMenu">
      <img :src="require('@/assets/win95.png')" alt="Start" />
      Start
    </div>

    <div v-if="isStartMenuOpen" class="start-menu">
      <div class="social-media-links">
        <a v-for="item in socialMediaItems" :key="item.name" :href="item.url" target="_blank">
          <img :src="item.icon" :alt="item.name" />
          {{ item.name }}
        </a>
      </div>
    </div>

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
          url: "https://facebook.com",
          icon: require('@/assets/SocialMediaIcons/Linkedin.webp'),
        },
        {
          name: "Github",
          url: "https://twitter.com",
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
.taskbar-window {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-right: 10px;
  background: #d3d3d3;
  border-radius: 5px;
  cursor: pointer;
}
.taskbar-window.active {
  background: #c3c3c3;
}
.window-title {
  flex-grow: 1;
  margin-right: 5px;
}
.close-button {
  background: transparent;
  border: none;
  color: red;
  font-weight: bold;
  cursor: pointer;
}
.close-button:hover {
  color: darkred;
}

.start-button {
  background: #0078d7;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #0055a5;
}

.start-button img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.start-button:hover {
  background: #0055a5;
}

.start-menu {
  position: absolute;
  bottom: 45px;
  left: 0;
  background: #f0f0f0;
  border: 1px solid #808080;
  padding: 10px;
  width: 200px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

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
  width: 20px;
  height: 20px;
}

.taskbar-windows {
  display: flex;
  gap: 5px;
  flex-grow: 1;
}

.taskbar-window {
  background: #e0e0e0;
  border: 1px solid #808080;
  padding: 5px 10px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.taskbar-window.active {
  background: #0078d7;
  color: white;
  border-color: #0055a5;
}

.taskbar-window:hover {
  background: #a8a8a8;
}

.taskbar-clock {
  background: #e0e0e0;
  border: 1px solid #808080;
  padding: 5px 10px;
  font-weight: bold;
}
</style>
