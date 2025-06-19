const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

// CATEGORIES
router.get("/category", controller.getAllCategories);
router.get("/category/:id", controller.getCategoryById);
router.post("/category", controller.createCategory);
router.put("/category/:id", controller.updateCategory);
router.delete("/category/:id", controller.deleteCategory);
// PRODUCTS
router.get("/product", controller.getAllProducts);
router.get("/product/:id", controller.getProductById);
router.post("/product", controller.createProduct);
router.put("/product/:id", controller.updateProduct);
router.delete("/product/:id", controller.deleteProduct);
// PROVIDERS
router.get("/provider", controller.getAllProviders);
router.get("/provider/:id", controller.getProviderById);
router.post("/provider", controller.createProvider);
router.put("/provider/:id", controller.updateProvider);
router.delete("/provider/:id", controller.deleteProvider);
router.get("/provider/:id", controller.getProvidersByProduct);
// PROS
router.get("/pros", controller.getAllPros);
router.get("/pros/:id", controller.getAllProsById);
router.post("/pros", controller.createPros);
router.put("/pros/:id", controller.updatePros);
router.delete("/pros/:id", controller.deletePros);

module.exports = router;
