<template>
  <div class="desktop-icon" @click="handleClick">
    <img :src="icon.image" alt="icon" class="icon-image" />
    <p class="icon-label">{{ icon.name }}</p>
  </div>
</template>

<script>
export default {
  name: "DesktopIcon",
  props: {
    icon: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("icon-clicked", this.icon.id);
    },
  },
};
</script>

<style>
.desktop-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100px;
  margin: 10px;
}

.icon-image {
  width: 64px;
  height: 64px;
}

.icon-label {
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
}
</style>
