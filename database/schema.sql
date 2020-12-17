DROP DATABASE IF EXISTS foodDB;
-- drops if it exists
CREATE DATABASE foodDB;

USE foodDB;

CREATE TABLE Food (
  id int auto_increment not null primary key,
  name varchar(255) not null,
  price int not null,
  rating int not null
);

-- this works
-- cd into database
-- make sure you're in the directory before running cmd;
-- run   mysql -u root -p <schema.sqlß