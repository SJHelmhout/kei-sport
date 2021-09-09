<template>
  <b-container class="py-5">
    <div class="p-3 bg-white mb-3">
      <div class="bg-primary p-3 mb-3">block</div>
      <div class="bg-secondary p-3 mb-3">block</div>
      <div class="bg-info p-3">inline</div>
      <div class="bg-dark text-light">Inline</div>
    </div>
    <a href="#" class="mr-2"> hoi </a>
    <a href="#" class="mr-2"> hoi </a>

    <b-row class="mb-3">
      <b-col cols="6" lg="2"><b-btn block>1</b-btn></b-col>
      <b-col cols="6" lg="2"><b-btn block>2</b-btn></b-col>
      <b-col cols="4" lg="2"><b-btn block>3</b-btn></b-col>
      <b-col cols="4" lg="2"><b-btn block>3</b-btn></b-col>
      <b-col cols="4" lg="2"><b-btn block>3</b-btn></b-col>
    </b-row>

    <div class="p-3 bg-warning">
      <div class="bg-white d-flex align-items-center">
        <div>hoi</div>
        <h3 class="bg-info mb-0">hoi</h3>
        <h6 class="bg-info mb-0">hoi</h6>
        <b-btn>hoi</b-btn>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "VoorbeeldStylingMetBootstrap",
};
</script>

<style scoped></style>
