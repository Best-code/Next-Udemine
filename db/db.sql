CREATE TABLE "course" (
	ID SERIAL NOT NULL,
	Title VARCHAR(45) NOT NULL,
	Description VARCHAR NOT NULL,
	Price FLOAT NOT NULL,
    Reviews INT DEFAULT 0,
    Students INT DEFAULT 0,
    Rating Float DEFAULT 0,
    PRIMARY KEY (ID)
);