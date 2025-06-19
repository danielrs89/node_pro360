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
      res.json(results);
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
      res.json(results);
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
    "SELECT products.* FROM products WHERE products.id_product = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
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
  db.query(
    "DELETE FROM products WHERE id_product = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
};
// PROVIDER
exports.getAllProviders = (req, res) => {
  db.query(
    "SELECT *  FROM providers JOIN categories ON providers.id_category = categories.id_category ORDER BY categories.id_category",
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
      res.json(results);
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
      res.json(results);
    }
  );
};
exports.getProvidersByProduct = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT providers.* FROM products JOIN pros ON pros.id_product = products.id_product JOIN providers ON providers.id_provider = pros.id_provider WHERE products.id_product = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
};
// PROS
exports.getAllPros = (req, res) => {
  db.query("SELECT * FROM pros", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
exports.getAllProsById = (req, res) => {
  const id = req.params.id;
  db.query(
    // "SELECT pros.id_pros, pros.unit_pros, pros.price_pros, products.name_product, products.description_product, products.photo_product, products.id_category, products.id_product, providers.name_provider, providers.id_provider, providers.cif_provider, providers.count_provider FROM pros JOIN products ON pros.id_product = products.id_product JOIN providers ON pros.id_provider = providers.id_provider WHERE providers.id_provider = ? ORDER BY id_category ASC",
    "SELECT * FROM pros WHERE pros.id_provider = ? ORDER BY pros.id_category ASC",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
};
exports.createPros = (req, res) => {
  const { unit_pros, price_pros, id_product, id_provider, id_category } =
  req.body;
  
  const pros = {
    unit_pros: unit_pros,
    price_pros: price_pros,
    id_product: id_product,
    id_provider: id_provider,
    id_category: id_category,
  };
  db.query("INSERT INTO pros SET ?", pros, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
exports.updatePros = (req, res) => {
  const id = req.params.id;

  const { unit_pros, price_pros, id_product, id_provider, id_category } =
    req.body;

  const pros = {
    unit_pros: unit_pros,
    price_pros: price_pros,
    id_product: id_product,
    id_provider: id_provider,
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
    res.json(results);
  });
};
