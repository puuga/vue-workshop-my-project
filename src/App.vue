<template>
  <div id="app">
    <h1>{{ text }}</h1>
    <h1>{{ number + 4 }}</h1>
    <h1>{{ list.join(',') }}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      text: 'Hello Puuga',
      number: 10,
      list: ['a', 'b', 'c']
    }
  }
}
</script>

<style>

</style>
