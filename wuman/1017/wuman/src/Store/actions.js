export default {
    add ({commit}, num) {
        commit('ADD', num);
    },
    cut ({commit}) {
        commit('CUT');
    },
    updataUserName ({commit}, username) {
        commit('UPDATAUSERNAME', username);
    }
};
