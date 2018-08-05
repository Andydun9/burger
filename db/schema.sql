### SCHEMA;

create DATABASE burger_db;

use burger_db;

CREATE TABLE burgers (
    id INT NOT NULL,
    burger_name VARCHAR(20) NOT NULL,
    devoured VARCHAR (4) NOT NULL,
    PRIMARY KEY(id)
)