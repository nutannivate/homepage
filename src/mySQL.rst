=====
mySQL
=====

Installation
------------
	::
		
		sudo apt-get install mysql-client mysql-server

	
User login and Access to database
---------------------------------

	::
		mysql -u username -p dbname OR
		mysql -u username -p

Database
--------
* To create a database,

	::
		
		CREATE DATABASE dbname;

* To display database names,
	::
		
		SHOW DATABASES;

* To create table,
  CREATE TABLE student (name VARCHAR(20), age int(3), Censored CHAR(1), birth DATE);
  insert into student values("holy",21,"Y","1992-01-14");
  
* Auto increment primary key,
  create table school(id int not null auto_increment primary key, name varchar(50), place varchar(100))

* To display table names,
  DESCRIBE TABLES;

* for logging out type,
  QUIT
  
* Alter table
  alter table teacher modify id int not null auto_increment;
  alter table school modify place varchar(110);
  
* Add new column to the table:
  alter table school add grade varchar(1);
 
  alter table school add email text(15) first;
  alter table school add phone int(10) after name;
  alter table school drop email;
  
* before creating table user need to specify database name by
  mysql -u root -p dbname

  OR

  mysql> use dbname ('use' keyword is used for changing the database)

  if db not exists, then 1. create new database and 2. followed by 'use statement'.
  
Privileges
==========
* We allow user root to connect to the server from localhost using the password 'root':

  mysql> grant usage on ***.*** to root@localhost identified by 'root';


* finally we grant all privileges on the MY_DATA database to this user:
  mysql> grant all privileges on MY_DATAdb.* to root@localhost ;
  
* mysql> show grants;
  mysql> show privileges;

* To get a list of MySQL users:
  mysql> select user,host from mysql.user;

  mysql> show grants for root@localhost;

* To change privileges, first revoke. Such as:
  mysql> revoke all privileges on *.* from 'user'@'host';

* Then grant the appropriate privileges as desired.

  mysql> grant SELECT,INSERT,UPDATE,DELETE ON `db`.* TO 'user'@'host';

* Finally, flush:

  flush privileges;





