INSERT INTO burgers (burger_name) VALUES ("bacon double cheeseburger");
INSERT INTO burgers (burger_name) VALUES ("venison burger");
INSERT INTO burgers (burger_name) VALUES ("In-n-Out Burger");

SELECT * from burgers;

UPDATE burgers SET devoured=false WHERE id=1;

DELETE FROM  burgers WHERE id=9;

UPDATE burgers SET burger_name="Bacon Double Cheeseburger" WHERE id=1;
UPDATE burgers SET burger_name="Venison Burger" WHERE id=2;