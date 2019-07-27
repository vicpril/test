-- MySQL dump 10.13  Distrib 5.7.19, for Win32 (AMD64)
--
-- Host: localhost    Database: homestead
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article_category`
--

DROP TABLE IF EXISTS `article_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `article_id` int(10) unsigned NOT NULL DEFAULT '1',
  `category_id` int(10) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `article_category_article_id_foreign` (`article_id`),
  KEY `article_category_category_id_foreign` (`category_id`),
  CONSTRAINT `article_category_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_category_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_category`
--

LOCK TABLES `article_category` WRITE;
/*!40000 ALTER TABLE `article_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_tag`
--

DROP TABLE IF EXISTS `article_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_tag` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `article_id` int(10) unsigned NOT NULL DEFAULT '1',
  `tag_id` int(10) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `article_tag_article_id_foreign` (`article_id`),
  KEY `article_tag_tag_id_foreign` (`tag_id`),
  CONSTRAINT `article_tag_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_tag_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_tag`
--

LOCK TABLES `article_tag` WRITE;
/*!40000 ALTER TABLE `article_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_user`
--

DROP TABLE IF EXISTS `article_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `article_id` int(10) unsigned NOT NULL DEFAULT '1',
  `user_id` int(10) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `article_user_article_id_foreign` (`article_id`),
  KEY `article_user_user_id_foreign` (`user_id`),
  CONSTRAINT `article_user_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_user`
--

LOCK TABLES `article_user` WRITE;
/*!40000 ALTER TABLE `article_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` int(11) NOT NULL DEFAULT '1',
  `doi` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `udk` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stol` tinyint(1) NOT NULL DEFAULT '0',
  `date_arrival` timestamp NULL DEFAULT NULL,
  `date_review` timestamp NULL DEFAULT NULL,
  `applications` text COLLATE utf8mb4_unicode_ci,
  `finance` text COLLATE utf8mb4_unicode_ci,
  `file_audio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status_id` int(10) unsigned NOT NULL DEFAULT '1',
  `issue_id` int(10) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `articles_alias_unique` (`alias`),
  KEY `articles_status_id_foreign` (`status_id`),
  KEY `articles_issue_id_foreign` (`issue_id`),
  CONSTRAINT `articles_issue_id_foreign` FOREIGN KEY (`issue_id`) REFERENCES `issues` (`id`),
  CONSTRAINT `articles_status_id_foreign` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ru` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alias` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT '0',
  `term_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `used_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `categories_alias_unique` (`alias`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (2,'Без рубрики','No category','no-rubrik',0,1,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(3,'Disputatio','Disputatio_en','disputatio',0,5,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(4,'I Открытый российский статистический конгресс','I Open Russia Statistical Congress','i-otkrytyj-rossijskij-statisticheskij-kongress',0,191,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(5,'In memoriam','In memoriam_en','in_memoriam',0,98,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(6,'Анонсы','Announces','anonsy',0,89,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(7,'Антропологический форсайт','Anthropological foresight','antropologicheskij-forsajt',0,120,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(8,'В поисках справедливого общества','In the search for a just society','v-poiskax-spravedlivogo-obshhestva',0,116,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(9,'В творческой лаборатории','In the creative laboratory','v-tvorcheskoj-laboratorii',0,37,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(10,'Геополитика и культура','Geopolitics and culture','geopolitika-i-kultura',0,26,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(11,'Документы','Documentation','dokumenty',0,58,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(12,'Документы эпохи','Documents of epoch','dokumenty_epohi',0,106,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(13,'Духовное наследие и современность','Cultural heritage and modern world','duxovnoe-nasledie-i-sovremennost',0,25,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(14,'Забытая война. К 100-летию Первой мировой','Forgotten War. The 100th Anniversary of the First World War','zabytaya-vojna-k-100-letiyu-pervoj-mirovoj',0,137,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(15,'Заметки на полях','Notes in the Margins','zametki-na-polyax',0,183,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(16,'Идеал в искусстве','Ideal in Art','ideal-v-iskusstve',0,49,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(17,'Из книг','From books','iz-knig',0,67,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(18,'Из научного наследия','','iz-nauchnogo-naslediya',0,68,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(19,'Интервью','Interview','intervyu',0,184,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(20,'Искусствоведение: проблемы и решения','','kulturologiya-i-iskusstvovedenie-problemy-i-resheniya',0,29,'2019-07-27 05:23:18','2019-07-27 05:23:18',NULL),(21,'Искусствоведение: проблемы, подходы, решения','Art Critics: problems, approaches, solutions','iskustvovedenie_problemy_podhody_resheniya',0,102,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(22,'Исследуем гендерные отношения','Investigate gender relation','issleduem-gendernye-otnosheniya',0,113,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(23,'Исследуем современное общество','Investigate Modern Society','issleduem-sovremennoe-obshhestvo',0,138,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(24,'Исследуем философскую традицию','Investigating philosophical tradition','issleduem-filosofskuyu-tradiciyu',0,109,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(25,'История культуры','History of Culture','istoriya-kultury',0,142,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(26,'История научной жизни в СССР-России в воспоминаниях современников','History of the scientific life in USSR-Russia in the memoirs of contemporaries','istoriya-nauchnoy-zhizni-v-sssr-rossii-v-vospominaniyah-sovremennikov',0,87,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(27,'История отечественного образования','','istoriya-otechestvennogo-obrazovaniya',0,140,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(28,'История отечественной культуры','History of native culture','istoriya-otechestvennoj-kultury',0,127,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(29,'История художественной жизни','Hystory of Artistic Life','istoriya-xudozhestvennoj-zhizni',0,28,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(30,'Книжное обозрение','','knizhnoe-obozrenie',0,32,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(31,'Конференции','Conferences','konferencii',0,133,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(32,'Круглый стол','Round table','kruglyj-stol',0,134,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(33,'Культура как предмет исследования','Culture as a subject of study','kultura-kak-predmet-issledovaniya',0,135,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(34,'Культура социальных отношений','','kultura-socialnyx-otnoshenij',0,185,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(35,'Культура творчества','The culture of creativity','kultura-tvorchestva',0,186,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(36,'Культурология: проблемы, подходы, решения','Culturology: problems, approaches, decisions','kulturologiya-problemy-podhody-resheniya',0,80,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(37,'Лингвистическая философия ХХ века','Linguistic philosophy of the XX century','lingvisticheskaya-filosofiya-xx-veka',0,194,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(38,'Материалы международной конференции «Вызовы современного мира»','','materialy-mezhdunarodnoj-konferencii-vyzovy-sovremennogo-mira',0,128,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(39,'Мысли по поводу','','mysli-po-povodu',0,34,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(40,'Наука и образование на современном этапе','','nauka-i-obrazovanie-na-sovremennom-etape',0,136,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(41,'Научная жизнь','Scientific Life','nauchnaya-zhizn',0,77,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(42,'Научное наследие','Scientific heritage','nauchnoe-nasledie',0,82,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(43,'Научные события','Scientific Events','nauchnye_sobytiya',0,96,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(44,'Наши публикации','Our publications','nashi_publikacii',0,94,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(46,'Новые книги','New books','novye-knigi',0,64,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(47,'Образование: история и современное состояние','','obrazovanie_istoriya_i_sovremennoe_sostoyanie',0,101,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(48,'Образование: проблемы, подходы, решения','','obrazovanie-problemy-i-resheniya',0,40,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(49,'Образование: формы и методы','','obrazovanie-formy-i-metody',0,85,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(50,'Обсуждаем общество','Discussing Society','obsuzhdaem-obshhestvo',0,33,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(51,'Общество и его ментальность','Society and its mentality','obshestvo_i_ego_mentalnost',0,92,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(52,'Общество и личность','Society and personality','obshhestvo-i-lichnost',0,50,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(53,'Общество: принципы организации','Society: principles of organization','obshhestvo-principy-organizacii',0,126,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(54,'Основания европейской культуры','Foundations of European culture','osnovaniya-evropejskoj-kultury',0,70,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(55,'От редактора','From the Editor','ot-redaktora',0,115,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(56,'Памяти ученого','In the memory of the scientist','pamyati-uchenogo',0,119,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(57,'Переводы','Transtlations','perevody',0,108,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(58,'Поздравляем юбиляра!','Congratulations to the Jubilee!','pozdravlyaem_ubilyara',0,95,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(59,'Поп-культурология','Pop-culturology','pop-kulturologiya',0,46,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(60,'Поп-социология','','pop-sociologiya',0,79,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(61,'Поп-философия','Pop-phylosiphy','pop-filosofiya',0,35,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(62,'Поп-экономика','Pop-economics','pop-ekonomika',0,72,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(63,'Практика российского образования','','praktika-rossijskogo-obrazovaniya',0,75,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(64,'Практика социального упоавления','','praktika-socialnogo-upoavleniya',0,56,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(65,'Практика социального управления','','praktika-socialnogo-upravleniya',0,57,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(66,'Проблемы гносеологии','Problems of epistemology','problemy-gnoseologii',0,48,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(67,'Проблемы искусствоведения','The problems of art criticism','problemy-iskusstvovedeniya',0,139,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(68,'Проблемы культурологии и искусствознания','Problems of cultural studies and art criticism','problemy-culturologii-i-iskusstvoznaniya',0,86,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(69,'Проблемы методологии','Problems of methodology','problemy_metodologii',0,100,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(70,'Проблемы музыкознания','Problems of the musicology','problemy_muzykoznaniya',0,97,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(71,'Проблемы национального дискурса','Problems of national discourse','problemy-nacionalnogo-diskursa',0,38,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(72,'Проблемы отечественного самосознания','The problems of the national identity','problemy-otechestvennogo-samosoznaniya',0,118,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(73,'Проблемы российской культуры','Problems of Russian culture','problemy-rossijskoj-kultury',0,69,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(74,'Проблемы современного искусствознания','The problems of modern art critics','problema_sovremennogo_iskusstvoznania',0,107,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(75,'Проблемы современной экономики','Problems of the modern economy','problemy-sovremennoy-economici',0,112,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(76,'Проблемы социального управления','','problemy-socialnogo-upravleniya',0,114,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(77,'Проблемы философии','','problemy_filosofii',0,90,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(78,'Проблемы философской антропологии','Problems of philosophical anthropology','problemy-filosofskoj-antropologii',0,74,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(79,'Проблемы этики','Problems of ethics','problemy-etiki',0,131,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(80,'Продолжаем разговор','Continue to talk','prodolzhaem-razgovor',0,122,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(81,'Продолжение темы','Continuing the Theme','prodolzhenie-temy',0,146,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(82,'Проект','The project','proekt',0,88,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(83,'Религия в современном обществе','Religion in modern society','religiya-v-sovremennom-obshestve',0,111,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(84,'Роль личности в культуре','The role of personality in culture','rol-lichnosti-v-kulture',0,195,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(85,'Сетевые взаимодействия в обществе','Network interactions in society','setevye-vzaimodejstviya-v-obshhestve',0,63,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(86,'Сетевые структуры','Network structures','setevye-struktury',0,55,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(87,'Сибирь как мегарегион','Siberia as a megaregion','siberia-as-a-megaregion',0,193,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(88,'Системный подход и инновации','System approach and innovations','sistemnyj-podxod-i-innovacii',0,59,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(89,'Слово учёного-читателя','The word of scientist-reader','slovo-uchyonogo-chitatelya',0,39,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(90,'События','Events','sobytiya',0,36,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(91,'Современное искусство','Modern Art','sovremennoe_iskusstvo',0,105,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(92,'Социальная философия и практика','Social philosophy and practice','socialnaya-filosofiya-i-praktika',0,30,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(93,'Социальная философия: проблемы, подходы, решения','Social philosophy: problems, approaches, decisions','socialnaya-filosofiya-podxody',0,60,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(94,'Социальная философия:проблемы и подходы','','socialnaya_filosofia_problemy_i_podhody',0,99,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(95,'Социально-экономическая политика','','socialno-ekonomicheskaya-politika',0,44,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(96,'Социально-экономическая теория и практика','Social and economic theory and practice','socialno-economicheskaya-teoriya-i-practica',0,84,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(97,'Социально-экономические проблемы современного российского общества','','socialno-econimicheskie-problemy-sovremennogo-rossiyskogo-obshestva',0,110,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(98,'Социальный идеал и общественное сознание','Social ideal and social consciousness','socialnyj-ideal-i-obshhestvennoe-soznanie',0,66,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(99,'Социология культуры','Sociology of Culture','sociologiya-kultury',0,132,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(100,'Социология образования','','sociologiya-obrazovaniya',0,117,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(101,'Социология: проблемы, подходы, решения','','sociologiya-problemy',0,52,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(102,'Творчество как предмет исследования','The creativity as a subject of study','tvorchestvo-kak-predmet-issledovaniya',0,121,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(103,'У нас в гостях журнал VOX','','u-nas-v-gostyax-zhurnal-vox',0,27,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(104,'Философия и искусство','Philosophy and Аrt','filosofiya-i-iskusstvo',0,47,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(105,'Философия и литература','Philosophy and literature','filosofiya-i-literatura',0,45,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(106,'Философия культуры','Philosophy of the Culture','philosophy',0,6,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(107,'Философия экономики','Philosophy of the Economics','filosofiya-ekonomiki',0,187,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(108,'Философия: проблемы, подходы, решения','Philosophy: problems, approaches, decisions','filosofiya-problemy-podxody-resheniya',0,83,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(109,'Философская традиция и современный мир','Philosophy tradition and modern world','filosofskaya_tradicia_-i_sovremennyy_mir',0,104,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(110,'Философские практики','Philosophical Practices','filosofskie-praktiki',0,145,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(111,'Человек как предмет философского анализа','A Man as an Object of Philosophical Analysis','chelovek-kak-predmet-filosofskogo-analiza',0,144,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(112,'Экономика: история институтов','Economics: history of institutions','ekonomika-istoriya-institutov',0,71,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(113,'Экономика: принципы организации','Economics: principles of organization','economica_principy_organizacii',0,91,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(114,'Экономика: проблемы, подходы, решения','Economics: problems, approaches, solutions','ekonomika-problemy',0,73,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(115,'Экономика: структура рынка','Economics: structure of market','ekonomika-struktura-rynka',0,51,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(116,'Экономическое пространство Сибири','Economic space of Siberia','ekonomicheskoe-prostranstvo-sibiri',0,125,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(117,'Эстетические аспекты социального','Aesthetic aspects of the social life','esteticheskie_aspekty_socialnogo',0,93,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(118,'Юбилей','The Jubilee','yubilej',0,124,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(119,'Язык философии и философия языка','Language of philosophy and philosophy of language','yazyk-filosofii-i-filosofiya-yazyka',0,31,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(120,'Отечественная культура как предмет исследования','Native culture as a subject of study','otechestvennaya-kultura-kak-predmet-issledovaniya',0,650,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(121,'Образование в современной культуре','Education in Modern Culture','obrazovanie-v-sovremennoj-kulture',0,652,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(122,'Проблемы современной российской экономики','Problems of modern Russian economy','problemy-sovremennoj-rossijskoj-ekonomiki',0,733,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(123,'Лейбниц - 300 лет спустя','Leibniz - 300 years later','lejbnic-300-let-spustya',0,776,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(124,'Культура через призму языка','Culture through the prism of language','kultura-cherez-prizmu-yazyka',0,780,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(125,'Философия истории','Philosophy of the History','filosofiya-istorii',0,815,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(126,'Философско-психологические подходы к развитию бизнес-способностей','Philosophical-psychological approaches to the development of Business Abilities','filosofsko-psixologicheskie-podxody-k-razvitiyu-biznes-sposobnostej',0,854,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(127,'Философская аналитика языка','Philosophical analysis of the Language','filosofskaya-analitika-yazyka',0,894,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(128,'Религия в современной культуре','Religion in modern culture','religiya-v-sovremennoj-kulture',0,898,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(129,'Человек в культуре','Man-and-Culture','chelovek-v-kulture',0,900,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(130,'Наука в современной культуре','Science in Modern Culture','nauka-v-sovremennoj-kulture',0,902,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(131,'Аналитика искусства','Art Analytics','analitika-iskusstva',0,904,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(132,'Аналитика духовной культуры','Analytics of Spiritual Culture','analitika-duxovnoj-kultury',0,906,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(133,'Философия: традиции и современность','Philosophy: Tradition and Modernity','filosofiya-tradicii-i-sovremennost-ru',0,940,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(134,'Сибирь в современном мире','','sibir-v-sovremennom-mire',0,955,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(135,'Экономическая теория','Economic theory','ekonomicheskaya-teoriya',0,957,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(136,'Социальная философия','Social philosophy','socialnaya-filosofiya',0,959,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(137,'Философия науки и техники','Philosophy of science and technology','filosofiya-nauki-i-texniki',0,967,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(138,'Философская антропология','Philosophical anthropology','filosofskaya-antropologiya',0,963,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(139,'Философская антропология, философия культуры','Philosophical anthropology, philosophy of culture','filisofskaya-antropologiya-filosofiya-kultury',0,965,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(140,'К 100-летию ВЛКСМ','The 100th anniversary of the Komsomol','k-100-letiyu-vlksm',0,969,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(141,'Социальные практики','Social practices','socialnaya-praktika',0,1058,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(142,'200-летний юбилей К. Маркса','200th anniversary of Marx','200-letnij-yubilej-k-marksa',0,1060,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(143,'История философии','History of philosophy','istoriya-filosofii',0,1062,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(144,'Теория и история культуры','Theory and history of culture','teoriya-i-istoriya-kultury',0,1097,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(145,'Этика','Ethics','etika',0,1099,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(146,'История научной жизни в СССР-России в воспоминаниях современников','The history of scientific life in the USSR-Russia in the memoirs of contemporaries','istoriya-nauchnoy-zhizni-v-sssr-rossii-v-vospominaniyakh-sovremennikov',0,1101,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(147,'Наука и образование','Science and education','nauka-i-obrazovanie',0,1142,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL),(148,'Мегарегион Сибирь','The Megaregion Siberia','megaregion-sibir',0,1144,'2019-07-27 05:23:19','2019-07-27 05:23:19',NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `files_url_unique` (`url`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issues`
--

DROP TABLE IF EXISTS `issues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `issues` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `year` int(10) unsigned NOT NULL DEFAULT '2000',
  `tom` int(10) unsigned NOT NULL DEFAULT '1',
  `no` int(10) unsigned NOT NULL DEFAULT '1',
  `part` int(10) unsigned NOT NULL DEFAULT '1',
  `full_no` int(10) unsigned NOT NULL DEFAULT '1',
  `file_title_ru` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_title_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issues`
--

LOCK TABLES `issues` WRITE;
/*!40000 ALTER TABLE `issues` DISABLE KEYS */;
/*!40000 ALTER TABLE `issues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ru` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city_ru` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_ru` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menus` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lang` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` VALUES (1,'top','ru','Горизантальное (русское)'),(2,'top','en','Горизантальное (английское)'),(3,'sidebar','ru','Вертикальное (русское)'),(4,'sidebar','en','Вертикальное (английское)'),(5,'review','ru','Для рецензирования (русское)'),(6,'review','en','Для рецензирования (английское)');
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meta_articles`
--

DROP TABLE IF EXISTS `meta_articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meta_articles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `article_id` int(10) unsigned NOT NULL DEFAULT '0',
  `lang` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci,
  `annotation` text COLLATE utf8mb4_unicode_ci,
  `keywords` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bibliography` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `meta_articles_article_id_foreign` (`article_id`),
  CONSTRAINT `meta_articles_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meta_articles`
--

LOCK TABLES `meta_articles` WRITE;
/*!40000 ALTER TABLE `meta_articles` DISABLE KEYS */;
/*!40000 ALTER TABLE `meta_articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meta_menus`
--

DROP TABLE IF EXISTS `meta_menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meta_menus` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent` int(11) DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT '1',
  `menu_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `meta_menus_menu_id_foreign` (`menu_id`),
  CONSTRAINT `meta_menus_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meta_menus`
--

LOCK TABLES `meta_menus` WRITE;
/*!40000 ALTER TABLE `meta_menus` DISABLE KEYS */;
INSERT INTO `meta_menus` VALUES (1,'О журнале','','page',0,1,1),(2,'About','','page',0,1,2),(3,'Свежий номер','articles','page',0,2,1),(4,'New issue','articles','page',0,2,2),(5,'Архив','archive','page',0,3,1),(6,'Archive','archive','page',0,3,2),(7,'Редколлегия и Редсовет','redkollegiya','page',0,4,1),(8,'Editorial Board','redkollegiya','page',0,4,2),(9,'Контакты','contacts','page',0,5,1),(10,'Contacts','contacts','page',0,5,2),(11,'Наши авторы','authors','page',0,6,1),(12,'Our authors','authors','page',0,6,2),(13,'КАК ПОДАТЬ СТАТЬЮ','informaciya-dlya-avtorov','page',0,7,1),(14,'','informaciya-dlya-avtorov','page',0,7,2),(15,'МИССИЯ ЖУРНАЛА','missiya','page',0,1,3),(16,'MISSION OF JOURNAL','missiya','page',0,1,4),(17,'ДЕКЛАРАЦИЯ ОБ ЭТИКЕ','deklaraciya-ob-etike','page',0,2,3),(18,'ETHIC\'S DECLARATION','deklaraciya-ob-etike','page',0,2,4),(19,'ПОЛИТИКА ЖУРНАЛА','politics-of-journal','page',0,3,3),(20,'POLITICS OF JOURNAL','politics-of-journal','page',0,3,4),(21,'ПОРЯДОК РЕЦЕНЗИРОВАНИЯ','poryadok-recenzirovaniya','page',0,1,5),(22,'ТРЕБОВАНИЯ К ОФОРМЛЕНИЮ РУКОПИСИ','trebovaniya-k-oformleniyu-rukopisi','page',0,2,5),(23,'ПРИМЕРЫ ОФОРМЛЕНИЯ ЛИТЕРАТУРЫ','primery-oformleniya-literatury','page',0,3,5);
/*!40000 ALTER TABLE `meta_menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meta_pages`
--

DROP TABLE IF EXISTS `meta_pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meta_pages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `on` tinyint(1) NOT NULL,
  `lang` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `page_id` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `meta_pages_page_id_foreign` (`page_id`),
  CONSTRAINT `meta_pages_page_id_foreign` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meta_pages`
--

LOCK TABLES `meta_pages` WRITE;
/*!40000 ALTER TABLE `meta_pages` DISABLE KEYS */;
INSERT INTO `meta_pages` VALUES (1,1,'ru','О журнале','Содержание русской части',1),(2,1,'en','About','English part content',1),(3,1,'ru','Свежий номер','Содержание русской части',2),(4,1,'en','New issue','English par content',2),(5,1,'ru','Архив','Содержание русской части',3),(6,1,'en','Archive','English par content',3),(7,1,'ru','Редколлегия и Редсовет','Содержание русской части',4),(8,1,'en','Editorial Board','English par content',4),(9,1,'ru','Контакты','Содержание русской части',5),(10,1,'en','Contacts','English par content',5),(11,1,'ru','Наши авторы','Содержание русской части',6),(12,1,'en','Our authors','English par content',6),(13,1,'ru','КАК ПОДАТЬ СТАТЬЮ','Содержание КАК ПОДАТЬ СТАТЬЮ',7),(14,1,'en','','',7),(15,1,'ru','МИССИЯ ЖУРНАЛА','Содержание МИССИЯ ЖУРНАЛА',8),(16,1,'en','MISSION OF JOURNAL','MISSION OF JOURNAL content',8),(17,1,'ru','ДЕКЛАРАЦИЯ ОБ ЭТИКЕ','Содержание ДЕКЛАРАЦИЯ ОБ ЭТИКЕ',9),(18,1,'en','ETHIC\'S DECLARATION','ETHIC\'S DECLARATION',9),(19,1,'ru','ПОЛИТИКА ЖУРНАЛА','Содержание ПОЛИТИКА ЖУРНАЛА',10),(20,1,'en','POLITICS OF JOURNAL','POLITICS OF JOURNAL',10),(21,1,'ru','ПОРЯДОК РЕЦЕНЗИРОВАНИЯ','Содержание ПОРЯДОК РЕЦЕНЗИРОВАНИЯ',11),(22,1,'en','','',11),(23,1,'ru','ТРЕБОВАНИЯ К ОФОРМЛЕНИЮ РУКОПИСИ','Содержание ТРЕБОВАНИЯ К ОФОРМЛЕНИЮ РУКОПИСИ',12),(24,1,'en','','',12),(25,1,'ru','ПРИМЕРЫ ОФОРМЛЕНИЯ ЛИТЕРАТУРЫ','Содержание ПРИМЕРЫ ОФОРМЛЕНИЯ ЛИТЕРАТУРЫ',13),(26,1,'en','','',13);
/*!40000 ALTER TABLE `meta_pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meta_users`
--

DROP TABLE IF EXISTS `meta_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meta_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL DEFAULT '0',
  `lang` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `patronymic` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `initials` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `degree` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `jobs` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `meta_users_user_id_foreign` (`user_id`),
  CONSTRAINT `meta_users_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meta_users`
--

LOCK TABLES `meta_users` WRITE;
/*!40000 ALTER TABLE `meta_users` DISABLE KEYS */;
INSERT INTO `meta_users` VALUES (1,1,'ru','Администратор',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,1,'en','Administrator',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,2,'ru','Редактор',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,2,'en','Editor',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `meta_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2018_05_04_031835_CreateArticlesTable',1),(4,'2018_05_04_044008_CreateStatusTable',1),(5,'2018_05_04_044114_CreateCategoriesTable',1),(6,'2018_05_04_044255_CreateTagsTable',1),(7,'2018_05_04_090846_CreateMenusTable',1),(8,'2018_05_14_045956_CreateIssuesTable',1),(9,'2018_05_14_061028_CreateJobsTable',1),(10,'2018_05_14_061222_ChangeArticlesTable',1),(11,'2018_05_14_061725_CreateUserJobTable',1),(12,'2018_05_14_062419_CreateArticleUserTable',1),(13,'2018_05_14_065135_CreateArticleTagTable',1),(14,'2018_05_14_065526_CreateArticleCategoryTable',1),(15,'2018_06_29_062956_CreateFilesTable',1),(16,'2018_08_28_145522_create_meta_article_table',1),(17,'2018_09_02_100306_create_meta_users_table',1),(18,'2019_06_01_025841_create_pages_table',1),(19,'2019_06_01_032504_create_meta_pages_table',1),(20,'2019_06_05_231322_create_meta_menus_table',1),(21,'2019_07_21_042429_create_redcols_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `template` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'common',
  `show_top_menu` tinyint(1) NOT NULL DEFAULT '1',
  `show_sidebar_menu` tinyint(1) NOT NULL DEFAULT '0',
  `show_review_menu` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status_id` int(10) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `pages_alias_unique` (`alias`),
  KEY `pages_status_id_foreign` (`status_id`),
  CONSTRAINT `pages_status_id_foreign` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
INSERT INTO `pages` VALUES (1,'','mainpage',1,1,0,'2019-07-27 05:21:23','2019-07-27 05:21:23',1),(2,'articles','currentissue',1,0,0,'2019-07-27 05:21:23','2019-07-27 05:21:23',1),(3,'archive','archive',1,0,0,'2019-07-27 05:21:23','2019-07-27 05:21:23',1),(4,'redkollegiya','redkollegiya',1,0,0,'2019-07-27 05:21:23','2019-07-27 05:21:23',1),(5,'contacts','contacts',1,0,0,'2019-07-27 05:21:23','2019-07-27 05:21:23',1),(6,'authors','authors',1,0,0,'2019-07-27 05:21:23','2019-07-27 05:21:23',1),(7,'informaciya-dlya-avtorov','common',1,0,1,'2019-07-27 05:21:23','2019-07-27 05:21:23',1),(8,'missiya','common',1,1,0,'2019-07-27 05:21:23','2019-07-27 05:21:23',1),(9,'deklaraciya-ob-etike','common',1,1,0,'2019-07-27 05:21:23','2019-07-27 05:21:23',1),(10,'politics-of-journal','common',1,1,0,'2019-07-27 05:21:23','2019-07-27 05:21:23',1),(11,'poryadok-recenzirovaniya','common',1,0,1,'2019-07-27 05:21:23','2019-07-27 05:21:23',1),(12,'trebovaniya-k-oformleniyu-rukopisi','common',1,0,1,'2019-07-27 05:21:23','2019-07-27 05:21:23',1),(13,'primery-oformleniya-literatury','common',1,0,1,'2019-07-27 05:21:23','2019-07-27 05:21:23',1);
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `redcols`
--

DROP TABLE IF EXISTS `redcols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `redcols` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'red',
  `post_ru` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `post_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` int(11) NOT NULL DEFAULT '1',
  `user_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `redcols_user_id_foreign` (`user_id`),
  CONSTRAINT `redcols_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redcols`
--

LOCK TABLES `redcols` WRITE;
/*!40000 ALTER TABLE `redcols` DISABLE KEYS */;
/*!40000 ALTER TABLE `redcols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ru` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Опубликована','public'),(2,'Черновик','private');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ru` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alias` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `term_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `used_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tags_alias_unique` (`alias`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'искусствоведение','Art Criticism','iskusstvovedenie',24,'2019-07-27 05:23:15','2019-07-27 05:23:15',NULL),(2,'история','History','istoriya',190,'2019-07-27 05:23:15','2019-07-27 05:23:15',NULL),(3,'культурология','Culturology','kulturologia',11,'2019-07-27 05:23:15','2019-07-27 05:23:15',NULL),(4,'образование','Pedagogy','education',10,'2019-07-27 05:23:15','2019-07-27 05:23:15',NULL),(5,'социология','Sociology','sociologiya',23,'2019-07-27 05:23:15','2019-07-27 05:23:15',NULL),(6,'философия','Philosophy','filosofiya',12,'2019-07-27 05:23:15','2019-07-27 05:23:15',NULL),(7,'экономика','Economy','ekonomika',22,'2019-07-27 05:23:15','2019-07-27 05:23:15',NULL);
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_job`
--

DROP TABLE IF EXISTS `user_job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_job` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL DEFAULT '1',
  `job_id` int(10) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `user_job_user_id_foreign` (`user_id`),
  KEY `user_job_job_id_foreign` (`job_id`),
  CONSTRAINT `user_job_job_id_foreign` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_job_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_job`
--

LOCK TABLES `user_job` WRITE;
/*!40000 ALTER TABLE `user_job` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alias` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `api_token` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `orcid` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_alias_unique` (`alias`),
  UNIQUE KEY `users_api_token_unique` (`api_token`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@la.fr','admin','$2y$10$4oGqaTdE4kPjgMRHy1JnVu2Qv1Yc3I8DPrfBXGkxK7CvE/9M9u9Z2','lDuB7i614FUmGuiY4YJPQa8ZniumOl6VtDdDEknB5VBqlS8OwpqxxDjEfY8G','admin',NULL,'8GMJqgnQBr','2019-07-27 05:21:23','2019-07-27 05:21:23',NULL),(2,'redac@la.fr','redac','$2y$10$bNKpZMqB87fEsy/Ccejs/e/mQvw1sBSJoL8YA3.BhwWJlsa29z54C',NULL,'redac',NULL,'Mi9jumhvbp','2019-07-27 05:21:23','2019-07-27 05:21:23',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-27 19:25:15
