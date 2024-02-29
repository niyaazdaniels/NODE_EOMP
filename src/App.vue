<template>
  
  <main class="container-fluid">
    
   <Navbar></Navbar>
   <Footer></Footer>
  
   <router-view/>
 </main>

</template> 
<script>
import Navbar from './components/NavBar.vue';
import Footer from './components/Footer.vue';


export default{
  components:{
    Navbar,
    Footer,
  
   
  }
}

</script>
 

<style src="@/assets/css/style.css">

</style>
