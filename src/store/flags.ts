import { Module, ActionContext, createNamespacedHelpers } from 'vuex'
import { FlagsState, RootState } from './types'

export const flagsNamespacedHelper = createNamespacedHelpers('flags')

export const flags: Module<FlagsState, RootState> = {
  namespaced: true,
  state: {
    overlay: false
  },
  mutations: {
    setOverlay(state: FlagsState, value: boolean): void {
      state.overlay = value
    }
  },
  getters: {
    overlay(state: FlagsState): boolean {
      return state.overlay
    }
  },
  actions: {
    setOverlay(
      { commit }: ActionContext<FlagsState, RootState>,
      value: boolean
    ) {
      commit('setOverlay', value)
    }
  }
}
