<template>
    <nav class="container-fluid navbar navbar-expand-lg custom-navbar  " id="navbar">
   <div class="container-fluid">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
      </button>
      <!-- logo -->
      <RouterLink to="/">
  <img class="img-fluid" loading="lazy" src="../assets/T & J (2).png" alt="logo" id="logo">
 </RouterLink>
     <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
       <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <RouterLink to="/" class="nav-link active text-white">
             Home
           </RouterLink>
         </li>
         <li class="nav-item">
             <RouterLink to="/about" class="nav-link active text-white ">
                 About
           </RouterLink>
         </li>
         <li class="nav-item">
             <RouterLink to="/products" class="nav-link active text-white">
                 Products
           </RouterLink>
         </li>

         <li class="nav-item">
             <RouterLink to="/product" class="nav-link active text-white">
                 Product
           </RouterLink>
         </li>
         <li class="nav-item">
             <RouterLink to="/admin" class="nav-link active text-white">
                 Admin
           </RouterLink>
         </li>
         <li class="nav-item">
             <RouterLink to="/contact" class="nav-link active text-white">
                 Contact
           </RouterLink>
         </li>
       </ul>  
     </div>
   </div>
 </nav> 
 
 </template>
 
 <script>
     export default {
         name:'NavBarComp',
     }
 </script> 
 
 <style scoped>
 
 </style>