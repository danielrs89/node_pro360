-- 🔄 Elimina y crea la base de datos desde cero (solo en entorno de desarrollo)
DROP DATABASE IF EXISTS provider_db;

CREATE DATABASE provider_db;

USE provider_db;

-- 📂 Tabla categories
CREATE TABLE
    categories (
        id_category INT AUTO_INCREMENT PRIMARY KEY,
        name_category VARCHAR(50) UNIQUE
    );

-- 🧾 Tabla providers
CREATE TABLE
    providers (
        id_provider INT AUTO_INCREMENT PRIMARY KEY,
        name_provider VARCHAR(50),
        cif_provider VARCHAR(50),
        email_provider VARCHAR(50),
        phone_provider VARCHAR(50),
        count_provider DECIMAL(10, 2),
        id_category INT,
        CONSTRAINT fk_provider_category FOREIGN KEY (id_category) REFERENCES categories (id_category) ON DELETE SET NULL ON UPDATE CASCADE
    );

-- 📦 Tabla products (sin proveedor directo)
CREATE TABLE
    products (
        id_product INT AUTO_INCREMENT PRIMARY KEY,
        name_product VARCHAR(50),
        description_product VARCHAR(100),
        photo_product VARCHAR(50),
        id_category INT,
        CONSTRAINT fk_product_category FOREIGN KEY (id_category) REFERENCES categories (id_category) ON DELETE SET NULL ON UPDATE CASCADE
    );

-- 🔗 Tabla intermedia: productos por proveedor
CREATE TABLE
    pros (
        id_pros INT AUTO_INCREMENT PRIMARY KEY,
        unit_pros INT,
        price_pros DECIMAL(10, 2),
        id_product INT,
        id_provider INT,
        id_category INT,
        CONSTRAINT fk_pp_category FOREIGN KEY (id_category) REFERENCES categories (id_category) ON DELETE SET NULL ON UPDATE CASCADE,
        CONSTRAINT fk_pp_product FOREIGN KEY (id_product) REFERENCES products (id_product) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT fk_pp_provider FOREIGN KEY (id_provider) REFERENCES providers (id_provider) ON DELETE CASCADE ON UPDATE CASCADE
    );

-- 💰 Tabla de ventas
CREATE TABLE
    sales (
        id_sales INT AUTO_INCREMENT PRIMARY KEY,
        id_product INT,
        unit_sales INT,
        price_sales DECIMAL(10, 2),
        date_sales DATE,
        id_provider INT,
        CONSTRAINT fk_sales_product FOREIGN KEY (id_product) REFERENCES products (id_product) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT fk_sales_provider FOREIGN KEY (id_provider) REFERENCES providers (id_provider) ON DELETE CASCADE ON UPDATE CASCADE
    );

-- 📥 Insertar categorías
INSERT INTO
    categories (name_category)
VALUES
    ('carnes'),
    ('pescados'),
    ('vinos'),
    ('refrescos'),
    ('postres'),
    ('aceites');

-- 📥 Insertar proveedores
INSERT INTO
    providers (
        name_provider,
        cif_provider,
        email_provider,
        phone_provider,
        count_provider,
        id_category
    )
VALUES
    (
        'Carnicas del Norte',
        'B90011111',
        'contacto@carnicasnorte.com',
        '600123456',
        120,
        1
    ),
    (
        'Pescados del Cantabrico',
        'B90022222',
        'ventas@cantabricopescado.es',
        '611234567',
        100,
        2
    ),
    (
        'Bodegas Astur',
        'B90033333',
        'info@bodegasastur.com',
        '622345678',
        124,
        3
    ),
    (
        'Bebidas Frias',
        'B90044444',
        'contacto@bebidasfrias.net',
        '633456789',
        175,
        4
    ),
    (
        'Dulces del Sur',
        'B90055555',
        'info@dulcessur.es',
        '644567890',
        165,
        5
    );

-- 📥 Insertar productos (sin repetir)
INSERT INTO
    products (
        name_product,
        description_product,
        photo_product,
        id_category
    )
VALUES
    (
        'Chuleton de ternera',
        'Chuleton de 1kg envasado al vacio',
        'chuleton',
        1
    ),
    (
        'Merluza fresca',
        'Merluza entera limpia de 2kg aprox.',
        'merluza',
        2
    ),
    (
        'Vino tinto crianza',
        'Botella de 750ml de vino crianza',
        'vino',
        3
    ),
    (
        'Lata de cola 330ml',
        'Lata individual de refresco cola',
        'cola',
        4
    ),
    (
        'Tarta de queso',
        'Tarta de queso refrigerada de 1kg',
        'tarta',
        5
    ),
    (
        'Aceite de oliva virgen extra',
        'Botella de 1L de aceite virgen extra',
        'aceite',
        6
    );

-- 📥 Insertar relación productos ↔ proveedores
INSERT INTO
    pros (
        unit_pros,
        price_pros,
        id_product,
        id_provider,
        id_category
    )
VALUES
    (1, 30.00, 1, 1, 1), -- Chuleton - Carnicas
    (1, 18.00, 2, 2, 2), -- Merluza - Pescados
    (1, 6.90, 3, 3, 3), -- Vino - Bodegas
    (1, 0.80, 4, 4, 4), -- Cola - Bebidas
    (1, 12.50, 5, 5, 5), -- Tarta - Dulces
    (1, 2.50, 6, 1, 6), -- Aceite - Carnicas
    (1, 2.45, 6, 2, 6), -- Aceite - Pescados
    (1, 2.60, 6, 3, 6), -- Aceite - Bodegas
    (1, 2.55, 6, 4, 6), -- Aceite - Bebidas
    (1, 2.40, 6, 5, 6);

-- Aceite - Dulces
-- 📥 Insertar ventas
INSERT INTO
    sales (
        id_product,
        unit_sales,
        price_sales,
        date_sales,
        id_provider
    )
VALUES
    (1, 5, 92.50, '2025-05-10', 1),
    (6, 10, 25.00, '2025-05-11', 1),
    (2, 12, 216.00, '2025-05-12', 2),
    (6, 100, 245.00, '2025-05-13', 2),
    (3, 4, 27.60, '2025-05-14', 3),
    (1, 20, 600.00, '2025-04-25', 1),
    (5, 10, 125.00, '2025-04-26', 5);