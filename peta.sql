/*
Navicat MySQL Data Transfer

Source Server         : database
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : peta

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2016-09-13 14:57:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dbd_kec
-- ----------------------------
DROP TABLE IF EXISTS `dbd_kec`;
CREATE TABLE `dbd_kec` (
  `kode` varchar(4) NOT NULL,
  `kecamatan` text NOT NULL,
  `jumlah` text NOT NULL,
  `kejadian` int(11) NOT NULL,
  `kematian` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `rt` varchar(255) NOT NULL,
  `rw` varchar(255) DEFAULT NULL,
  `kelurahan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of dbd_kec
-- ----------------------------
INSERT INTO `dbd_kec` VALUES ('1', 'Cinere', '113122', '0', '7', '0000-00-00', '', null, null);
INSERT INTO `dbd_kec` VALUES ('2', 'Limo ', '89601', '0', '2', '0000-00-00', '', null, null);
INSERT INTO `dbd_kec` VALUES ('3', 'Beji ', '83648', '15', '41', '0000-00-00', '', null, null);
INSERT INTO `dbd_kec` VALUES ('4', 'Pancoran Mas', '259124', '15', '5', '0000-00-00', '', null, null);
INSERT INTO `dbd_kec` VALUES ('5', 'Cipayung ', '155223', '15', '4', '0000-00-00', '', null, null);
INSERT INTO `dbd_kec` VALUES ('6', 'Sawangan ', '148815', '3', '14', '0000-00-00', '', null, null);
INSERT INTO `dbd_kec` VALUES ('7', 'Bojongsari', '114793', '15', '2', '0000-00-00', '', null, null);
INSERT INTO `dbd_kec` VALUES ('8', 'cilodong', '149674', '15', '45', '0000-00-00', '', null, null);
INSERT INTO `dbd_kec` VALUES ('9', 'Tapos ', '263602', '15', '15', '0000-00-00', '', null, null);
INSERT INTO `dbd_kec` VALUES ('10', 'Cimanggis ', '266879', '15', '2', '0000-00-00', '', null, null);
INSERT INTO `dbd_kec` VALUES ('11', 'Sukmajaya ', '275510', '15', '1', '0000-00-00', '', null, null);

-- ----------------------------
-- Table structure for dbd_kel
-- ----------------------------
DROP TABLE IF EXISTS `dbd_kel`;
CREATE TABLE `dbd_kel` (
  `kode` varchar(255) DEFAULT NULL,
  `kelurahan` varchar(255) DEFAULT NULL,
  `kejadian` varchar(255) DEFAULT NULL,
  `kematian` varchar(255) DEFAULT NULL,
  `penduduk` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of dbd_kel
-- ----------------------------
INSERT INTO `dbd_kel` VALUES ('1', 'pangkalan jati', '23', '1', '122');
INSERT INTO `dbd_kel` VALUES ('2', 'Gandul', '32', '2', '221');
INSERT INTO `dbd_kel` VALUES ('3', '	\r\npangkalan jati baru', '5', '3', '112');
INSERT INTO `dbd_kel` VALUES ('4', '	\r\nPancoran Mas', '1', '3', '221');
INSERT INTO `dbd_kel` VALUES ('5', '	\r\nDepok', '12', '1', '231');
INSERT INTO `dbd_kel` VALUES ('6', 'Pancoran Mas', '31', '5', '134');
INSERT INTO `dbd_kel` VALUES ('7', '	\r\nDepok Jaya', '12', '6', '221');
INSERT INTO `dbd_kel` VALUES ('8', 'Rangkapan Jaya', '23', '7', '112');
INSERT INTO `dbd_kel` VALUES ('9', 'Mampang', '13', '3', '333');
INSERT INTO `dbd_kel` VALUES ('10', '	\r\nRangkapan Jaya Baru', '12', '4', '111');

-- ----------------------------
-- Table structure for jumlah
-- ----------------------------
DROP TABLE IF EXISTS `jumlah`;
CREATE TABLE `jumlah` (
  `id` int(11) NOT NULL,
  `tahun` varchar(255) NOT NULL,
  `bulan` varchar(255) NOT NULL,
  `jumlah` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of jumlah
-- ----------------------------
