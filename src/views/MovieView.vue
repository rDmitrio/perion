<template>
  <div class="movie-view">
    <h1>This is the movie view</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MovieService from '@/services/MovieService';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'MovieView',
  data() {
    return {
      movieId: this.$route.params.movieId,
    };
  },
  computed: {
    ...mapState(['user']),
  },
  async created() {
    console.log();
    MovieService.movieService.getSpecificMovie(this.user.apiToken, this.movieId);
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
