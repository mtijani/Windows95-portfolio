<template>
  <div class="desktop" @click="handleClickOutside">
    <!-- Desktop Icons -->
    <div class="desktop-icons">
      <div
        v-for="icon in desktopIcons"
        :key="icon.id"
        class="desktop-icon"
        :class="{ selected: selectedIconId === icon.id }"
        @click="selectIcon(icon.id, $event)"
        @dblclick="openWindow(icon.id)"
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
    >
    <template v-slot:custom-content>
  <win95Internship2022
    v-if="window.id === 1"
    @closeWindow="closeWindow(window.id)"
  />

  <Win95Internship2021 v-if="window.id === 2"
  @closeWindow="closeWindow(window.id)" />

  <Win95PFE
    v-if="window.id === 4"
    @closeWindow="closeWindow(window.id)"
  />
  <Wind95TalendComponent
  v-if="window.id === 5 && window.title === 'Talend'"
  @closeWindow="closeWindow(window.id)"
/>
<Win95RefereesProject
  v-if="window.id === 6 && window.title === 'TFF Bizerte Referees Project'"
  @closeWindow="closeWindow(window.id)"
/>
</template>
    </WindowComponent>

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
import Win95PFE from "./components/Win95PFE.vue";
import win95Internship2022 from "@/components/Win95Internship2022.vue";
import Win95Internship2021 from "@/components/Win95Internship2021.vue";
import Wind95TalendComponent from '@/components/Win95TalendComponent.vue';
import Win95RefereesProject from "@/components/TFF_Bizerte.vue";


export default {
  name: "App",
  components: {
    WindowComponent,
    TaskbarComponent,
    StartMenu,
    Win95PFE,
    win95Internship2022,
    Win95Internship2021,
    Wind95TalendComponent,
    Win95RefereesProject
  },
  data() {
    return {
      desktopIcons: [
        { id: 2, title: "Internship 2021", icon: require("@/assets/photos.png") },
        { id: 1, title: "Internship 2022", icon: require("@/assets/bio.png") },
        { id: 4, title: "Final Year Project 2024", icon: require("@/assets/folder.png") }, // New icon for Win95PFE
        { id: 3, title: "My CV  (french)", icon: require("@/assets/file.png") },
        { id: 5,  title:"Talend", icon:require("@/assets/Talend.png")},
        {id: 6, title:"TFF Bizerte Referees Project", icon:require("@/assets/video.png")}
        
      ],
      openWindows: [],
      minimizedWindows: [],
      activeWindowId: null,
      selectedIconId: null, // Tracks the currently selected icon
      isStartMenuOpen: false,
    };
  },
  methods: {
    selectIcon(id, event) {
      // Select the clicked icon and highlight it
      this.selectedIconId = id;
      event.stopPropagation(); // Prevent click from propagating to desktop
    },
    openWindow(id) {
      const existingWindow = this.openWindows.find((win) => win.id === id);
      if (!existingWindow) {
        const content =
            id === 1
              ? { type: "custom", component: "Win95Internship" }
              : id === 2 
              ? {type:"custom", component:"Win95Internship2021"}
              : id === 3
              ? { type: "pdf", url: "/cv.pdf" }
              : id === 4
              ? { type: "custom", component: "Win95PFE" }
              : id === 5 
              ? {type:"custom", component:"Win95TalendComponent"}
              : id === 6 
              ? {type:"custom", component:"Win95RefereesProject"}
              : { type: "text", content: `Content of ${this.getWindowTitle(id)}` };
        this.openWindows.push({
          id,
          title: this.getWindowTitle(id),
          isMinimized: false,
          isMaximized: false,
          position: { top: 100, left: 100 },
          size: { width: 400, height: 300 },
          content,
        });
      }
      this.setActiveWindow(id);
      this.isStartMenuOpen = false;
    },
    closeWindow(id) {
  // Find the window with the given ID and remove it from openWindows
  this.openWindows = this.openWindows.filter((win) => win.id !== id);
  this.minimizedWindows = this.minimizedWindows.filter(
    (win) => win.id !== id
  );

  // If there are still open windows, set the last one as the active window
  if (this.openWindows.length > 0) {
    this.activeWindowId = this.openWindows[this.openWindows.length - 1].id;
  } else {
    this.activeWindowId = null;
  }
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
      const minimizedWindow = this.minimizedWindows.find(
        (win) => win.id === id
      );
      if (minimizedWindow) {
        minimizedWindow.isMinimized = false;
        this.openWindows.push(minimizedWindow);
        this.minimizedWindows = this.minimizedWindows.filter(
          (win) => win.id !== id
        );
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
    handleClickOutside(event) {
      // If the click is outside of the selected icon, deselect the icon
      if (!event.target.closest('.desktop-icon')) {
        this.selectedIconId = null;
      }
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
  display: grid;
  grid-template-columns: repeat(3, 80px); /* 3 icons per row */
  gap: 10px; /* Space between the icons */
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
.desktop-icon:hover {
  outline: 1px dashed #e9e9f0; /* Windows 95 hover effect */
  outline-offset: -2px;
}
.desktop-icon.selected {
  background-color: #000080; /* Classic Windows 95 selection color */
  color: white; /* White text on selection */
  border: 2px inset white; /* Inner border for a 3D inset effect */
  box-shadow: 
    1px 1px 0px #808080, /* Bottom-right shadow */
    -1px -1px 0px black, /* Top-left shadow */
    inset 1px 1px 0px black, /* Inner black inset */
    inset -1px -1px 0px white; /* Inner white inset */
  border-radius: 0; /* Windows 95 icons had no rounded corners */
  padding: 2px; /* Adds padding inside the border for better spacing */
  outline: none; /* Remove any default outline */
}

</style>
