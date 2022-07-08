import { data } from 'autoprefixer'
import { defineStore } from 'pinia'

// const payload = {
//   chr_no: ""
//   start: payload.start,
//   end: payload.end
// }

export const useStore = defineStore('labData', {
  state: () => ({
    labList: []
  }),
  getters: {
  },
  actions: {
    async getLabList () {
      await fetch('http://10.66.16.187:3000/api/ipd.list')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.labList = data
        }).catch(error => {
          console.log(error)
        })
      // this.labList = (
      //   await $api.lab.list({
      //     start: '',
      //     end: ''
      //   })
      // ).data
    }
  }
})
