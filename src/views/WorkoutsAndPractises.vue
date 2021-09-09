<template>
  <div>
    <div class="row">
      <div class="col">This is the WorkoutsAndPractises page</div>
    </div>

    <div class="row">
      <div class="col2">workouts</div>
      <div class="col2">oefeningen</div>
    </div>

    <div class="row">
      <div class="col3" v-on:click="sometext()">workout 1</div>
      <div class="col3">workout 2</div>
      <div class="col3">oefening 1</div>
      <div class="col3">oefening 2</div>
    </div>
    <div class="row">
      <div class="col3">workout 3</div>
      <div class="col3">workout 4</div>
      <div class="col3">oefening 3</div>
      <div class="col3">oefening 4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkoutsAndPractises",
  methods: {
    alert() {},
  },
};
</script>

<style scoped>
.row {
  display: flex;
}
.col {
  flex: 1;
}
.col2 {
  flex: 1;
  padding: 20px 0 10px 0;
}
.col3 {
  flex: 1;
  border: 2px solid black;
  padding: 40px;

  background-color: #cccccc;
}
</style>
