<template>
  <div
    class="flex flex-col h-screen items-center pt-20 text-white px-8 animated fadeIn delay-300"
  >
    <img src="@/assets/images/icon.png" class="w-56 h-56" />
    <h1 class="text-5xl md:text-7xl">{{ fullname }}</h1>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>
