<template>
  <div class="h-screen w-full text-white"></div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  layout: 'default',
  async asyncData({ $config: { baseURL }, $axios }) {
    const posts = await $axios.$get(`${baseURL}/posts`)
    return { posts }
  },
  computed: {
    ...mapState(['counter']),
  },
  methods: {
    ...mapActions(['increment']),
  },
}
</script>
