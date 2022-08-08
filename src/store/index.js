import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        notes: [
            {
                title: "First Note",
                descr: "Description for first note",
                priority: "standart",
                date: new Date(Date.now()).toLocaleString(),
            },
            {
                title: "Second Note",
                descr: "Description for second note",
                priority: "important",
                date: new Date(Date.now()).toLocaleString(),
            },
            {
                title: "Third Note",
                descr: "Description for third note",
                priority: "very-important",
                date: new Date(Date.now()).toLocaleString(),
            },
        ],
    },

    getters: {

    },

    mutations: {

    },

    actions: {

    },
});