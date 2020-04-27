<template>
  <router-link :to="`/movies/${movie.imdbID}`" class="movie-list-item">
    <img :src="movie.Poster">
    <div class="movie-item-wrapper">
      {{ movie.Title }}
    </div>
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
  width: 240px;
  height: auto;
  border-radius: 7px;
  margin: 7px;
  cursor: pointer;
  background-color: #747474;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(33,33,33,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(33,33,33,1);
  box-shadow: 0px 0px 5px 0px rgba(33,33,33,1);
  text-decoration: none;
  color: white;

  img {
    width: 100%;
    height: 300px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .movie-item-wrapper {
    width: calc(100% - 20px);
    padding: 15px 10px;
  }
}
</style>
