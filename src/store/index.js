import Vuex from 'vuex'
import Vue from 'vue'

import axios from 'axios'


Vue.use(Vuex)
export default new Vuex.Store({

  state:{
    userData:[]
  },

  getters: {
    userCount(state,getters){
      return state.userData
    }
  },

  actions: {
    fetchUsers({ commit }) {
      new Promise(function(resolve, reject) {
        axios.get('https://randomuser.me/api/?results=50')
        .then(res => {
          commit('setUsers',res.data.results)
          console.log(res.data.results)

          resolve()
        })
      });
    },

  },

  mutations: {
    setUsers (state, usersPload){
      state.userData = usersPload;
      // console.log(state.userData,'==>STATE.USERDATA');
      // console.log(usersPload,'==>PAYLOAD');
    }
  }

})
