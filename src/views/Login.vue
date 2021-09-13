<template>
  <b-container class="py-5">
    <div class="mb-3">
      <div class="mt-2">Inlogcode: {{ inlogcode }}</div>
      <b-form-input
        type="text"
        v-model="inlogcode"
        placeholder="inlogcode"
      ></b-form-input>
    </div>
    <div class="mb-3">
      <div class="mt-2">Sessiecode: {{ sessiecode }}</div>
      <b-form-input
        type="text"
        v-model="sessiecode"
        placeholder="sessiecode"
      ></b-form-input>
    </div>
    <b-btn @click="login()" class="mb-3">Inloggen</b-btn>
  </b-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      inlogcode: "",
      sessiecode: "",
    };
  },
  methods: {
    login() {
      console.log(
        "inlogcode: " + this.inlogcode + " sessiecode: " + this.sessiecode
      );
      this.inlogcode = "";
      this.sessiecode = "";
    },
  },
};
</script>

<style scoped></style>
