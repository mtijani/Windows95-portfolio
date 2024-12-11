<template>
  <div class="desktop-icon" @dblclick="openWindow">
    <img :src="icon.image" alt="Icon" />
    <p>{{ icon.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'DesktopIcon',
  props: {
    icon: Object,
  },
  methods: {
    openWindow() {
      this.$emit('openWindow', this.icon.id);
    },
  },
};
</script>

<style scoped>
.desktop-icon {
  display: inline-block;
  text-align: center;
  margin: 10px;
  cursor: pointer;
}
img {
  width: 48px;
  height: 48px;
}
p {
  margin: 5px 0 0;
  font-size: 12px;
}
</style>