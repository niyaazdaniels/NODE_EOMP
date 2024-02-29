<template>
    <div class="container-fluid fixed-bottom text-white" id="Footer">
        <div class="row">
            <p class="lead">
                T & N_Natura &copy;
                <span>{{ currYear }}</span>
            </p>
            <!-- icons -->
            <div class="text-center  ">
        <a href="https://www.linkedin.com/in/thimna-alam-117618297?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9Rrg2YrGQ%2BKI1aZnH0m3tQ%3D%3D" class="text-white mx-2"><i class="bi bi-linkedin"></i> Linkedin </a>
        <a href="https://github.com/thimnaalam" class="text-white mx-2"><i class="bi bi-github"></i> Github </a>
        <a href="#" class="text-white mx-2"><i class="bi bi-envelope-at-fill"></i> alamthimna@gmail.com </a> 
        <a href="#" class="text-white mx-2"><i class="bi bi-phone-fill"></i> 083 518 2444 </a>

    </div>
     </div>
       </div>
</template>

<script>
    export default {
        name:'FooterComp',
        data(){
            return{
                currYear: new Date().getFullYear()
            }
        }
        
    }
</script>
