/*
Navicat MySQL Data Transfer

Source Server         : link1
Source Server Version : 50726
Source Host           : 127.0.0.1:3306
Source Database       : z_test

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2020-06-07 19:12:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `age` int(11) unsigned zerofill NOT NULL,
  `sex` varchar(10) NOT NULL DEFAULT 'm',
  `classid` int(10) unsigned zerofill NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`) USING BTREE,
  KEY `classid` (`classid`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('1', '黄老师', '00000000016', 'm', '0000000001');
INSERT INTO `teacher` VALUES ('2', '王老师', '00000000025', 'm', '0000000002');
INSERT INTO `teacher` VALUES ('3', '李老师', '00000000020', 'm', '0000000001');
INSERT INTO `teacher` VALUES ('4', '苍老师', '00000000034', 'm', '0000000003');
INSERT INTO `teacher` VALUES ('5', '欧老师', '00000000023', 'm', '0000000000');
INSERT INTO `teacher` VALUES ('6', '胡老师', '00000000050', 'm', '0000000001');
INSERT INTO `teacher` VALUES ('7', '沈老师', '00000000024', 'm', '0000000004');
