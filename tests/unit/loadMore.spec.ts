import { shallowMount, createLocalVue  } from '@vue/test-utils';
import Vuex from 'vuex'
import MovieList from '@/components/MovieList.vue'
import movie from '@/store/modules/movie'

const localVue = createLocalVue();

localVue.use(Vuex)


describe('MovieList.vue', () => {
  let store;

  // clean store before each test
  beforeEach(() => {
    movie.actions.loadMore = jest.fn(); // mock function

    store = new Vuex.Store({
      modules: {
        movie
      }
    })
  })

  it('calls "loadMore" action on "Load more" button click',  () => {
    const wrapper = shallowMount(MovieList, { store, localVue });
    const loadMoreBtn = wrapper.find('button.load-more-btn');

    loadMoreBtn.trigger('click');

    expect(movie.actions.loadMore).toHaveBeenCalled()
  })
});


describe('movie.ts', () => {
  it('increases "currentPage" state value to 1', () => {
    const state = {
      currentPage: 1
    }

    movie.mutations.NEXT_PAGE(state);

    expect(state.currentPage).toBe(2)
  })
});


