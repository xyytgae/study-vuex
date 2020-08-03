import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter.js'
import doubleCounter from './modules/doubleCounter.js'
import totalCounter from './modules/totalCounter.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counterA: counter,
    counterB: counter,
    doubleCounterA: doubleCounter,
    doubleCounterB: doubleCounter,
    totalCounter
  }
})

store.dispatch('totalCounter/setModules',['counterA', 'counterB', 'doubleCounterA', 'doubleCounterB'])

/* eslint-disable no-unused-vars */

store.watch(
  (state, getters) => state['counterA'].count,
  (newVal, oldVal) => {
    console.log(`counterA.count changed! ${oldVal} => ${newVal}`);
  }
)

store.watch(
  (state, getters) => getters['counterB/count'],
  (newVal, oldVal) => {
    console.log(`counterB.count changed! ${oldVal} => ${newVal}`);
  }
)

store.subscribe((mutation, state) => {
  if (mutation.type === 'doubleCounterA/increment') {
    console.log('doubleCounterA/increment committed!');
  }
})

store.subscribeAction((action, state) => {
  if (action.type === 'doubleCounterB/increment') {
    console.log('doubleCounterB/increment dispatched!');
  }
})

export default store
