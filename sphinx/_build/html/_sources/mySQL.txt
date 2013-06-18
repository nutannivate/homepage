=====
mySQL
=====

Installation
------------
.. code-block:: bash
		
	$ sudo apt-get install mysql-client mysql-server

	
User login and Access to database
---------------------------------
.. code-block:: bash
	
	mysql -u username -p dbname OR
	mysql -u username -p

Database
--------
To create a database

.. code-block:: sql
		
	mysql> CREATE DATABASE dbname;

To display database names

.. code-block:: sql
		
	mysql> SHOW DATABASES;

To create table

.. code-block:: sql
		
	mysql> CREATE TABLE student (name VARCHAR(20), age int(3), Censored CHAR(1), birth DATE);
	mysql> insert into student values("holy",21,"Y","1992-01-14");
  
Auto increment primary key

.. code-block:: sql
	
	mysql> create table school(id int not null auto_increment primary key, name varchar(50), place varchar(100))

To display table names

.. code-block:: sql
		
	mysql> DESCRIBE TABLES;

for logging out type

.. code-block:: sql
		
	mysql> QUIT
  
Alter table
-----------
.. code-block:: sql
		
	mysql> alter table teacher modify id int not null auto_increment;
  	mysql> alter table school modify place varchar(110);
  
Add new column to the table

.. code-block:: sql
  	
  	mysql> alter table school add grade varchar(1);
	mysql> alter table school add email text(15) first;
	mysql> alter table school add phone int(10) after name;
	mysql> alter table school drop email;
  
before creating table user need to specify database name by

.. code-block:: bash
  	
  	$ mysql -u root -p dbname

OR

.. code-block:: sql
  	
  	mysql> use dbname ('use' keyword is used for changing the database)

if db not exists, then 1. create new database and 2. followed by 'use statement'.
  
Privileges
----------
We allow user root to connect to the server from localhost using the password 'root':

.. code-block:: sql
	
	mysql> grant usage on *.* to root@localhost identified by 'root';
	
finally we grant all privileges on the MY_DATA database to this user

.. code-block:: sql
  	
  	mysql> grant all privileges on MY_DATAdb.* to root@localhost ;
	mysql> show grants;
  	mysql> show privileges;

To get a list of MySQL users

.. code-block:: sql
	
	mysql> select user,host from mysql.user;
	mysql> show grants for root@localhost;

To change privileges, first revoke. Such as

.. code-block:: sql
	
	mysql> revoke all privileges on *.* from 'user'@'host';

Then grant the appropriate privileges as desired

.. code-block:: sql
  	
  	mysql> grant SELECT,INSERT,UPDATE,DELETE ON `db`.* TO 'user'@'host';

Finally, flush

.. code-block:: sql
  	
  	mysql> flush privileges;





