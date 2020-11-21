<template>
  <div class="h-screen text-white w-full">
    <div class="text-center text-2xl animated slideInLeft">
      Software Engineer
    </div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1>Nuxt Mountains</h1>
      <ul>
        <li v-for="mountain of mountains" :key="mountain.id">
          {{ mountain.title }}
        </li>
      </ul>
      <button @click="$fetch">Refresh</button>
    </div>
  </div>
</template>
<script>
export default {
  async fetch() {
    this.mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then((res) => res.json())
  },
  data() {
    return {
      mountains: [],
    }
  },
  watch: {
    '$route.query': '$fetch',
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 10000) {
      this.$fetch()
    }
  },
  head: {
    title: 'About Page',
    meta: [
      {
        hid: 'about',
        name: 'about',
        content: 'About Page',
      },
    ],
  },
}
</script>
