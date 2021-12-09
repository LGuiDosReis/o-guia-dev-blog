<template>
  <div>
    <div class="uk-section" style="padding-top: 0px">
      <div class="uk-container uk-container-large">
        <h1>O guia dev</h1>

        <Articles v-if='articles.data' :articles="articles.data"></Articles>

      </div>
    </div>

  </div>
</template>

<script>
import articlesQuery from '~/apollo/queries/articles'
import Articles from '~/components/Articles'

export default {
  data() {
    return {
      articles: [],
    }
  },
  components: {
    Articles
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>