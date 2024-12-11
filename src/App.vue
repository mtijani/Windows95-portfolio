<template>
  <div id="app" class="desktop">
    <div class="desktop-icons">
      <DesktopIcon
        v-for="icon in desktopIcons"
        :key="icon.id"
        :icon="icon"
        @openWindow="openWindow"
      />
    </div>
    <TaskbarComponent
      :windows="windows"
      :activeWindowId="activeWindowId"
      @toggleStartMenu="toggleStartMenu"
      @setActiveWindow="setActiveWindow"
    />
    <StartMenu
      :isOpen="isStartMenuOpen"
      @openWindow="openWindow"
    />
    <div v-for="window in windows" :key="window.id">
      <WindowComponent
        :window="window"
        :isActive="window.id === activeWindowId"
        @closeWindow="closeWindow"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import DesktopIcon from './components/DesktopIcon.vue';
import TaskbarComponent from './components/TaskbarComponent.vue';
import StartMenu from './components/StartMenuComponent.vue';
import WindowComponent from './components/WindowComponent.vue';

export default {
  name: 'App',
  components: {
    DesktopIcon,
    TaskbarComponent,
    StartMenu,
    WindowComponent,
  },
  setup() {
    const isStartMenuOpen = ref(false);
    const activeWindowId = ref(null);
    const windows = ref([]);
    const desktopIcons = ref([
      { id: 1, name: 'Biography', image: require('@/assets/mail.png')},
      { id: 2, name: 'WWDC 2023', image: require('@/assets/resume.png') },
      { id: 3, name: 'Résumé', image: require('@/assets/photos.png') },
    ]);

    const toggleStartMenu = () => {
      isStartMenuOpen.value = !isStartMenuOpen.value;
    };

    const openWindow = (id) => {
      const existingWindow = windows.value.find((win) => win.id === id);
      if (!existingWindow) {
        const newWindow = desktopIcons.value.find((icon) => icon.id === id);
        windows.value.push({ id: newWindow.id, title: newWindow.name });
      }
      activeWindowId.value = id;
      isStartMenuOpen.value = false; // Close Start Menu when opening a window
    };

    const setActiveWindow = (id) => {
      activeWindowId.value = id;
    };

    const closeWindow = (id) => {
      windows.value = windows.value.filter((win) => win.id !== id);
      if (activeWindowId.value === id) {
        activeWindowId.value = null;
      }
    };

    return {
      isStartMenuOpen,
      activeWindowId,
      windows,
      desktopIcons,
      toggleStartMenu,
      openWindow,
      setActiveWindow,
      closeWindow,
    };
  },
};
</script>

<style scoped>
.desktop {
  background-color: #008080;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}
.desktop-icons {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 20px;
}
</style>