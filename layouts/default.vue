<template>
  <div>

    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
              <li><a href="#modal-full" uk-toggle><span uk-icon="icon: table"></span></a></li>
              <li>
                <a href="/">O guia do desenvolvedor das galáxias
                </a>
              </li>
          </ul>
        </div>

        <div class="uk-navbar-right uk-visible@s" >
          <ul class="uk-navbar-nav">
              <li v-for="category in categories" :key="category.id">
                <router-link :to="{ name: 'categories-id', params: { id: category.id }}" tag="a">{{ category.name }}
                </router-link>
              </li>
          </ul>
        </div>
    </nav>

    <div id="modal-full" class="uk-modal-full" uk-modal>
        <div class="uk-modal-dialog">
            <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
            <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                <span>
                  <div class="uk-background-cover" style="background-image: url('https://images.unsplash.com/photo-1592561199818-6b69d3d1d6e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80 3308w');" uk-height-viewport></div>
                </span>
                <div class="uk-padding-large">
                    <h1 style="font-family: Staatliches;">O guia dev</h1>
                    <div class="uk-width-1-2@s">
                        <ul class="uk-nav-primary uk-nav-parent-icon" uk-nav>
                          <li v-for="category in categories" :key="category.id">
                            <router-link class="uk-modal-close" :to="{ name: 'categories-id', params: { id: category.id }}" tag="a">{{ category.name }}
                            </router-link>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <nuxt />
  </div>
</template>

<script>
import categoriesQuery from '~/apollo/queries/categories.gql'

export default {
  data() {
    return {
      categories: [],
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    },
  },
}

</script>
