<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-custom-200 p-10">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <h3 class="transform transition duration-500 hover:translate-x-20">
          Damilare
        </h3>
      </div>
      <div class="block md:mx-6">
        <button
          class="flex items-right rounded focus:outline-none flex-col"
          @click="setOpen"
        >
          <div
            class="w-12 line-btn"
            :class="isOpen ? 'rotate-45 mt-3' : 'rotate-0'"
          ></div>
          <div
            class="w-6 mt-3 line-btn"
            :class="isOpen ? '-rotate-45 w-12 -mt-3' : 'rotate-0 w-6'"
          ></div>
        </button>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['isOpen']),
  },
  methods: {
    ...mapMutations({
      setOpen: 'setOpen',
    }),
  },
}
</script>
