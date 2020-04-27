<template>
  <div class="movie-view">
    <div class="back-btn-wrapper">
        <button class="back-btn" @click="$router.go(-1)">Back</button>
      </div>
    <div class="wraper">
      <div class="column">
        <img :src="movie.Poster">
      </div>
      <div class="column description">
        <h1>{{ movie.Title }}</h1>
        <div class="description-item">
          <h4>Type</h4>
          <span>{{ movie.Type }}</span>
        </div>
        <div class="description-item">
          <h4>Genre</h4>
          <span>{{ movie.Genre }}</span>
        </div>
        <div class="description-item">
          <h4>Production</h4>
          <span>{{ movie.Production }}</span>
        </div>
        <div class="description-item">
          <h4>Language</h4>
          <span>{{ movie.Language }}</span>
        </div>
        <div class="description-item">
          <h4>Runtime</h4>
          <span>{{ movie.Runtime }}</span>
        </div>
        <div class="description-item">
          <h4>Year</h4>
          <span>{{ movie.Year }}</span>
        </div>
        <div class="description-item">
          <h4>Plot</h4>
          <span>{{ movie.Plot }}</span>
        </div>
      </div>
    </div>
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
      movie: {}
    };
  },
  computed: {
    ...mapState(['user'])
  },
  async created() {
    this.movie = await MovieService.movieService
      .getSpecificMovie(this.user.apiToken, this.movieId);
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movie-view {
  width: 100vw;
  color: white;

  .back-btn-wrapper {
    width: calc(100% - 100px);
    text-align: left;
    padding: 50px 50px;
  }

  .back-btn {
    cursor: pointer;
    background-color: transparent;
    border: 2px solid white;
    color: white;
    padding: 10px 20px;
    border-radius: 7px;
    transition: all 0.3s cubic-bezier(0.77,0.2,0.05,1.0);

    &:hover {
      background-color: white;
      color: #3a3a3a;
    }

    &:focus {
      outline:0;
    }
  }

  .wraper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .column {
      width: calc(50% - 30px);
      padding: 0 15px;
    }

    .description {
      text-align: left;

      h1 {
       margin-top: 0;
      }

      .description-item {
        h4 {
          margin-bottom: 7px;
        }
      }
    }
  }
}
</style>
