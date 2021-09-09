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
      <div class="col3"><WorkoutsAndPractisesFrame /></div>
      <div class="col3"><WorkoutsAndPractisesFrame /></div>
      <div class="col3"><WorkoutsAndPractisesFrame /></div>
      <div class="col3"><WorkoutsAndPractisesFrame /></div>
    </div>

    <div class="row" style="background-color: #ffffff">
      <div class="col3"><WorkoutsAndPractisesFrame /></div>
      <div class="col3"><WorkoutsAndPractisesFrame /></div>
    </div>
  </div>
</template>

<script>
import WorkoutsAndPractisesFrame from "@/components/WorkoutsAndPractisesFrame";

export default {
  name: "WorkoutsAndPractises",
  components: { WorkoutsAndPractisesFrame },
};
</script>

<style scoped>
.row {
  display: flex;
}
.col {
  flex: 1;

  background-color: #42b983;
}
.col2 {
  flex: 1;
  padding: 20px 0 10px 0;

  background-color: mediumvioletred;
}
.col3 {
  float: left;
  width: 50%;
  padding: 20px;
}
</style>
