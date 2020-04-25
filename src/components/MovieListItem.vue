<template>
  <router-link :to="`/movies/${movie.imdbID}`" class="movie-list-item">
    {{ movie.Title }}
  </router-link>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Movie } from '@/services/types';

export default Vue.extend({
  name: 'MovieListItem',
  props: {
    movie: {
      type: Object
    } as PropOptions<Movie>
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movie-list-item {
  width: 200px;
  height: 250px;
  padding: 12px;
  border-radius: 7px;
  margin: 7px;
  cursor: pointer;
  background-color: white;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(33,33,33,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(33,33,33,1);
  box-shadow: 0px 0px 5px 0px rgba(33,33,33,1);
}
</style>
