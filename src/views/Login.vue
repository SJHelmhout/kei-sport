<template>
  <b-container class="py-5">
    <div class="mb-3">
      <b-form-input v-model="text" placeholder="inlogcode"></b-form-input>
      <div class="mt-2">Inlogcode: {{ text }}</div>
    </div>
    <div class="mb-3">
      <input
        type="text"
        name="sessiecode"
        v-model="input.sessiecode"
        placeholder="sessiecode"
      />
    </div>
    <b-btn @click="login()" class="mb-3">Inloggen</b-btn>
  </b-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        inlogcode: "",
        sessiecode: "",
      },
    };
  },
  methods: {
    login() {
      console.log(
        "inlocode = " +
          this.input.inlogcode +
          " sessiecode " +
          this.input.sessiecode
      );
      this.input.inlogcode = "";
      this.input.sessiecode = "";
    },
  },
};
</script>

<style scoped></style>
