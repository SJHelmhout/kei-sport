<template>
  <div class="flex-container">
    <span class="flex-item">
      <input
        type="text"
        name="username"
        v-model="input.inlogcode"
        placeholder="inlogcode"
      />
    </span>
    <span class="flex-item">
      <input
        type="text"
        name="sessiecode"
        v-model="input.sessiecode"
        placeholder="sessiecode"
      />
    </span>
    <span class="flex-item">
      <button type="button" v-on:click="login()">OK</button>
    </span>
  </div>
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

<style scoped>
.flex-container {
  display: flex;
  text-align: center;
  flex-flow: column;
}

.flex-item {
  padding-top: 1rem;
}
</style>
