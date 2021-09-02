<template>
  <div class="message-box" v-if="show">
    {{ message }} is clicked {{ count }} times

    <button @click="increase()">+</button>
    <button @click="close()">Close</button>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props: {
    message: {
      type: String,
      default: "Unknown message",
    },
  },
  data() {
    return {
      show: true,
      count: 0,
    };
  },
  methods: {
    close() {
      this.show = false;
    },
    increase() {
      this.count++;
    },
  },
  watch: {
    count(newValue) {
      if (newValue > 9) {
        this.close();
      }
    },
  },
};
</script>

<style scoped>
.message-box {
  background: #ccc;
  padding: 3rem;
  margin-bottom: 2rem;
  border: 5px solid green;
}
.message-box-red {
  background: red;
}
</style>
