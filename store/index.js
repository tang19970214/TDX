import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    explanationNote: {},
    formInfo: {
      "userNo": "",
      "a1": "",
      "a2": 0,
      "a3": 0,
      "a4": "",
      "a5": "",
      "a6": "",
      "b11": "",
      "b12": "",
      "b13": "",
      "b14": "",
      "b21": "",
      "b22": "",
      "b23": "",
      "b24": "",
      "b25": "",
      "cA11": 0,
      "cA12": 0,
      "cA13": 0,
      "cA21": 0,
      "cA22": 0,
      "cA23": 0,
      "cB11": 0,
      "cB12": 0,
      "cB21": 0,
      "cB22": 0,
      "cC11": 0,
      "cC12": 0,
      "cC13": 0,
      "cC21": 0,
      "cC22": 0,
      "cC23": 0,
      "d1": "",
      "d2": "",
      "d3": "",
      "d4": "",
      "d5": "",
      "d6": "",
      "d7": "",
      "d8": "",
      "d9": "",
      "d10": "",
      "d11": "",
      "e1": "",
      "e2": "",
      "e3": "",
      "e4": "",
      "e5": "",
      "e6": "",
    }
  },
  mutations: {
    GETEXPLANATIONNOTE(state, payload) {
      state.explanationNote = payload;
    },
    GETFORMINFO(state, payload) {
      state.formInfo = payload;
    },
  },
  actions: {
    setExplanationNote(state, payload) {
      state.commit("GETEXPLANATIONNOTE", payload)
    },
    setFormInfo(state, payload) {
      state.commit("GETFORMINFO", payload)
    }
  }
})

export default store
