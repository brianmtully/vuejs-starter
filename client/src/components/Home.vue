<template>
  <div class="home">
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      routes: [],
      error: ''
    }
  },
  async created () {
    try {
    } catch (error) {
      this.error = error.message
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
