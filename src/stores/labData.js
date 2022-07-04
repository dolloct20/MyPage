import { defineStore } from 'pinia'

export const useCounterStore = defineStore('labData', {
  state: () => {
     labList = []
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    getLabList() {
        this.labList = (
            await $api.lab.list({
              chr_no,
              start,
              end
            })
        ).data
    }
  },
})