// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { countPage: 0 }
  },
  // 也可以这样定义
  state: () => ({ countPage: '' })
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
})