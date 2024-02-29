// Importing the Express module from the installed express package
import express from "express";
// Importing functions from the products controller
import controller from "../controller/products.js";
// Importing verifyToken function from the authentication middleware
import { verifyToken } from "../middleware/AuthenticateUser.js";

// Creating an instance of the Express Router
const router = express.Router();

// Grouping together routes with similar paths
router
    .route('/')  
        .get(controller.getManyProducts)  // GET request to fetch many products
        .post(controller.addOneProduct); // POST request to add a new product
       
router
    .route('/:prodID')
        .get(controller.getOneProduct) // GET request to fetch a single product by ID
        .patch(controller.editOneProduct) // PATCH request to edit a product by ID
        .delete(controller.deleteOneProduct); // DELETE request to delete a product by ID
    
// Exporting the router to be used globally
export default router;
