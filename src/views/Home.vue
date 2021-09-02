<template>
  <div>
    <h1>Home</h1>
    <div>{{ message }}</div>
    <MessageBox class="message-box-red" message="hoi" />
    <MessageBox message="bla" />
    <MessageBox />
  </div>
</template>

<script>
import MessageBox from "@/components/MessageBox";

export default {
  name: "Home",
  components: { MessageBox },
  props: ["message"],
};
</script>

<style scoped></style>
