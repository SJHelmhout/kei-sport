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
      <table class="workouts">
        <tr>
          <td><WorkoutsAndPractisesFrame /></td>
          <td><WorkoutsAndPractisesFrame /></td>
        </tr>
        <tr>
          <td><WorkoutsAndPractisesFrame /></td>
          <td><WorkoutsAndPractisesFrame /></td>
        </tr>
        <tr>
          <td><WorkoutsAndPractisesFrame /></td>
        </tr>
      </table>
      <table class="practises">
        <tr>
          <td><WorkoutsAndPractisesFrame /></td>
          <td><WorkoutsAndPractisesFrame /></td>
        </tr>
        <tr>
          <td><WorkoutsAndPractisesFrame /></td>
          <td><WorkoutsAndPractisesFrame /></td>
        </tr>
      </table>
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
  justify-content: center;
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
table {
  width: 100%;
  border-spacing: 2rem;
}
.workouts {
  background-color: aliceblue;
}
.practises {
  background-color: aqua;
}
</style>
