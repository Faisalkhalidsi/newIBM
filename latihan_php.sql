/*
Navicat MySQL Data Transfer

Source Server         : database
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : latihan_php

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2016-09-13 14:56:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for pasien
-- ----------------------------
DROP TABLE IF EXISTS `pasien`;
CREATE TABLE `pasien` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `kepala_keluarga` varchar(25) NOT NULL,
  `jenis_kelamin` varchar(1) NOT NULL,
  `umur` varchar(3) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `mulai_sakit` varchar(255) NOT NULL,
  `rumah_sakit` varchar(50) NOT NULL,
  `kondisi_akhir` varchar(50) NOT NULL,
  `bulan` int(2) NOT NULL,
  `kecamatan` varchar(25) NOT NULL,
  `tahun` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of pasien
-- ----------------------------
INSERT INTO `pasien` VALUES ('3', 'Erwin', 'L', '3', 'Riani', 'Jl. Bunga Bangsa Nomor 3', '12 Jan 2016', 'PKM Pancoran Mas', '1', '1', '', '2016');
INSERT INTO `pasien` VALUES ('5', 'Dianto', 'P', '4', 'Linus Torvalds', 'Jl. Bunga Bangsa Nomor 3', '12 Jan 2016', 'PKM Pancoran Mas', '2', '1', '', '2016');
INSERT INTO `pasien` VALUES ('6', 'Sasri', 'L', '5', 'Richard Stallman', 'Jl. Bunga Bangsa Nomor 3', '12 Jan 2016', 'PKM Pancoran Mas', '2', '8', '', '2016');
INSERT INTO `pasien` VALUES ('7', 'Nirwan', 'L', '7', 'Matt Mullenweg', 'Jl. Bunga Bangsa Nomor 3', '12 Jan 2016', 'PKM Pancoran Mas', '2', '8', '', '2016');
INSERT INTO `pasien` VALUES ('12', 'Ari', 'P', '15', 'santi', 'Jl. Bunga Bangsa Nomor 3', '12 Jan 2016', 'PKM Pancoran Mas', '1', '8', '', '2016');
INSERT INTO `pasien` VALUES ('13', 'Suganda', 'P', '15', 'Almar', 'Jl. Bunga Bangsa Nomor 3', '12 Jan 2016', 'PKM Pancoran Mas', '1', '8', '', '2016');
INSERT INTO `pasien` VALUES ('20', 'Sardi', 'L', '16', 'Rasmuss', 'Jl. Bunga Bangsa Nomor 3', '12 Jan 2016', 'PKM Pancoran Mas', '1', '8', '', '2016');
INSERT INTO `pasien` VALUES ('21', 'Samir', 'L', '13', 'santi', 'Jl. Bunga Bangsa Nomor 3', '12 Jan 2016', 'PKM Pancoran Mas', '1', '8', '', '2016');
INSERT INTO `pasien` VALUES ('22', 'Ardi', 'L', '12', 'suganda', 'Jl. Bunga Bangsa Nomor 3', '12 Jan 2016', 'PKM Pancoran Mas', '1', '8', '', '2016');
INSERT INTO `pasien` VALUES ('23', 'Rizal', 'L', '12', 'Rasmuss', 'Jl. Bunga Bangsa Nomor 3', '12 Jan 2016', 'PKM Pancoran Mas', '1', '9', '', '2016');
INSERT INTO `pasien` VALUES ('24', 'Ardi', 'L', '19', 'Rasmi', 'Jl. Kebangsaaan Nomor 5', '14 Agustus 2016', '', '1', '9', '', '2016');
