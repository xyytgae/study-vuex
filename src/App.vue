<template>
  <div id="app">
    <!-- <Counter />
    <DoubleCounter /> -->
    <Counter module="counterA"/>
    <Counter module="counterB"/>
    <DoubleCounter module="doubleCounterA"/>
    <DoubleCounter module="doubleCounterB"/>
    <TotalCounter />
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import DoubleCounter from './components/DoubleCounter.vue'
import TotalCounter from './components/TotalCounter'

export default {
  name: 'App',
  components: {
    Counter,
    DoubleCounter,
    TotalCounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
