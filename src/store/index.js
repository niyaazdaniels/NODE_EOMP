import { createStore } from "vuex";
import axios from "axios";


const DB = "https://nodedb-1.onrender.com/";

  
export default createStore({
  state: {
    users: null,
    user: null,
    selectedProduct: null,
    products: null,
    product: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
      setSelectedProduct(state, product) {
        state.selectedProduct = product;
      },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const res = await axios.get(`${DB}users`);
        commit("setUsers", res.data);
      } catch (e) {
        alert("Request Failed! Could not retrieve all users!");
      }
    },
    async fetchUser({ commit }) {
      try {
        const res = await axios.get(`${DB}user`);
        commit("setUser", res.data);
      } catch (e) {
        alert("Request Failed: Could not retrieve user!");
      }
    },
    async fetchProducts({ commit }) {
      try {
        const res = await axios.get(`${DB}products`);
        commit("setProducts", res.data);
      } catch (e) {
        alert("Request Failed: Could not retrieve products from the database.");
      }
    },
    async fetchProduct({ commit }) {
      try {
        const res = await axios.get(`${DB}product`);
        commit("setProduct", res.data);
      } catch (e) {
        alert("Requested Failed: Could not fetch product.");
      }
    },
    async registerNewUser({ commit }, payload) {
      try {
        const res = await axios.post(`${DB}users`, payload);
        const { msg } = await res.data;
        if (msg) {
          commit.dispatch("fetchUsers");
          commit("setUser", msg);
        }
      } catch (e) {
        alert("Request Failed: Could not register user.");
      }
    },
    async updateUser({ commit }, payload) {
      try {
        const res = await axios.patch(`${DB}users/${payload.userID}`, payload.data);
        if (res.data) {
          commit.dispatch("fetchUsers");
          commit("setUser", res.data);
          alert("Update Successful")
        }
      } catch (e) {
        console.error(e);
        alert("Request Failed: An error occurred while trying to update the user.");
      }
    },
    async deleteUser({ commit }, id) {
      try {
        const res = await axios.delete(`${DB}users/${id}`);
        if (res.data) {
          commit("fetchUsers");
          commit("setUser", res.data);
          console.log("User deleted successfully");
        }
      } catch (e) {
        console.error(e);
        alert("Request Failed: An error occurred while deleting user.");
      }
    },
    async addProduct({ commit }, payload) {
      try {
        const res = await axios.post(`${DB}products`, payload);
        if (res.data) {
          commit.dispatch("fetchProducts");
          commit("setProduct", res.data);
        }
      } catch (e) {
        console.error(e);
        alert("Request Failed: An error occurred while adding a new product.");
      }
    },
    async updateProduct({ commit }, payload) {
      try {
        const res = await axios.patch(`${DB}products/${payload.prodID}`, payload);
        if (res) {
          commit.dispatch("fetchProducts");
          alert("Successfully updated product!");
        } else {
          throw new Error("Failed to update product: ");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred: " + error);
      }
    },
    async deleteProduct({ commit }, prodID) {
      try {
        const res = await axios.delete(`${DB}products/${prodID}`);
        if (res) {
          commit.dispatch("fetchProducts");
          commit("setProduct", res);
        }
      } catch (e) {
        alert("An error occurred while deleting the product");
      }
    },
  },
  modules: {
  }
})
