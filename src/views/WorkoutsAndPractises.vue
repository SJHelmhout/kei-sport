<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card header="header" footer="footer">
          <b-card-title>Title</b-card-title>
          <b-card-sub-title>Subtitle</b-card-sub-title>
          <b-card-text>Tekst</b-card-text>
          <b-btn variant="primary">Hoi</b-btn>
          <b-btn variant="danger">sfdsdfs</b-btn>
        </b-card>
      </b-col>
      <b-col> 2 </b-col>
      <b-col> 3 </b-col>
    </b-row>
    <div class="row">
      <div class="col">This is the WorkoutsAndPractises page</div>
    </div>

    <div>
      <div>workouts</div>
      <div>oefeningen</div>
    </div>

    <div>
      <div>
        <WorkoutsAndPractisesFrame />
        <WorkoutsAndPractisesFrame />
        <WorkoutsAndPractisesFrame />
        <WorkoutsAndPractisesFrame />
      </div>
    </div>
  </b-container>
</template>

<script>
import WorkoutsAndPractisesFrame from "@/components/WorkoutsAndPractisesFrame";

export default {
  name: "WorkoutsAndPractises",
  components: { WorkoutsAndPractisesFrame },
};
</script>

<style scoped></style>
