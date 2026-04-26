<script setup>
</script>



<template>
  <div class="bg-black z-0 ">
 <div class="relative  max-w-auto max-h-300 flex container w-full text-white mx-auto">
  <div class=" md:w-1/2   flex sm:w-screen flex-col gap-5 justify-center mb-4 p-3 mx-auto">
    <h1 class="text-[60px] font-bold"> QDumy</h1>
    <p class="text-4xl "> The Best Place For The Best <span class="underline text-green-400">Career</span>.</p>
    <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed placerat elementum. Urna eu et purus et mi sit rhoncus. Id nisl quis arcu nulla.</p>
    <div>
      <RouterLink to="/course/search">
    <button class="bg-green-500 p-5 font-semibold border-black text-xl w-auto cursor-pointer
    hover:bg-white hover:text-green-500 hover:p-5
     hover:border-green-500  transition duration-300  rounded-full"> Get a Course now!</button>
    </RouterLink>
    </div>


  </div>
  <div class="mx-auto">
  <img src="/images/students/banner-img.png" class="w-full  hidden h-200 mt-18 lg:block md:block p-3  object-cover " />
  </div>
  
</div>
</div>
</template>
<style>

</style>