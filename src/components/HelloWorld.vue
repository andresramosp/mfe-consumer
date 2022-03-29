<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>[ClientApi 1, ClientApi 2, Style Guide]</h4>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  color: gray;
    font-size: 16px;
    margin: 15px;
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
</style>