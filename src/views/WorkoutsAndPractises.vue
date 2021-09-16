<template>
  <b-container class="bg-info" fluid="lg" variant="overflows: auto">
    <b-row no-gutters>
      <b-col class="my-2">
        <b-card footer="footer" style="width: max-content">
          <WorkoutAndPractisesFrame />
        </b-card>
      </b-col>
      <b-col class="my-2">
        <b-card footer="footer" style="width: max-content">
          <WorkoutAndPractisesFrame />
        </b-card>
      </b-col>
      <b-col class="my-2" cols="1"></b-col>
      <b-col class="my-2">
        <b-card footer="footer" style="width: max-content">
          <WorkoutAndPractisesFrame />
        </b-card>
      </b-col>
      <b-col class="my-2">
        <b-card footer="footer" style="width: max-content">
          <WorkoutAndPractisesFrame />
        </b-card>
      </b-col>
      <b-col class="my-2">
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
