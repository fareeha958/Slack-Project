import Vue from 'vue';
import Vuex from 'vuex';
import channels from 'channels';
import room from 'room';
import messages from 'messages';
import user from 'user';

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {

    },
    modules: {
        channels,
        room,
        messages,
        user
    },
});