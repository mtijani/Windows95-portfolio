import { defineStore } from 'pinia';

export const useWindowStore = defineStore('windowStore', {
  state: () => ({
    windows: [],
    activeWindow: null,
  }),
  actions: {
    setActiveWindow(windowId) {
      this.activeWindow = windowId;
    },
    addWindow(window) {
      this.windows.push(window);
    },
    removeWindow(windowId) {
      this.windows = this.windows.filter(window => window.id !== windowId);
    },
  },
});
