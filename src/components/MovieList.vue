<template>
  <div class="hello">
    <MovieListItem
      v-for="movie in movies"
      :key="movie.imdbID"
      :movie="movie"
      />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MovieService from '@/services/MovieService';
import { mapState } from 'vuex';
import MovieListItem from './MovieListItem.vue';
import { Movie } from '../services/types';

export default Vue.extend({
  name: 'MovieList',
  data() {
    return {
      movies: [] as Movie[],
    };
  },
  computed: {
    ...mapState(['user']),
  },
  async created() {
    await this.loadMovies();
  },
  methods: {
    async loadMovies() {
      const result = await MovieService.movieService.getMovieList(this.user.apiToken);
      this.movies = result.result;
    },
  },
  components: {
    MovieListItem,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
