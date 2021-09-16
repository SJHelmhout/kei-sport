<template>
  <div>
    <b-img center :src="imgWorkout" alt="'Image' + teller"></b-img>
  </div>
</template>

<script>
let teller = 42;

export default {
  name: "WorkoutAndPractisesFrame",
  data: function () {
    return {
      imgWorkout: "https://picsum.photos/125/125/?image=" + teller,
    };
  },
  props: {
    teller: Number,
  },
};
</script>

<style scoped></style>
