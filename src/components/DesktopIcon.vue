<template>
  <div class="desktop-icon" @click="openWindow">
    <img :src="icon.image" alt="Icon" />
    <span>{{ icon.name }}</span>
  </div>
</template>

<script>
export default {
  name: "DesktopIcon",
  props: {
    icon: Object,
  },
  methods: {
    openWindow() {
      this.$emit("openWindow", this.icon.id);
    },
  },
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
