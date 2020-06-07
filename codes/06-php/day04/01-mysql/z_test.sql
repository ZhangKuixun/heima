/*
Navicat MySQL Data Transfer

Source Server         : link1
Source Server Version : 50726
Source Host           : 127.0.0.1:3306
Source Database       : z_test

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2020-06-07 16:48:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for stu
-- ----------------------------
DROP TABLE IF EXISTS `stu`;
CREATE TABLE `stu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` varchar(10) NOT NULL DEFAULT 'm',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stu
-- ----------------------------
INSERT INTO `stu` VALUES ('8', '张红星', '12', 'f');
INSERT INTO `stu` VALUES ('2', '老张', '20', 'f');
INSERT INTO `stu` VALUES ('3', '才才', '18', 'f');
INSERT INTO `stu` VALUES ('4', '涛涛', '26', 'm');
INSERT INTO `stu` VALUES ('5', '汪汪', '19', 'f');
INSERT INTO `stu` VALUES ('6', '丽丽', '12', 'm');
INSERT INTO `stu` VALUES ('9', '张艺馨', '56', 'm');
INSERT INTO `stu` VALUES ('10', '周星驰', '15', 'm');
INSERT INTO `stu` VALUES ('11', '星星', '23', 'm');
