<template>
  <div>
    <div
      v-if="article.data.attributes.image"
      id="banner"
      class="
        uk-height-small
        uk-flex
        uk-flex-center
        uk-flex-middle
        uk-background-cover
        uk-light
        uk-padding
      "
      style="max-height: 50vh;"
      :data-src="api_url + article.data.attributes.image.data.attributes.url"
      uk-img
    >
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <div v-if="article.data.attributes.content" id="editor" v-html="$md.render(article.data.attributes.content)"></div>
        <p v-if="article.data.attributes.published">
          {{ moment(article.data.attributes.published).format("MMM Do YY") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import articleQuery from "~/apollo/queries/article";
var moment = require("moment");

export default {
  data() {
    return {
      article: {},
      moment: moment,
      api_url: process.env.strapiBaseUri,
    };
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
};
</script>
