<template>
  <header class=" p-3 flex items-center justify-between">
      <div class="flex items-center">
          <button class="p-3 hover:bg-light rounded-full flex items-center justify-center" type="button" name="button">
              <img src="../assets/images/logo.png" alt="" class=" h-6 w-6">
          </button>
          <button v-for="(item, i) in tabItems" :key="i" @click="selectedTab = item.key" :class="`${selectedTab === item.key ? 'bg-gray-600 text-white' : 'text-gray-600 hover:bg-white'} rounded-full py-3 px-4 font-semibold`" type="button" name="button">
            {{ item.name }}
        </button>
      </div>
      <div class=" relative flex-grow">
          <span class="material-icons absolute pt-3 pl-3 text-muted">search</span>
          <input type="text" name="" id="" class="py-3 pr-3 pl-10 rounded-full bg-gray-300 w-full text-muted hover:bg-gray-200">
      </div>
      <div class=" flex items-center">
          <button type="button" name="button" class=" flex items-center justify-center p-3 rounded-full hover:bg-gray-300">
              <span class="material-icons text-3xl text-muted relative">notifications</span>
              <span class=" absolute bg-red-600 text-white h-5 w-5 rounded-full flex items-center justify-center mb-7 ml-5">5</span>
          </button>
          <button type="button" name="button" class=" flex items-center justify-center p-3 rounded-full hover:bg-gray-300">
              <span class="material-icons text-3xl text-muted relative">textsms</span>
              <span class=" absolute bg-red-600 text-white h-5 w-5 rounded-full flex items-center justify-center mb-7 ml-5">2</span>
          </button>
          <button type="button" name="button" class=" flex items-center justify-center p-3 rounded-full hover:bg-gray-300">
              <div class=" w-6 h-6 bg-cover bg-center rounded-full" style=" background-image:url('../assets/images/arif.jpg')"></div>
          </button>
          <button type="button" name="button" class="w-6 h-6 flex items-center justify-center p-3 rounded-full hover:bg-gray-300">
              <span class="material-icons text-muted">expand_more</span>
          </button>
      </div>
  </header>
</template>

<script>
export default {
    name: 'TopNav',
    data(){
        return{
            tabItems:[
                {name:'Home', key:'home'},
                {name:'Today', key:'today'}
            ],
            selectedTab: 'home'
        }
    }
}
</script>

<style>

</style>