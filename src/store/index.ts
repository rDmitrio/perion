import Vue from 'vue';
import Vuex from 'vuex';
import movie from '@/store/modules/movie';
import user from '@/store/modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movie,
    user
  }
});
