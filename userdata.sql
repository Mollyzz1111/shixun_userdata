-- MySQL dump 10.13  Distrib 8.0.24, for Linux (x86_64)
--
-- Host: localhost    Database: molly
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bj_data`
--

DROP TABLE IF EXISTS `bj_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bj_data` (
  `source_city` varchar(50) NOT NULL,
  `target_city` varchar(50) NOT NULL,
  `value` int DEFAULT NULL,
  PRIMARY KEY (`source_city`,`target_city`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bj_data`
--

LOCK TABLES `bj_data` WRITE;
/*!40000 ALTER TABLE `bj_data` DISABLE KEYS */;
INSERT INTO `bj_data` VALUES ('北京','上海',60),('北京','包头',44),('北京','南宁',22),('北京','南昌',100),('北京','大连',68),('北京','常州',91),('北京','广州',61),('北京','拉萨',93),('北京','重庆',56),('北京','长春',84);
/*!40000 ALTER TABLE `bj_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chart_data`
--

DROP TABLE IF EXISTS `chart_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chart_data` (
  `month` varchar(10) COLLATE utf8_general_ci NOT NULL,
  `completion_rate` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chart_data`
--

LOCK TABLES `chart_data` WRITE;
/*!40000 ALTER TABLE `chart_data` DISABLE KEYS */;
INSERT INTO `chart_data` VALUES ('1月',55),('2月',32),('3月',73),('4月',38),('5月',28),('6月',68),('7月',19),('8月',40),('9月',46),('10月',44),('11月',68),('12月',56);
/*!40000 ALTER TABLE `chart_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies_data`
--

DROP TABLE IF EXISTS `companies_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ranking` int DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_general_ci DEFAULT NULL,
  `amount` varchar(255) COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies_data`
--

LOCK TABLES `companies_data` WRITE;
/*!40000 ALTER TABLE `companies_data` DISABLE KEYS */;
INSERT INTO `companies_data` VALUES (1,2,'百度公司','977643万'),(2,6,'阿里','599418万'),(3,4,'网易','379040万'),(4,1,'腾讯科技','187121万'),(5,5,'雅虎','155852万'),(6,3,'新浪','58242万');
/*!40000 ALTER TABLE `companies_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expenditures_data`
--

DROP TABLE IF EXISTS `expenditures_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expenditures_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ranking` int DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_general_ci DEFAULT NULL,
  `amount` varchar(255) COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expenditures_data`
--

LOCK TABLES `expenditures_data` WRITE;
/*!40000 ALTER TABLE `expenditures_data` DISABLE KEYS */;
INSERT INTO `expenditures_data` VALUES (1,16,'安徽','94430000万'),(2,4,'江苏','93370000万'),(3,15,'黑龙江','88790000万'),(4,2,'北京','78260000万'),(5,6,'上海','64170000万'),(6,8,'湖北','61790000万'),(7,11,'福建','55720000万'),(8,9,'河南','36360000万'),(9,14,'山西','32420000万'),(10,5,'四川','27410000万'),(11,10,'山东','20360000万'),(12,12,'辽宁','16850000万'),(13,3,'浙江','15770000万'),(14,13,'陕西','12120000万'),(15,7,'湖南','8680000万'),(16,1,'广东','6110000万');
/*!40000 ALTER TABLE `expenditures_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pie_chart_data`
--

DROP TABLE IF EXISTS `pie_chart_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pie_chart_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` int DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pie_chart_data`
--

LOCK TABLES `pie_chart_data` WRITE;
/*!40000 ALTER TABLE `pie_chart_data` DISABLE KEYS */;
INSERT INTO `pie_chart_data` VALUES (1,14,'广东'),(2,72,'浙江'),(3,68,'北京');
/*!40000 ALTER TABLE `pie_chart_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales_data`
--

DROP TABLE IF EXISTS `sales_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales_data` (
  `month` varchar(10) COLLATE utf8_general_ci DEFAULT NULL,
  `城市总消费比例` int DEFAULT NULL,
  `城市总支出比例` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales_data`
--

LOCK TABLES `sales_data` WRITE;
/*!40000 ALTER TABLE `sales_data` DISABLE KEYS */;
INSERT INTO `sales_data` VALUES ('1月',313152,461562.00),('2月',591437,413357.00),('3月',951472,710270.00),('4月',407705,636382.00),('5月',493548,821774.00),('6月',140707,820343.00),('7月',647743,305863.00),('8月',529454,667683.00),('9月',824276,411239.00),('10月',207863,170255.00),('11月',877300,497398.00),('12月',873112,431252.00);
/*!40000 ALTER TABLE `sales_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales_statistics`
--

DROP TABLE IF EXISTS `sales_statistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales_statistics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `daily_sales` decimal(10,2) DEFAULT NULL,
  `daily_profit` decimal(10,2) DEFAULT NULL,
  `monthly_sales` decimal(10,2) DEFAULT NULL,
  `monthly_profit` decimal(10,2) DEFAULT NULL,
  `yearly_sales` decimal(10,2) DEFAULT NULL,
  `yearly_profit` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales_statistics`
--

LOCK TABLES `sales_statistics` WRITE;
/*!40000 ALTER TABLE `sales_statistics` DISABLE KEYS */;
INSERT INTO `sales_statistics` VALUES (1,1013.68,110.92,1612.37,176.44,11371.99,1244.40);
/*!40000 ALTER TABLE `sales_statistics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'molly'
--

--
-- Dumping routines for database 'molly'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19 12:19:59
