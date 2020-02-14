import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { flags } from './flags'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: ''
  },
  modules: {
    flags
  }
}

export default new Vuex.Store<RootState>(store)
