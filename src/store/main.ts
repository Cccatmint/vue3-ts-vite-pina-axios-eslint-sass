import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id, 此处自定义为main
const useMainStore = defineStore('main', {
    // other options...
    state: () => {
        return {
            counter: 0,
            name: 'Cccatmint',
            isAdmin: false
        }
    },
    getters: {
        nameLength: (state) => state.name.length
    },
    actions: {
        // action 可以是异步的
        increment() {
            this.counter++
        }
    }
  })

  export {useMainStore}