<template>
  <div @mouseover="hover = true" @mouseleave="hover = flase" class=" relative">
    <img :src="'../assets/images/'+src" alt="">
    <div v-if="hover" class=" absolute bg-gray-500 opacity-50 inset-0 w-full h-full rounded-lg"></div>
    <div v-if="hover" class=" absolute w-full h-full top-0 flex flex-col justify-between p-3">
      <div class=" flex items-center justify-between">
        <button type="button" name="button" class=" flex items-center">
          <p class=" font-semibold text-white">{{ board }}</p>
          <span class="material-icons text-white">expand_more</span>
        </button>
        <button type="button" name="button" class=" bg-red-500 rounded-full py-3 px-5 text-white font-semibold">Save</button>
      </div>
      <div class="flex items-center w-full">
        <button type="button" name="button" class="bg-white rounded-full ml-auto mr-2 w-8 h-8 flex items-center text-sm justify-center text-gray-700 opacity-75 hover:opacity-100"><span class="material-icons text-base">ios_share</span></button>
        <button type="button" name="button" class=" bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center opacity-75 hover:opacity-100">
           <span class="material-icons text-base">more_horiz</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['src', 'board'],
    data(){
      return{
        hover: false
      }
    }
}
</script>

<style>

</style>