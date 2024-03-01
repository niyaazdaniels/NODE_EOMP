<template>
    <div class="row">
      <img class="container-fluid" src="../assets/Weet.jpg" id="productImg" alt="productImg">
      <div>
        <h1 class="text-white display-2">Products</h1>
      </div>
        <form class="d-flex lg-2 searchBTN" role="search">
            <input class="form-control" type="search" id="search" placeholder="Search" aria-label="Search" v-model="searchProducts" />
        </form>
      <div class="sort-dropdown">
        <label for="sort" id="sortTitle">Sort by: </label>
        <select id="sort" v-model="sortBy">
          <option value="amount">Price</option>
          <option value="Category">Category</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
        <button class="btn" @click="sortToggle">
          {{ sort === 'asc' ? 'Ascending' : 'Descending' }}
        </button>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 flex" v-if="products" id="products">
        <div class="col flex" v-for="product in filteredProducts" :key="product">
          <div class="card flex" id="test">
            <center>
              <img :src="product.prodUrl" class="card-img-top img-fluid" id="image" loading="lazy"
                :alt="product.prodName" />
            </center>
            <div class="card-body">
              <div class="title">
                <h5 class="card-title">{{ product.prodName }}</h5>
              </div>
              <div class="category">
                <p class="card-text">Category: {{ product.Category }}</p>
              </div>
              <div class="amount">
                <p class="card-text">Price: R{{ product.amount }}</p>
              </div>
              <div class="button">
                <button @click="viewProduct(product.prodID)" class="btnP text-white">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-else>
        <Spinners />
      </div>
    </div>
  </template>


  <script>
    /* eslint-disable */ 

  import Spinners from "../components/Spinners.vue";
  export default {
    components: {
     Spinners
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
      filteredProducts() {
        let filter = this.products
        if(this.searchProducts !== ''){
          filter = filter.filter(product => product.prodName.toLowerCase().includes(this.searchProducts.toLowerCase()) ||
          product.Category.toLowerCase().includes(this.searchProducts.toLowerCase()))
        }
        if(this.sortBy === 'amount'){
          filter = filter.sort((a, b)=> (this.sort === 'asc' ? a.amount - b.amount : b.amount - a.amount))
        } else if(this.sortBy === 'Category'){
          filter = filter.sort((a, b)=> a.Category.localeCompare(b.Category) * (this.sort === 'asc' ? 1 : -1))
        } else if(this.sortBy === 'alphabetical'){
          filter = filter.sort((a, b)=> a.prodName.localeCompare(b.prodName) * (this.sort === 'asc' ? 1 : -1))
        }
        
        return filter
      },
    },
    mounted() {
      this.$store.dispatch("fetchProducts");
    },
    methods: {
      searchProducts(e) {
        e.preventDefault()
        this.searchProducts = this.searchProducts.trim()
      },
      sortToggle() {
        this.sort = this.sort === 'asc' ? 'desc' : 'asc'
      },
      resetSearch() {
        this.searchProducts = ''
      },
      viewProduct(prodID) {
        const selectedItem = this.products.find(
          (product) => product.prodID === prodID
        );
        this.$store.commit("setSelectedProduct", selectedItem);
        this.$router.push({ component: "CardComp.vue", params: { prodID: prodID }});
      }
    },
    data() {
      return {
        searchProducts: '',
        sortBy: "",
        sort: ""
      }
    }
  };
  </script>
  <style scoped>
#products{
  padding-bottom: 10%;
}
.btnP{
  background-color: #225815;
}
.btn{
 border-color: black;
}
h1{
  padding-bottom: 5%;
  
}
#productImg{
  width: 100%;
height: 300px;
object-fit: cover;
}
.display-2{
  margin-top: -200px;
  margin-left: 60%;
  font-style: italic;
}
.searchBTN{
  padding-top: 5%;
}
</style>
  