# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.6.23)
# Database: mydb
# Generation Time: 2018-02-05 07:25:11 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table blog
# ------------------------------------------------------------

DROP TABLE IF EXISTS `blog`;

CREATE TABLE `blog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(250) NOT NULL,
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;

INSERT INTO `blog` (`id`, `title`, `content`)
VALUES
	(1,'Sample title','<p>Hello World</p>');

/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `lastmodified` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `firstname`, `lastname`, `lastmodified`, `created`)
VALUES
	(1,'Yusuf','Shakeel','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(2,'Dawood','Shakeel','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(3,'Suman','Ghosh','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(4,'Sohrab','Khan','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(5,'Iftekhar','Khan','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(6,'Manish','Giri','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(7,'Abhilash','KM','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(8,'Zakaria','KM','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(9,'Niyas','Niya','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(10,'Adithyan','Kumar','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(11,'Rukmini','Patel','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(12,'Aswin','Venu','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(13,'Manisha','Kashyap','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(14,'Sabarna','Ganguly','2017-05-01 20:19:00','2017-05-01 20:19:00'),
	(15,'Uttara','Verma','2017-05-01 20:19:00','2017-05-01 20:19:00');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
