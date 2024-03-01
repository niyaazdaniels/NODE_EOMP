<template>
     <div class="Contact">
    <div class="row">
    
      <div>
        <h2 class="display-2 text-white" id="Contactpage1">Let's Connect</h2>
      </div>
    
            <div class="container-fluid my-5 " id="Form">
                <div class="row">
                   <div class="align-items-center" id="location">
                            <a href="https://maps.app.goo.gl/vv4ZHobihbF3AVf37"   class=" mx-2">
                             <i class="bi bi-geo-fill text-white"></i> </a> 314 Imam Haron Rd, Lansdowne, Cape Town, 7780
                        </div>
                    <!-- left side -->
                    <div class="col md-6 c">
                        <form action="https://formspree.io/f/mrgwrqzo" method="post">
                            <div class="mb-3 ">
                              <label for="#FirstName" class="form-label"></label>
                              <input type="text" class="form-control" name="Fullname" id="FirstName" aria-describedby="#Fullname" placeholder="Fullname" required>
                            </div>
                            <div class="mb-3">
                              <label for="#Surname" class="form-label"></label>
                              <input type="text" class="form-control" name="Surname" required id="Surname" aria-describedby="#Surname" placeholder="Surname">
                            </div>
                            <div class="mb-3">
                              <label for="#Email" class="form-label"></label>
                              <input type="Email" class="form-control" name="Email" required id="Email" aria-describedby="#Email" placeholder="Email
                              ">
                            </div>
                            <button type="submit" class="btn btn-dark " target="_blank">Submit</button>
                          </form>
                    </div>
                    <!-- right side -->
                    <div class="col">
                      <div class="mb-3">
                              <label for="#Message" class="form-label"></label>
                              <textarea class="form-control" id="Message" rows="8" placeholder="Message"></textarea>
                            </div>
                       
                    </div>

                </div>
                


                </div>

    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#Contactpage1{
  position: absolute;
  top: 20%;
  left: 60%;
  font-style: italic;
  font-weight: lighter;
}
#location{
  position: absolute;
  bottom:70%;
  right:30%;
  color: white;
  font-size: larger;
}
.container-fluid{
  width:95%
}
.btn{
  width: 600px;
  background-color: #2B821D ;
}

</style>