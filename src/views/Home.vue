<template>
  <div class="home">
    <movie-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MovieList from '@/components/MovieList.vue';

@Component({
  components: { MovieList }
})
export default class Home extends Vue {

}
</script>
