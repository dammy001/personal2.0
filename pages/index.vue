<template>
  <div
    class="flex flex-col h-screen items-center pt-20 text-white px-8 animated fadeIn delay-300"
  >
    <img src="@/assets/images/icon.png" class="w-56 h-56" />
    <!-- <h1 class="text-5xl md:text-7xl">{{ fullname }}</h1> -->
    <div class="button" @click="click = !click">
      <div
        class="h-12 w-12 rounded-full mt-2 ml-2 mr-2 items-start transform transition duration-500 delay-300 bg-custom-100"
        :class="click ? 'translate-x-24' : '-translate-x-24'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  layout(context) {
    return 'default'
  },
  data() {
    return {
      click: false,
    }
  },
}
</script>
