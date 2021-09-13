<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card footer="footer" style="width: max-content">
          <WorkoutAndPractisesFrame />
        </b-card>
      </b-col>
      <b-col>
        <b-card footer="footer" style="width: max-content">
          <WorkoutAndPractisesFrame />
        </b-card>
      </b-col>
      <b-col cols="1"></b-col>
      <b-col>
        <b-card footer="footer" style="width: max-content">
          <WorkoutAndPractisesFrame />
        </b-card>
      </b-col>
      <b-col>
        <b-card footer="footer" style="width: max-content">
          <WorkoutAndPractisesFrame />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import WorkoutAndPractisesFrame from "@/components/WorkoutsAndPractisesFrame";

export default {
  name: "WorkoutsAndPractises",
  components: { WorkoutAndPractisesFrame },
};
</script>

<style scoped></style>
