<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="card">
      <h2>Google Chart</h2>



      <GoogleChart></GoogleChart>

    </div>
  </div>
</template>

<script>
import GoogleChart from './GoogleChart.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    GoogleChart
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  display: grid;
  place-content: center;

  width: 90%;
  max-width: 900px;
  border-radius: 5px;
  border: 3px dashed maroon;

  margin: 2rem 0;
  padding: 1rem 2rem;
}

.filtri {
  padding: 2rem 0;
}
</style>
