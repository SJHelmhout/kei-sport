<template>
  <div>
    <b-img
      center
      src="https://picsum.photos/125/125/?image=58"
      alt="Center image"
    ></b-img>
  </div>
</template>

<script>
let imgWorkout = "https://picsum.photos/125/125/?image=58";

export default {
  name: "WorkoutAndPractisesFrame",
  props: {
    nameWorkout: [],
    imageWorkout: [imgWorkout],
    namePractises: [],
    imagePractises: [],
  },
};
</script>

<style scoped></style>
