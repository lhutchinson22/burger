-- Insert a set of records.
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ('Hamburger', true);

INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ('Cheeseburger', false);

INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ('Veggie Burger', true);

SELECT *
FROM burgers;