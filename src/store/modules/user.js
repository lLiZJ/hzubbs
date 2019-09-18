
export default {
    state: {
        userMsg: "user.js"
    },
    getters: {
        userMsgAppend(state) {
            return state.userMsg + ".css";
        }
    },
    mutations: {
        show(state) {
            alert("这是 user.js 的 mutations");
        }
    },
    actions: {
        show(context) {
            alert("这是 user.js 的 actions");
        }
    }
}