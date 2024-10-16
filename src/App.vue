<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Froala from './components/Froala.vue'

export default {
  components: {},
}
</script>

<template>
  <div class="">
    <img
      alt="Vue logo"
      class="block mx-auto my-8"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <Froala></Froala>
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
