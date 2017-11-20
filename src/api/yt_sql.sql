/*
Navicat MySQL Data Transfer

Source Server         : lhj
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : yt

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-20 12:02:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods_list
-- ----------------------------
DROP TABLE IF EXISTS `goods_list`;
CREATE TABLE `goods_list` (
  `id` varchar(255) NOT NULL,
  `brand` char(255) DEFAULT NULL,
  `type` char(255) DEFAULT NULL,
  `price1` int(255) NOT NULL,
  `price2` int(255) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` char(255) DEFAULT NULL,
  `imgurl` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_list
-- ----------------------------
INSERT INTO `goods_list` VALUES ('21-398-4808', '艾欧维', '商场同款', '468', '528', '黑色', '[M,L,XL]', '[../img/g1.jpg,../img/g2.jpg,../img/g3.jpg]', '米思阳燕芷2017秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女');
INSERT INTO `goods_list` VALUES ('21-398-4809', '米思阳', '商场同款', '469', '529', '蓝色', '[M,L,XL]', '[../img/g6.jpg,../img/g5.jpg,../img/g4.jpg]', 'GLM男装秋季新款牛津纺衬衫054170007DS');
INSERT INTO `goods_list` VALUES ('21-398-4810', 'EMERSONBABY', '商场同款', '470', '530', '绿色', '[M,L,XL]', '[../img/g7.jpg,../img/g8.jpg,../img/g9.jpg]', '2017夏装新款针织衫C17LSQQ79133');
INSERT INTO `goods_list` VALUES ('21-398-4811', '小猪班纳', '商场同款', '471', '531', '紫色', '[M,L,XL]', '[../img/g12.jpg,../img/g11.jpg,../img/g10.jpg]', 'JOHN FAILUDE/约翰·费雷德长袖衬衫男修身青年格子商务休闲衬衣');
INSERT INTO `goods_list` VALUES ('21-398-4812', '爱華尚', '商场同款', '472', '532', '红色', '[M,L,XL]', '[../img/g13.jpg,../img/g14.jpg,../img/g15.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4813', 'ELLE', '商场同款', '473', '533', '天蓝色', '[M,L,XL]', '[../img/g18.jpg,../img/g17.jpg,../img/g16.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4814', 'JACK WOLFSKIN', '商场同款', '474', '534', '藏青色', '[M,L,XL]', '[../img/g19.jpg,../img/g20.jpg,../img/g21.jpg]', 'Tata/他她2017冬黑色时尚简约拉链方跟及踝靴女短靴20666DD7，35');
INSERT INTO `goods_list` VALUES ('21-398-4815', '美迪惠尔', '商场同款', '475', '535', '白色', '[M,L,XL]', '[../img/g24.jpg,../img/g23.jpg,../img/g22.jpg]', 'Teenmix/天美意2017冬专柜同款棕色牛剖层皮英伦风方跟女短靴AP861DD7 ');
INSERT INTO `goods_list` VALUES ('21-398-4816', '茵芙莎', '商场同款', '476', '536', '橙色', '[M,L,XL]', '[../img/g25.jpg,../img/g26.jpg,../img/g27.jpg]', '歌莉娅2017流苏单肩包女英伦风斜挎包时尚编织小包包500');
INSERT INTO `goods_list` VALUES ('21-398-4817', '古思奇', '商场同款', '477', '537', '黄色', '[M,L,XL]', '[../img/g30.jpg,../img/g29.jpg,../img/g28.jpg]', '古思奇小怪兽时尚休闲双肩包');
INSERT INTO `goods_list` VALUES ('21-398-4818', '卓凡尼.华伦天奴', '商场同款', '478', '538', '黄色', '[M,L,XL,XXL]', '[../img/g31.jpg,../img/g32.jpg,../img/g33.jpg]', '（自营）ELLE女包新品牛皮双肩包61818粉色');
INSERT INTO `goods_list` VALUES ('21-398-4819', '达贺尊爵', '商场同款', '479', '539', '白色', '[M,L,XL,XXL]', '[../img/g36.jpg,../img/g35.jpg,../img/g34.jpg]', '米思阳燕芷2018秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女');
INSERT INTO `goods_list` VALUES ('21-398-4820', '艾格森', '商场同款', '480', '540', '橙色', '[M,L,XL,XXL]', '[../img/g37.jpg,../img/g38.jpg,../img/g39.jpg]', 'GLM男装秋季新款牛津纺衬衫054170008DS');
INSERT INTO `goods_list` VALUES ('21-398-4821', '天美意', '可爱婴童', '481', '541', '黄色', '[M,L,XL,XXL]', '[../img/g42.jpg,../img/g41.jpg,../img/g40.jpg]', '2017夏装新款针织衫C17LSQQ79134');
INSERT INTO `goods_list` VALUES ('21-398-4822', '他她', '可爱婴童', '482', '542', '黄色', '[M,L,XL,XXL]', '[../img/g43.jpg,../img/g44.jpg,../img/g45.jpg]', 'JOHN FAILUDE/约翰·费雷德长袖衬衫男修身青年格子商务休闲衬衣');
INSERT INTO `goods_list` VALUES ('21-398-4823', '约翰费雷德', '可爱婴童', '483', '543', '蓝色', '[M,L,XL]', '[../img/g48.jpg,../img/g47.jpg,../img/g46.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4824', '丽莎小姐', '时尚名品', '484', '544', '绿色', '[M,L,XL]', '[../img/g51.jpg,../img/g50.jpg,../img/g49.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4825', '初语', '时尚名品', '485', '545', '紫色', '[M,L,XL]', '[../img/g52.jpg,../img/g53.jpg,../img/g54.jpg]', 'Tata/他她2017冬黑色时尚简约拉链方跟及踝靴女短靴20666DD7，36');
INSERT INTO `goods_list` VALUES ('21-398-4826', 'QEEXI', '时尚名品', '486', '546', '红色', '[M,L,XL]', '[../img/g57.jpg,../img/g56.jpg,../img/g55.jpg]', 'Teenmix/天美意2017冬专柜同款棕色牛剖层皮英伦风方跟女短靴AP861DD8 ');
INSERT INTO `goods_list` VALUES ('21-398-4827', '你好', '时尚名品', '487', '547', '天蓝色', '[M,L,XL]', '[../img/g58.jpg,../img/g59.jpg,../img/g60.jpg]', '歌莉娅2017流苏单肩包女英伦风斜挎包时尚编织小包包501');
INSERT INTO `goods_list` VALUES ('21-398-4828', 'hello', '时尚名品', '488', '548', '藏青色', '[M,L,XL]', '[../img/a1]', '古思奇小怪兽时尚休闲双肩包');
INSERT INTO `goods_list` VALUES ('21-398-4829', 'what', '时尚名品', '489', '549', '白色', '[M,L,XL]', '[../img/a2]', '（自营）ELLE女包新品牛皮双肩包61819粉色');
INSERT INTO `goods_list` VALUES ('21-398-4830', '艾欧维', '时尚名品', '490', '550', '橙色', '[M,L,XL]', '[../img/g19.jpg,../img/g20.jpg,../img/g21.jpg]', '米思阳燕芷2019秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女');
INSERT INTO `goods_list` VALUES ('21-398-4831', '米思阳', '时尚名品', '491', '551', '黄色', '[M,L,XL]', '[../img/g24.jpg,../img/g23.jpg,../img/g22.jpg]', 'GLM男装秋季新款牛津纺衬衫054170009DS');
INSERT INTO `goods_list` VALUES ('21-398-4832', '爱華尚', '时尚名品', '492', '552', '黄色', '[M,L,XL]', '[../img/g25.jpg,../img/g26.jpg,../img/g27.jpg]', '2017夏装新款针织衫C17LSQQ79135');
INSERT INTO `goods_list` VALUES ('21-398-4833', 'ELLE', '时尚名品', '493', '553', '黄色', '[M,L,XL]', '[../img/g30.jpg,../img/g29.jpg,../img/g28.jpg]', 'JOHN FAILUDE/约翰·费雷德长袖衬衫男修身青年格子商务休闲衬衣');
INSERT INTO `goods_list` VALUES ('21-398-4834', 'JACK WOLFSKIN', '时尚名品', '494', '554', '黄色', '[M,L,XL]', '[../img/g31.jpg,../img/g32.jpg,../img/g33.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4835', '美迪惠尔', '时尚名品', '495', '555', '黄色', '[S,M,L,XL]', '[../img/g36.jpg,../img/g35.jpg,../img/g34.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4836', '茵芙莎', '时尚名', '496', '556', '黑色', '[S,M,L,XL]', '[../img/g37.jpg,../img/g38.jpg,../img/g39.jpg]', 'Tata/他她2017冬黑色时尚简约拉链方跟及踝靴女短靴20666DD7，37');
INSERT INTO `goods_list` VALUES ('21-398-4837', '古思奇', '时尚名品', '497', '557', '黑色', '[S,M,L,XL]', '[../img/g42.jpg,../img/g41.jpg,../img/g40.jpg]', 'Teenmix/天美意2017冬专柜同款棕色牛剖层皮英伦风方跟女短靴AP861DD9 ');
INSERT INTO `goods_list` VALUES ('21-398-4838', '艾欧唯 2017夏装新款针织衫C17LSQQ79133', '时尚名品', '498', '558', '蓝色', '[S,M,L,XL]', '[../img/g43.jpg,../img/g44.jpg,../img/g45.jpg]', '歌莉娅2017流苏单肩包女英伦风斜挎包时尚编织小包包502');
INSERT INTO `goods_list` VALUES ('21-398-4839', '艾欧唯 2017夏装新款针织衫C17LSQQ79133', '时尚名品', '499', '559', '绿色', '[S,M,L,XL]', '[../img/g51.jpg,../img/g50.jpg,../img/g49.jpg]', '古思奇小怪兽时尚休闲双肩包');
INSERT INTO `goods_list` VALUES ('21-398-4840', '米思阳燕芷2017秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女', '潮流女装', '500', '560', '紫色', '[S,M,L,XL]', '[../img/g52.jpg,../img/g53.jpg,../img/g54.jpg]', '（自营）ELLE女包新品牛皮双肩包61820粉色');
INSERT INTO `goods_list` VALUES ('21-398-4841', 'EMERSONBABY', '潮流女装', '501', '561', '红色', '[S,M,L,XL]', '[../img/g57.jpg,../img/g56.jpg,../img/g55.jpg]', '米思阳燕芷2020秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女');
INSERT INTO `goods_list` VALUES ('21-398-4842', '小猪班纳', '潮流女装', '502', '562', '绿色', '[S,M,L,XL]', '[../img/g58.jpg,../img/g59.jpg,../img/g60.jpg]', 'GLM男装秋季新款牛津纺衬衫054170010DS');
INSERT INTO `goods_list` VALUES ('21-398-4843', '爱華尚', '潮流女装', '503', '563', '紫色', '[S,M,L,XL]', '[../img/a1]', '2017夏装新款针织衫C17LSQQ79136');
INSERT INTO `goods_list` VALUES ('21-398-4844', 'ELLE', '潮流女装', '504', '564', '红色', '[S,M,L,XL]', '[../img/a2]', 'JOHN FAILUDE/约翰·费雷德长袖衬衫男修身青年格子商务休闲衬衣');
INSERT INTO `goods_list` VALUES ('21-398-4845', 'JACK WOLFSKIN', '潮流女装', '505', '565', '天蓝色', '[S,M,L,XL]', '[../img/g19.jpg,../img/g20.jpg,../img/g21.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4846', '美迪惠尔', '潮流女装', '506', '566', '藏青色', '[M,L,XL]', '[../img/g24.jpg,../img/g23.jpg,../img/g22.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4847', '茵芙莎', '潮流女装', '507', '567', '白色', '[M,L,XL]', '[../img/g25.jpg,../img/g26.jpg,../img/g27.jpg]', 'Tata/他她2017冬黑色时尚简约拉链方跟及踝靴女短靴20666DD7，38');
INSERT INTO `goods_list` VALUES ('21-398-4848', '古思奇', '潮流女装', '508', '568', '橙色', '[M,L,XL]', '[../img/g36.jpg,../img/g35.jpg,../img/g34.jpg]', 'Teenmix/天美意2017冬专柜同款棕色牛剖层皮英伦风方跟女短靴AP861DD10 ');
INSERT INTO `goods_list` VALUES ('21-398-4849', '卓凡尼.华伦天奴', '潮流女装', '509', '569', '黄色', '[M,L,XL]', '[../img/g37.jpg,../img/g38.jpg,../img/g39.jpg]', '歌莉娅2017流苏单肩包女英伦风斜挎包时尚编织小包包503');
INSERT INTO `goods_list` VALUES ('21-398-4850', '达贺尊爵', '潮流女装', '510', '570', '黑色', '[M,L,XL]', '[../img/g42.jpg,../img/g41.jpg,../img/g40.jpg]', '古思奇小怪兽时尚休闲双肩包');
INSERT INTO `goods_list` VALUES ('21-398-4851', '艾格森', '潮流女装', '511', '571', '白色', '[M,L,XL]', '[../img/g43.jpg,../img/g44.jpg,../img/g45.jpg]', '（自营）ELLE女包新品牛皮双肩包61821粉色');
INSERT INTO `goods_list` VALUES ('21-398-4852', '天美意', '潮流女装', '512', '572', '橙色', '[M,L,XL]', '[../img/g51.jpg,../img/g50.jpg,../img/g49.jpg]', '米思阳燕芷2021秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女');
INSERT INTO `goods_list` VALUES ('21-398-4853', '他她', '可爱婴童', '513', '573', '黑色', '[M,L,XL]', '[../img/g52.jpg,../img/g53.jpg,../img/g54.jpg]', 'GLM男装秋季新款牛津纺衬衫054170011DS');
INSERT INTO `goods_list` VALUES ('21-398-4854', '约翰费雷德', '可爱婴童', '514', '574', '黑色', '[M,L,XL]', '[../img/g57.jpg,../img/g56.jpg,../img/g55.jpg]', '2017夏装新款针织衫C17LSQQ79137');
INSERT INTO `goods_list` VALUES ('21-398-4855', '丽莎小姐', '可爱婴童', '515', '575', '黑色', '[M,L,XL,XXL]', '[../img/g58.jpg,../img/g59.jpg,../img/g60.jpg]', 'JOHN FAILUDE/约翰·费雷德长袖衬衫男修身青年格子商务休闲衬衣');
INSERT INTO `goods_list` VALUES ('21-398-4856', '初语', '精品男装', '516', '576', '黑色', '[M,L,XL,XXL]', '[../img/a1]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4857', 'QEEXI', '精品男装', '517', '577', '白色', '[M,L,XL,XXL]', '[../img/a2]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4858', '你好', '精品男装', '518', '578', '橙色', '[M,L,XL,XXL]', '[../img/g19.jpg,../img/g20.jpg,../img/g21.jpg]', 'Tata/他她2017冬黑色时尚简约拉链方跟及踝靴女短靴20666DD7，39');
INSERT INTO `goods_list` VALUES ('21-398-4859', 'hello', '精品男装', '519', '579', '黄色', '[M,L,XL]', '[../img/g24.jpg,../img/g23.jpg,../img/g22.jpg]', 'Teenmix/天美意2017冬专柜同款棕色牛剖层皮英伦风方跟女短靴AP861DD11 ');
INSERT INTO `goods_list` VALUES ('21-398-4860', 'what', '精品男装', '520', '580', '绿色', '[M,L,XL]', '[../img/g42.jpg,../img/g41.jpg,../img/g40.jpg]', '歌莉娅2017流苏单肩包女英伦风斜挎包时尚编织小包包504');
INSERT INTO `goods_list` VALUES ('21-398-4861', '艾欧维', '精品男装', '521', '581', '紫色', '[M,L,XL]', '[../img/g43.jpg,../img/g44.jpg,../img/g45.jpg]', '古思奇小怪兽时尚休闲双肩包');
INSERT INTO `goods_list` VALUES ('21-398-4862', 'ELLE', '精品男装', '522', '582', '红色', '[M,L,XL]', '[../img/g48.jpg,../img/g47.jpg,../img/g46.jpg]', '（自营）ELLE女包新品牛皮双肩包61822粉色');
INSERT INTO `goods_list` VALUES ('21-398-4863', 'JACK WOLFSKIN', '精品男装', '523', '583', '绿色', '[M,L,XL]', '[../img/g51.jpg,../img/g50.jpg,../img/g49.jpg]', '米思阳燕芷2022秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女');
INSERT INTO `goods_list` VALUES ('21-398-4864', '美迪惠尔', '精品男装', '524', '584', '紫色', '[M,L,XL]', '[../img/g52.jpg,../img/g53.jpg,../img/g54.jpg]', 'GLM男装秋季新款牛津纺衬衫054170012DS');
INSERT INTO `goods_list` VALUES ('21-398-4865', '茵芙莎', '精品男装', '525', '585', '红色', '[M,L,XL]', '[../img/g57.jpg,../img/g56.jpg,../img/g55.jpg]', '2017夏装新款针织衫C17LSQQ79138');
INSERT INTO `goods_list` VALUES ('21-398-4866', '古思奇', '精品男装', '526', '586', '天蓝色', '[M,L,XL]', '[../img/g58.jpg,../img/g59.jpg,../img/g60.jpg]', 'JOHN FAILUDE/约翰·费雷德长袖衬衫男修身青年格子商务休闲衬衣');
INSERT INTO `goods_list` VALUES ('21-398-4867', '艾欧唯 2017夏装新款针织衫C17LSQQ79133', '精品男装', '527', '587', '藏青色', '[M,L,XL]', '[../img/a1]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4868', '艾欧唯 2017夏装新款针织衫C17LSQQ79133', '精品男装', '528', '588', '白色', '[M,L,XL]', '[../img/a2]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4869', '米思阳燕芷2017秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女', '可爱婴童', '529', '589', '橙色', '[M,L,XL]', '[../img/g19.jpg,../img/g20.jpg,../img/g21.jpg]', 'Tata/他她2017冬黑色时尚简约拉链方跟及踝靴女短靴20666DD7，40');
INSERT INTO `goods_list` VALUES ('21-398-4870', 'EMERSONBABY', '可爱婴童', '530', '590', '黄色', '[M,L,XL]', '[../img/g24.jpg,../img/g23.jpg,../img/g22.jpg]', 'Teenmix/天美意2017冬专柜同款棕色牛剖层皮英伦风方跟女短靴AP861DD12 ');
INSERT INTO `goods_list` VALUES ('21-398-4871', '小猪班纳', '可爱婴童', '531', '591', '黑色', '[M,L,XL]', '[../img/g25.jpg,../img/g26.jpg,../img/g27.jpg]', '歌莉娅2017流苏单肩包女英伦风斜挎包时尚编织小包包505');
INSERT INTO `goods_list` VALUES ('21-398-4872', '爱華尚', '时尚鞋靴', '532', '592', '白色', '[M,L,XL]', '[../img/g30.jpg,../img/g29.jpg,../img/g28.jpg]', '古思奇小怪兽时尚休闲双肩包');
INSERT INTO `goods_list` VALUES ('21-398-4873', 'ELLE', '时尚鞋靴', '533', '593', '橙色', '[M,L,XL]', '[../img/g31.jpg,../img/g32.jpg,../img/g33.jpg]', '（自营）ELLE女包新品牛皮双肩包61823粉色');
INSERT INTO `goods_list` VALUES ('21-398-4874', 'JACK WOLFSKIN', '时尚鞋靴', '534', '594', '黑色', '[M,L,XL]', '[../img/g36.jpg,../img/g35.jpg,../img/g34.jpg]', '米思阳燕芷2023秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女');
INSERT INTO `goods_list` VALUES ('21-398-4875', '美迪惠尔', '时尚鞋靴', '535', '595', '橙色', '[M,L,XL]', '[../img/g37.jpg,../img/g38.jpg,../img/g39.jpg]', 'GLM男装秋季新款牛津纺衬衫054170013DS');
INSERT INTO `goods_list` VALUES ('21-398-4876', '茵芙莎', '时尚鞋靴', '536', '596', '黑色', '[M,L,XL]', '[../img/g42.jpg,../img/g41.jpg,../img/g40.jpg]', '2017夏装新款针织衫C17LSQQ79139');
INSERT INTO `goods_list` VALUES ('21-398-4877', '古思奇', '时尚鞋靴', '537', '597', '黑色', '[M,L,XL]', '[../img/g43.jpg,../img/g44.jpg,../img/g45.jpg]', 'JOHN FAILUDE/约翰·费雷德长袖衬衫男修身青年格子商务休闲衬衣');
INSERT INTO `goods_list` VALUES ('21-398-4878', '卓凡尼.华伦天奴', '时尚鞋靴', '538', '598', '黑色', '[M,L,XL]', '[../img/g51.jpg,../img/g50.jpg,../img/g49.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4879', '达贺尊爵', '时尚鞋靴', '539', '599', '黑色', '[M,L,XL]', '[../img/g52.jpg,../img/g53.jpg,../img/g54.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4880', '艾格森', '时尚鞋靴', '540', '600', '白色', '[S,M,L,XL,XXL]', '[../img/g57.jpg,../img/g56.jpg,../img/g55.jpg]', 'Tata/他她2017冬黑色时尚简约拉链方跟及踝靴女短靴20666DD7，41');
INSERT INTO `goods_list` VALUES ('21-398-4881', '天美意', '时尚鞋靴', '541', '601', '橙色', '[S,M,L,XL,XXL]', '[../img/g58.jpg,../img/g59.jpg,../img/g60.jpg]', 'Teenmix/天美意2017冬专柜同款棕色牛剖层皮英伦风方跟女短靴AP861DD13 ');
INSERT INTO `goods_list` VALUES ('21-398-4882', '他她', '可爱婴童', '542', '602', '黄色', '[S,M,L,XL,XXL]', '[../img/a1]', '歌莉娅2017流苏单肩包女英伦风斜挎包时尚编织小包包506');
INSERT INTO `goods_list` VALUES ('21-398-4883', '约翰费雷德', '可爱婴童', '543', '603', '绿色', '[S,M,L,XL,XXL]', '[../img/a2]', '古思奇小怪兽时尚休闲双肩包');
INSERT INTO `goods_list` VALUES ('21-398-4884', '艾欧维', '时尚鞋靴', '544', '604', '紫色', '[S,M,L,XL,XXL]', '[../img/g19.jpg,../img/g20.jpg,../img/g21.jpg]', '（自营）ELLE女包新品牛皮双肩包61824粉色');
INSERT INTO `goods_list` VALUES ('21-398-4885', 'ELLE', '时尚鞋靴', '545', '605', '橙色', '[S,M,L,XL,XXL]', '[../img/g24.jpg,../img/g23.jpg,../img/g22.jpg]', '米思阳燕芷2024秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女');
INSERT INTO `goods_list` VALUES ('21-398-4886', 'JACK WOLFSKIN', '潮流箱包', '546', '606', '黄色', '[M,L,XL]', '[../img/g25.jpg,../img/g26.jpg,../img/g27.jpg]', 'GLM男装秋季新款牛津纺衬衫054170014DS');
INSERT INTO `goods_list` VALUES ('21-398-4887', '美迪惠尔', '潮流箱包', '547', '607', '黑色', '[M,L,XL]', '[../img/g36.jpg,../img/g35.jpg,../img/g34.jpg]', '2017夏装新款针织衫C17LSQQ79140');
INSERT INTO `goods_list` VALUES ('21-398-4888', '茵芙莎', '潮流箱包', '548', '608', '白色', '[M,L,XL]', '[../img/g37.jpg,../img/g38.jpg,../img/g39.jpg]', 'JOHN FAILUDE/约翰·费雷德长袖衬衫男修身青年格子商务休闲衬衣');
INSERT INTO `goods_list` VALUES ('21-398-4889', '古思奇', '潮流箱包', '549', '609', '橙色', '[M,L,XL]', '[../img/g42.jpg,../img/g41.jpg,../img/g40.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4890', '艾欧唯 2017夏装新款针织衫C17LSQQ79133', '潮流箱包', '550', '610', '黑色', '[M,L,XL]', '[../img/g43.jpg,../img/g44.jpg,../img/g45.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4891', '艾欧唯 2017夏装新款针织衫C17LSQQ79133', '潮流箱包', '551', '611', '橙色', '[M,L,XL]', '[../img/g51.jpg,../img/g50.jpg,../img/g49.jpg]', 'Tata/他她2017冬黑色时尚简约拉链方跟及踝靴女短靴20666DD7，42');
INSERT INTO `goods_list` VALUES ('21-398-4892', '米思阳燕芷2017秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女', '可爱婴童', '552', '612', '黑色', '[M,L,XL]', '[../img/g52.jpg,../img/g53.jpg,../img/g54.jpg]', 'Teenmix/天美意2017冬专柜同款棕色牛剖层皮英伦风方跟女短靴AP861DD14 ');
INSERT INTO `goods_list` VALUES ('21-398-4893', 'EMERSONBABY', '可爱婴童', '553', '613', '黑色', '[M,L,XL]', '[../img/g57.jpg,../img/g56.jpg,../img/g55.jpg]', '歌莉娅2017流苏单肩包女英伦风斜挎包时尚编织小包包507');
INSERT INTO `goods_list` VALUES ('21-398-4894', '小猪班纳', '潮流箱包', '554', '614', '黑色', '[M,L,XL]', '[../img/g42.jpg,../img/g41.jpg,../img/g40.jpg]', '古思奇小怪兽时尚休闲双肩包');
INSERT INTO `goods_list` VALUES ('21-398-4895', 'ELLE', '潮流箱包', '555', '615', '橙色', '[M,L,XL]', '[../img/g43.jpg,../img/g44.jpg,../img/g45.jpg]', '（自营）ELLE女包新品牛皮双肩包61825粉色');
INSERT INTO `goods_list` VALUES ('21-398-4896', 'JACK WOLFSKIN', '潮流箱包', '556', '616', '黄色', '[M,L,XL]', '[../img/g51.jpg,../img/g50.jpg,../img/g49.jpg]', '米思阳燕芷2025秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女');
INSERT INTO `goods_list` VALUES ('21-398-4897', '美迪惠尔', '潮流箱包', '557', '617', '黑色', '[M,L,XL]', '[../img/g52.jpg,../img/g53.jpg,../img/g54.jpg]', 'GLM男装秋季新款牛津纺衬衫054170015DS');
INSERT INTO `goods_list` VALUES ('21-398-4898', '茵芙莎', '潮流箱包', '558', '618', '黑色', '[M,L,XL]', '[../img/g57.jpg,../img/g56.jpg,../img/g55.jpg]', '2017夏装新款针织衫C17LSQQ79141');
INSERT INTO `goods_list` VALUES ('21-398-4899', '古思奇', '潮流箱包', '559', '619', '白色', '[M,L,XL]', '[../img/a1]', 'JOHN FAILUDE/约翰·费雷德长袖衬衫男修身青年格子商务休闲衬衣');
INSERT INTO `goods_list` VALUES ('21-398-4900', '卓凡尼.华伦天奴', '美容护肤', '560', '620', '橙色', '[M,L,XL]', '[../img/a2]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4901', '达贺尊爵', '美容护肤', '561', '621', '黄色', '[M,L,XL]', '[../img/g19.jpg,../img/g20.jpg,../img/g21.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4902', '艾格森', '美容护肤', '562', '622', '绿色', '[M,L,XL]', '[../img/g24.jpg,../img/g23.jpg,../img/g22.jpg]', 'Tata/他她2017冬黑色时尚简约拉链方跟及踝靴女短靴20666DD7，43');
INSERT INTO `goods_list` VALUES ('21-398-4903', '天美意', '美容护肤', '563', '623', '紫色', '[M,L,XL]', '[../img/g25.jpg,../img/g26.jpg,../img/g27.jpg]', 'Teenmix/天美意2017冬专柜同款棕色牛剖层皮英伦风方跟女短靴AP861DD15 ');
INSERT INTO `goods_list` VALUES ('21-398-4904', '他她', '美容护肤', '564', '624', '橙色', '[M,L,XL]', '[../img/g36.jpg,../img/g35.jpg,../img/g34.jpg]', '歌莉娅2017流苏单肩包女英伦风斜挎包时尚编织小包包508');
INSERT INTO `goods_list` VALUES ('21-398-4905', '约翰费雷德', '美容护肤', '565', '625', '黄色', '[M,L,XL]', '[../img/g37.jpg,../img/g38.jpg,../img/g39.jpg]', '古思奇小怪兽时尚休闲双肩包');
INSERT INTO `goods_list` VALUES ('21-398-4906', '艾欧维', '美容护肤', '566', '626', '黑色', '[M,L,XL]', '[../img/g42.jpg,../img/g41.jpg,../img/g40.jpg]', '（自营）ELLE女包新品牛皮双肩包61826粉色');
INSERT INTO `goods_list` VALUES ('21-398-4907', 'ELLE', '美容护肤', '567', '627', '黑色', '[M,L,XL]', '[../img/g43.jpg,../img/g44.jpg,../img/g45.jpg]', '米思阳燕芷2026秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女');
INSERT INTO `goods_list` VALUES ('21-398-4908', 'JACK WOLFSKIN', '美容护肤', '568', '628', '黑色', '[M,L]', '[../img/g52.jpg,../img/g53.jpg,../img/g54.jpg]', 'GLM男装秋季新款牛津纺衬衫054170016DS');
INSERT INTO `goods_list` VALUES ('21-398-4909', '美迪惠尔', '美容护肤', '569', '629', '白色', '[M,L]', '[../img/g57.jpg,../img/g56.jpg,../img/g55.jpg]', '2017夏装新款针织衫C17LSQQ79142');
INSERT INTO `goods_list` VALUES ('21-398-4910', '茵芙莎', '美容护肤', '570', '630', '橙色', '[M,L]', '[../img/g42.jpg,../img/g41.jpg,../img/g40.jpg]', 'JOHN FAILUDE/约翰·费雷德长袖衬衫男修身青年格子商务休闲衬衣');
INSERT INTO `goods_list` VALUES ('21-398-4911', '古思奇', '美容护肤', '571', '631', '黄色', '[M,L]', '[../img/g43.jpg,../img/g44.jpg,../img/g45.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4912', '艾欧唯 2017夏装新款针织衫C17LSQQ79133', '美容护肤', '572', '632', '绿色', '[M,L]', '[../img/g51.jpg,../img/g50.jpg,../img/g49.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4913', '米思阳燕芷2017秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女', '可爱婴童', '573', '633', '紫色', '[M,L]', '[../img/g52.jpg,../img/g53.jpg,../img/g54.jpg]', 'Tata/他她2017冬黑色时尚简约拉链方跟及踝靴女短靴20666DD7，44');
INSERT INTO `goods_list` VALUES ('21-398-4914', 'EMERSONBABY', '可爱婴童', '574', '634', '红色', '[M,L,XL]', '[../img/g57.jpg,../img/g56.jpg,../img/g55.jpg]', 'Teenmix/天美意2017冬专柜同款棕色牛剖层皮英伦风方跟女短靴AP861DD16 ');
INSERT INTO `goods_list` VALUES ('21-398-4915', '小猪班纳', '运动户外', '575', '635', '绿色', '[M,L,XL]', '[../img/a1]', '歌莉娅2017流苏单肩包女英伦风斜挎包时尚编织小包包509');
INSERT INTO `goods_list` VALUES ('21-398-4916', 'ELLE', '运动户外', '576', '636', '紫色', '[M,L,XL]', '[../img/a2]', '古思奇小怪兽时尚休闲双肩包');
INSERT INTO `goods_list` VALUES ('21-398-4917', 'JACK WOLFSKIN', '运动户外', '577', '637', '红色', '[M,L,XL]', '[../img/g19.jpg,../img/g20.jpg,../img/g21.jpg]', '（自营）ELLE女包新品牛皮双肩包61827粉色');
INSERT INTO `goods_list` VALUES ('21-398-4918', '美迪惠尔', '运动户外', '578', '638', '天蓝色', '[M,L,XL]', '[../img/g24.jpg,../img/g23.jpg,../img/g22.jpg]', '米思阳燕芷2027秋装新品修身半高领显瘦中裙拼接蕾丝性感连衣裙女');
INSERT INTO `goods_list` VALUES ('21-398-4919', '茵芙莎', '运动户外', '579', '639', '藏青色', '[M,L,XL]', '[../img/g25.jpg,../img/g26.jpg,../img/g27.jpg]', 'GLM男装秋季新款牛津纺衬衫054170017DS');
INSERT INTO `goods_list` VALUES ('21-398-4920', '古思奇', '运动户外', '580', '640', '白色', '[M,L,XL]', '[../img/g24.jpg,../img/g23.jpg,../img/g22.jpg]', '2017夏装新款针织衫C17LSQQ79143');
INSERT INTO `goods_list` VALUES ('21-398-4921', '卓凡尼.华伦天奴', '运动户外', '581', '641', '橙色', '[M]', '[../img/g25.jpg,../img/g26.jpg,../img/g27.jpg]', 'JOHN FAILUDE/约翰·费雷德长袖衬衫男修身青年格子商务休闲衬衣');
INSERT INTO `goods_list` VALUES ('21-398-4922', '达贺尊爵', '运动户外', '582', '642', '黄色', '[M]', '[../img/g36.jpg,../img/g35.jpg,../img/g34.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4923', '卓凡尼.华伦天奴', '运动户外', '583', '643', '紫色', '[M]', '[../img/g37.jpg,../img/g38.jpg,../img/g39.jpg]', 'COZYSTEPS秋冬新品羊皮毛一体豆豆鞋女鞋家居休闲鞋5D902');
INSERT INTO `goods_list` VALUES ('21-398-4924', '达贺尊爵', '运动户外', '584', '644', '红色', '[M]', '[../img/g42.jpg,../img/g41.jpg,../img/g40.jpg]', 'Tata/他她2017冬黑色时尚简约拉链方跟及踝靴女短靴20666DD7，45');
INSERT INTO `goods_list` VALUES ('21-398-4925', '艾格森', '运动户外', '585', '645', '天蓝色', '[M]', '[../img/g43.jpg,../img/g44.jpg,../img/g45.jpg]', 'Teenmix/天美意2017冬专柜同款棕色牛剖层皮英伦风方跟女短靴AP861DD17 ');
INSERT INTO `goods_list` VALUES ('21-398-4926', '天美意', '运动户外', '586', '646', '藏青色', '[M]', '[../img/g52.jpg,../img/g53.jpg,../img/g54.jpg]', '歌莉娅2017流苏单肩包女英伦风斜挎包时尚编织小包包510');
INSERT INTO `goods_list` VALUES ('21-398-4927', '他她', '运动户外', '587', '647', '白色', '[M,L,XL]', '[../img/g57.jpg,../img/g56.jpg,../img/g55.jpg]', '古思奇小怪兽时尚休闲双肩包');

-- ----------------------------
-- Table structure for sjdh
-- ----------------------------
DROP TABLE IF EXISTS `sjdh`;
CREATE TABLE `sjdh` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type2` varchar(255) DEFAULT '名品',
  `type3` varchar(255) DEFAULT '品牌',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sjdh
-- ----------------------------
INSERT INTO `sjdh` VALUES ('1', '新品', '名品', '男装');
INSERT INTO `sjdh` VALUES ('2', 'T恤', '名品', '男装');
INSERT INTO `sjdh` VALUES ('3', 'POLO衫', '名品', '男装');
INSERT INTO `sjdh` VALUES ('4', '裤装', '名品', '男装');
INSERT INTO `sjdh` VALUES ('5', '衬衫', '名品', '男装');
INSERT INTO `sjdh` VALUES ('6', '新品', '名品', '女装');
INSERT INTO `sjdh` VALUES ('7', 'T恤', '名品', '女装');
INSERT INTO `sjdh` VALUES ('8', '衬衫', '名品', '女装');
INSERT INTO `sjdh` VALUES ('9', '裤装', '名品', '女装');
INSERT INTO `sjdh` VALUES ('10', '裙装', '名品', '女装');
INSERT INTO `sjdh` VALUES ('11', '新品', '名品', '鞋靴');
INSERT INTO `sjdh` VALUES ('12', '女士单鞋', '名品', '鞋靴');
INSERT INTO `sjdh` VALUES ('13', '男鞋', '名品', '鞋靴');
INSERT INTO `sjdh` VALUES ('14', '新品', '名品', '女包');
INSERT INTO `sjdh` VALUES ('15', '手提斜挎包', '名品', '女包');
INSERT INTO `sjdh` VALUES ('16', '单肩包', '名品', '女包');
INSERT INTO `sjdh` VALUES ('17', '钱夹', '名品', '女包');
INSERT INTO `sjdh` VALUES ('18', '手拿包', '名品', '女包');
INSERT INTO `sjdh` VALUES ('19', '新品', '名品', '男包');
INSERT INTO `sjdh` VALUES ('20', '钱包', '名品', '男包');
INSERT INTO `sjdh` VALUES ('21', '单肩包', '名品', '男包');
INSERT INTO `sjdh` VALUES ('22', '手拿包', '名品', '男包');
INSERT INTO `sjdh` VALUES ('23', '手提包', '名品', '男包');
INSERT INTO `sjdh` VALUES ('24', '新品', '名品', '配饰');
INSERT INTO `sjdh` VALUES ('25', '围巾', '名品', '配饰');
INSERT INTO `sjdh` VALUES ('26', '帽子', '名品', '配饰');
INSERT INTO `sjdh` VALUES ('27', '腰带', '名品', '配饰');
INSERT INTO `sjdh` VALUES ('28', '童装', '名品', '婴童');
INSERT INTO `sjdh` VALUES ('29', '童装', '名品', '婴童');
INSERT INTO `sjdh` VALUES ('30', '婴童配饰', '名品', '婴童');
INSERT INTO `sjdh` VALUES ('31', ' BURBERRY', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('32', ' FERRAGAMO', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('33', ' GUCCI', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('34', ' COACH', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('35', ' ARMANI JEANS', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('36', ' DIESEL', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('37', ' VERSACE', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('38', ' MAX&CO', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('39', ' FRED PERRY', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('40', ' CELINE', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('41', ' SPORTMAX', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('42', ' MAX MARA', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('43', ' MICHAEL KORS', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('44', ' ZEGNA ', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('45', ' FENDI ', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('46', ' EMPORIO ARMANI ', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('47', ' BALLY ', '名品', '品牌');
INSERT INTO `sjdh` VALUES ('48', ' ALEXANDER MCQUEEN ', '名品', '品牌');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` char(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` char(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '张三', '000000', '男', '33333333333');
INSERT INTO `user` VALUES ('2', '李四', '000000', '女', '44444444444');
INSERT INTO `user` VALUES ('3', '王尼玛', 'qwer1234', '男', '18720731371');
INSERT INTO `user` VALUES ('18', '李海静', 'mysql00', '男', '18720731372');
SET FOREIGN_KEY_CHECKS=1;
