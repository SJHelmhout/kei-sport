<template>
  <span class="flex-container">
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
      <input type="button" v-on:click="login()" value="OK" />
    </span>
  </span>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ddd;
}

.flex-item input {
  width: 35rem;
  height: 2rem;
  border: 1px solid black;
  border-radius: 10px;
}

.flex-item input[type="text"] {
  padding-left: 1rem;
}

.flex-item input[type="button"] {
  margin-top: 1rem;
}
</style>
