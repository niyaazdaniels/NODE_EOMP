<template>
    <div class="Admin">
        <div class="row" >
            <img class="container-fluid" src="../assets/admin.jpeg" id="adminImg" alt="adminImg">
            <div>
                <h2 class="display-2 text-white" id="heading">Admin</h2>
            </div>
            
            <h2 class="display-5 text-dark">Users</h2>
        <table class=" container">
            <thead class="text-dark bg-success">
            <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>LastName</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Role</th>
                <th>Profile</th>
                <th>Action</th>
               
            </tr>
        </thead>
        <tbody >

          <tr v-for="user in users" :key="user.id">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.userProfile }}</td>
            <td>
              <div class="row1">
                <button class="btn2  " @click="editUser(users)">Edit</button>
                <button class="btn2 " @click="deleteUser(users.userID)">Delete</button>
                <button class="btn2 " @click="addUser(users.userID)">add</button>
              </div>
            </td>
          </tr>
        </tbody>
        </table>

     <h2 class="display-5 text-dark  ">Products</h2>
     <table class="container ">
            <tr class="bg-success text-dark">
                <th>Image</th>
                <th>Product ID</th>
                <th>Name</th>   
                <th>Category</th>
                <th>Amount</th>
                <th>Action</th>
               
            </tr>
            <tbody v-if="products">
              <tr v-for="product in products" :key="product.prodID">
                <td><img :src="product.prodUrl" style="height: 100px;" /></td> 
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.Category }}</td>
                <td> R {{ product.amount }}</td>
                <td>
                    <div class="row1">
                <button class="btn2 " @click="editproduct(products)">Edit</button>
                <button class="btn2 " @click="deleteproduct(products.productID)">Delete</button>
                <button class="btn2 " @click="addproduct(products.productID)">add</button>
              </div>
                </td>
              </tr>
            </tbody>
        </table>
     </div>
        </div>

</template>

  
<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style scoped>
h2{
    padding-bottom: 5%;
    padding-top: 5%;
    top:20%;
}
.display-5{
    padding-top: 1%;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #F2F2F2;
  }
  .container{
    width: 90%;
    margin-bottom: 10%;
  }
  .btn2{
    width: 100px;
  }

</style>