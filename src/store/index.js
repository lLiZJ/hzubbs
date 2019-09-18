import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        msg: 'Vuex 测试',
        count: 1
    },
    getters: {
        getStateCount(state) {
            return state.count + 1;
        }
    },
    mutations: {
        add(state, n) {
            state.count = state.count + n;
        },
        dec(state, n) {
            state.count = state.count - n;
        }
    },
    actions: {
        increase(context, n) {
            context.commit("add", n);
        },
        decrease(context, n) {
            context.commit("dec", n);
        }
    },
    modules: {
        user
    }
})

export default store