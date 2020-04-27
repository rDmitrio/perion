<template>
  <div class="movie-list">
    <movie-list-item
      v-for="movie in movies.list"
      :key="movie.imdbID"
      :movie="movie"
      />
    <div style="width: 100%; padding: 70px 0;">
      <button @click="onLoadMoreClick" class="load-more-btn">
      Load more
    </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import MovieListItem from './MovieListItem.vue';

export default Vue.extend({
  name: 'MovieList',
  computed: {
    ...mapGetters({ movies: 'movie/info' })
  },
  data() {
    return {
    };
  },
  async created() {
    if (this.movies.list.length === 0) {
      this.$store.dispatch('movie/loadMovies');
    }
  },
  methods: {
    onLoadMoreClick() {
      this.$store.dispatch('movie/loadMore');
    }
  },
  components: {
    MovieListItem
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movie-list {
  width: 100%;
  max-width: 1030px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;

  .load-more-btn {
    padding: 20px 25px;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid white;
    color: white;
    margin: auto;
    transition: all 0.3s cubic-bezier(0.77,0.2,0.05,1.0);
    font-size: 16px;

    &:hover {
      background-color: white;
      color: #3a3a3a;
    }

    &:focus {
      outline:0;
    }
  }
}
</style>
