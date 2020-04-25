import { Movie } from '@/services/types';
import MovieService from '@/services/MovieService';

export default {
  namespaced: true,

  state: {
    list: [] as Movie[],
    currentPage: 1
  },

  mutations: {
    LOAD_MOVIES(state, { movies }) {
      state.list.push(...movies);
    },

    NEXT_PAGE(state) {
      state.currentPage++;
    }
  },

  actions: {
    async loadMovies({ commit, state, rootState }) {
      const response = await MovieService.movieService
        .getMovieList(rootState.user.apiToken, state.currentPage);

      commit('LOAD_MOVIES', { movies: response.result });
    },

    loadMore({ commit, dispatch }) {
      commit('NEXT_PAGE');
      dispatch('loadMovies');
    }
  },

  getters: {
    info: (state) => ({
      list: state.list,
      currentPage: state.currentPage
    })
  }
};
