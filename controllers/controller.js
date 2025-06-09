const db = require("../db/connection");
// CATEGORY
exports.getAllCategories = (req, res) => {
  db.query("SELECT *  FROM categories", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
exports.getCategoryById = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM categories WHERE id_category = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res
          .status(404)
          .json({ message: "getCategoryById no encontrado" });
      res.json(results[0]);
    }
  );
};
exports.createCategory = (req, res) => {
  const { name_category, id_category } = req.body;

  const category = {
    name_category: name_category,
    id_category: id_category,
  };
  db.query("INSERT INTO categories SET ?", category, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
exports.updateCategory = (req, res) => {
  const id = req.params.id;

  const { name_category, id_category } = req.body;

  const category = {
    name_category: name_category,
    id_category: id_category,
  };
  db.query(
    "UPDATE categories SET ? WHERE id_category = ?",
    [category, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
};
exports.deleteCategory = (req, res) => {
  const id = req.params.id;
  db.query(
    "DELETE FROM categories WHERE id_category = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res
          .status(404)
          .json({ message: "deleteCategory no encontrado" });
      res.json(results[0]);
    }
  );
};
// PRODUCT
exports.getAllProducts = (req, res) => {
  db.query(
    "SELECT * FROM products JOIN categories ON products.id_category = categories.id_category ORDER BY categories.name_category",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
};
exports.getProductById = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM products JOIN categories ON products.id_category = categories.id_category WHERE id_product = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res
          .status(404)
          .json({ message: "getProductById no encontrado" });
      res.json(results);
    }
  );
};
exports.createProduct = (req, res) => {
  const { name_product, description_product, photo_product, id_category } =
    req.body;

  const product = {
    name_product: name_product,
    description_product: description_product,
    photo_product: photo_product,
    id_category: id_category,
  };
  db.query("INSERT INTO products SET ?", product, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
exports.updateProduct = (req, res) => {
  const id = req.params.id;

  const { name_product, description_product, photo_product, id_category } =
    req.body;

  const product = {
    name_product: name_product,
    description_product: description_product,
    photo_product: photo_product,
    id_category: id_category,
  };
  db.query(
    "UPDATE products SET ? WHERE id_product = ?",
    [product, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
};
exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM product WHERE id_product = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(404).json({ message: "deleteProduct no encontrado" });
    res.json(results[0]);
  });
};
// PROVIDER
exports.getAllProviders = (req, res) => {
  db.query(
    "SELECT *  FROM providers JOIN categories ON providers.id_category = categories.id_category ORDER BY categories.name_category",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
};
exports.getProviderById = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM providers WHERE id_provider = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res
          .status(404)
          .json({ message: "getProviderById no encontrado" });
      res.json(results[0]);
    }
  );
};
exports.createProvider = (req, res) => {
  const {
    name_provider,
    email_provider,
    phone_provider,
    cif_provider,
    count_provider,
    id_category,
  } = req.body;

  const provider = {
    name_provider: name_provider,
    email_provider: email_provider,
    phone_provider: phone_provider,
    cif_provider: cif_provider,
    count_provider: count_provider,
    id_category: id_category,
  };
  db.query("INSERT INTO providers SET ?", provider, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
exports.updateProvider = (req, res) => {
  const id = req.params.id;

  const {
    name_provider,
    email_provider,
    phone_provider,
    cif_provider,
    count_provider,
    id_category,
  } = req.body;

  const provider = {
    name_provider: name_provider,
    email_provider: email_provider,
    phone_provider: phone_provider,
    cif_provider: cif_provider,
    count_provider: count_provider,
    id_category: id_category,
  };
  db.query(
    "UPDATE providers SET ? WHERE id_provider = ?",
    [provider, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
};
exports.deleteProvider = (req, res) => {
  const id = req.params.id;
  db.query(
    "DELETE FROM providers WHERE id_provider = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res
          .status(404)
          .json({ message: "deleteProvider no encontrado" });
      res.json(results[0]);
    }
  );
};
// PROS
exports.getAllPros = (req, res) => {
  db.query("SELECT * FROM products_provider", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
exports.getAllProsById = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT pros.id_pros, pros.unit_pros, pros.price_pros,products.name_product, products.description_product, products.photo_product,providers.name_provider, providers.cif_provider, providers.count_provider FROM pros JOIN products ON pros.id_product = products.id_product JOIN providers ON pros.id_provider = providers.id_provider WHERE providers.id_provider = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res
          .status(404)
          .json({ message: "getAllProsById no encontrado" });
      res.json(results);
    }
  );
};
exports.createPros = (req, res) => {
  const {
    unit_products_provider,
    price_products_provider,
    id_product,
    id_category,
  } = req.body;

  const pros = {
    unit_products_provider: unit_products_provider,
    price_products_provider: price_products_provider,
    id_product: id_product,
    id_category: id_category,
  };
  db.query("INSERT INTO pros SET ?", pros, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
exports.updatePros = (req, res) => {
  const id = req.params.id;

  const {
    unit_products_provider,
    price_products_provider,
    id_product,
    id_category,
  } = req.body;

  const pros = {
    unit_products_provider: unit_products_provider,
    price_products_provider: price_products_provider,
    id_product: id_product,
    id_category: id_category,
  };
  db.query(
    "UPDATE pros SET ? WHERE id_pros = ?",
    [pros, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
};
exports.deletePros = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM pros WHERE id_pros = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(404).json({ message: "deletePros no encontrado" });
    res.json(results[0]);
  });
};
