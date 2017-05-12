INSERT INTO burgers (burger_name) VALUES ("bacon double cheeseburger");
INSERT INTO burgers (burger_name) VALUES ("venison burger");
INSERT INTO burgers (burger_name) VALUES ("In-n-Out Burger");

SELECT * from burgers;

UPDATE burgers SET devoured=false WHERE id=3;

UPDATE burgers SET burger_name="Bacon Double Cheeseburger" WHERE id=1;
