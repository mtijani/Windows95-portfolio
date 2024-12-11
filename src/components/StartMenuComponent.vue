<template>
  <div v-if="isOpen" class="start-menu">
    <ul>
      <li v-for="item in menuItems" :key="item.name" @click="item.action">
        <img :src="item.image" alt="Menu icon" />
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StartMenu',
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      menuItems: [
        { name: 'My Documents', image: require('@/assets/folder.png'), action: () => this.$emit('openWindow', 1) },
        { name: 'Control Panel', image: require('@/assets/photos.png'), action: () => this.$emit('openWindow', 2) },
        { name: 'Shut Down', image: require('@/assets/logo.png'), action: this.shutDown },
      ],
    };
  },
  methods: {
    shutDown() {
      alert('Shutting down...');
    },
  },
};
</script>

<style scoped>
.start-menu {
  position: absolute;
  bottom: 40px;
  left: 0;
  background: #fff;
  border: 1px solid #000;
  width: 200px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}
img {
  margin-right: 10px;
  width: 20px;
  height: 20px;
}
li:hover {
  background: #ddd;
}
</style>