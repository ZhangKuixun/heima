/*
Navicat MySQL Data Transfer

Source Server         : link1
Source Server Version : 50726
Source Host           : 127.0.0.1:3306
Source Database       : z_stu

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2020-06-13 17:23:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for class
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `classname` varchar(10) NOT NULL,
  `room` int(10) NOT NULL,
  `total` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class
-- ----------------------------
INSERT INTO `class` VALUES ('1', '黑马1期', '107', '70');
INSERT INTO `class` VALUES ('2', '黑马2期', '105', '89');
INSERT INTO `class` VALUES ('3', '黑马3期', '208', '90');
INSERT INTO `class` VALUES ('4', '黑马4期', '201', '70');

-- ----------------------------
-- Table structure for stu
-- ----------------------------
DROP TABLE IF EXISTS `stu`;
CREATE TABLE `stu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `nickname` varchar(30) NOT NULL,
  `age` int(10) unsigned zerofill NOT NULL DEFAULT '0000000000',
  `tel` varchar(10) NOT NULL,
  `sex` varchar(10) NOT NULL DEFAULT 'm',
  `photo` varchar(50) NOT NULL,
  `classid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`) USING BTREE,
  KEY `classid` (`classid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stu
-- ----------------------------
