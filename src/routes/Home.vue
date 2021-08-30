<template>
  <HeadLine />
  <Search />
  <MovieLisst />
</template>

<script>
import HeadLine from '~/components/HeadLine.vue'
import Search from '~/components/Search.vue'
import MovieList from '~/components/MovieList'


export default {
  components: {
    HeadLine,
    Search,
    MovieList
  }
}
</script>