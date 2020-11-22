<template>
  <div class="h-screen w-full text-white"></div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  layout: 'default',
  computed: {
    ...mapState(['counter']),
  },
  methods: {
    ...mapActions(['increment']),
  },
}
</script>
