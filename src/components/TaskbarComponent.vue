<template>
  <div class="taskbar">
    <!-- Start Button -->
    <button class="start-button" @click="$emit('toggleStartMenu')">Start</button>
    
    <!-- Taskbar Windows -->
    <div class="taskbar-windows">
      <div
        v-for="window in windows"
        :key="window.id"
        class="taskbar-item"
        :class="{ active: window.id === activeWindowId }"
        @click="$emit('setActiveWindow', window.id)"
      >
        {{ window.title }}
      </div>
    </div>
    
    <!-- Clock -->
    <div class="clock">
      {{ currentTime }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "TaskbarComponent",
  props: {
    windows: Array,
    activeWindowId: Number,
  },
  setup() {
    const currentTime = ref("");

    // Function to update the time
    const updateTime = () => {
      const now = new Date();
      currentTime.value = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    // Update the clock every second
    onMounted(() => {
      updateTime();
      setInterval(updateTime, 1000);
    });

    return { currentTime };
  },
};
</script>

<style scoped>
.taskbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #c0c0c0;
  padding: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #000;
  box-sizing: border-box;
}

.start-button {
  background: #0078d7;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  flex-shrink: 0; /* Ensure the button doesn't shrink */
}

.start-button:hover {
  background: #005a9e;
}

.taskbar-windows {
  flex: 1; /* Allow windows section to grow and take up remaining space */
  display: flex;
  margin: 0 10px;
  overflow-x: auto; /* Enable scrolling if content overflows */
}

.taskbar-item {
  padding: 5px 10px;
  cursor: pointer;
  background: #e0e0e0;
  margin-right: 5px;
  white-space: nowrap; /* Prevent text wrapping */
  flex-shrink: 0; /* Prevent shrinking of individual taskbar items */
}

.taskbar-item.active {
  background: #0078d7;
  color: #fff;
}

.clock {
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  color: #000;
  flex-shrink: 0; /* Keep the clock from shrinking */
  white-space: nowrap; /* Prevent time from breaking into multiple lines */
  margin-right: 20px; /* Push the clock to the far right */
  text-align: right;
}
</style>