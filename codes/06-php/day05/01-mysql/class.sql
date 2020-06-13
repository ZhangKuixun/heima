/*
Navicat MySQL Data Transfer

Source Server         : link1
Source Server Version : 50726
Source Host           : 127.0.0.1:3306
Source Database       : z_test

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2020-06-07 19:12:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for class
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `classname` varchar(20) NOT NULL,
  `room` int(10) NOT NULL,
  `total` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class
-- ----------------------------
INSERT INTO `class` VALUES ('1', '黑马21期', '203', '100');
INSERT INTO `class` VALUES ('2', '黑马22期', '105', '89');
INSERT INTO `class` VALUES ('3', '黑马23期', '208', '90');
INSERT INTO `class` VALUES ('4', '黑马24期', '201', '70');
