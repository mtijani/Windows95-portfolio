<template>
  <div @click="openWindow">
    <img :src="iconSrc" alt="Desktop Icon" />
  </div>
</template>

<script>
export default {
  props: {
    iconSrc: String,
    windowTitle: String
  },
  methods: {
    openWindow() {
      // Generate a unique ID for each window instance
      const uniqueWindowId = `${this.windowTitle}-${Date.now()}`;

      this.$emit('open-window', {
        id: uniqueWindowId,
        title: this.windowTitle
      });
    }
  }
};
</script>


<style scoped>
.desktop-icon {
  width: 100px;
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
