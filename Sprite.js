function Sprite(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas){
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}
//Sprites
var bg = new Sprite(0, 0, 600, 600),
spriteBoneco = new Sprite(707, 781, 68, 105),
spriteBonecoPula = new Sprite(840, 789, 36, 98),
spriteBonecoCorre = new Sprite(175, 708, 38, 44),
spriteBonecoHit = new Sprite(53, 711, 38, 43),

perdeu = new Sprite(4367, 1176, 373, 369),
jogar = new Sprite(3320, 1176, 373, 367),
jogar2 = new Sprite(3900, 1184, 373, 367),
fim = new Sprite(1800, 1448, 369, 361),
obstaculo1 = new Sprite(762, 420, 71, 79),
obstaculo2 = new Sprite(862, 445, 48, 53),
obstaculo3 = new Sprite(757, 540, 102, 86),
obstaculo4 = new Sprite(867, 537, 126, 76),
obstaculo5 = new Sprite(1006, 565, 51, 45),
obstaculo6 = new Sprite(1066, 557, 71, 68),
obstaculo7 = new Sprite(1154, 547, 88, 81),
obstaculo8 = new Sprite(796, 702, 48, 47),
obstaculo9 = new Sprite(876, 686, 76, 66),
obstaculo10 = new Sprite(977, 686, 56, 65),
obstaculo11 = new Sprite(1060, 686, 75, 65),
obstaculo12 = new Sprite(939, 429, 40, 65),
obstaculo13 = new Sprite(1183, 683, 45, 54),
spriteChao = new Sprite(0, 621, 688, 50),
bg2 = new Sprite(1205, 422, 1341, 532);
sprArvore = new Sprite(2142, 741, 2463, 1104);
sprBancos = new Sprite(1431, 24, 2322, 132);
sprArvorinhas = new Sprite(1272, 177, 1227, 195);
sprQuadra = new Sprite(723, 72, 1233, 309);
sprArbutoPer = new Sprite(1457, 575, 1995, 122);
sprBancosPer = new Sprite(1719, 597, 1983, 711);
lixeiraVer = new Sprite(202, 861, 93, 111);
lixeiraAzul = new Sprite(293, 861, 97, 105);
lixeiraVerme = new Sprite(17, 861, 91, 111);
lixeiraAma = new Sprite(111, 861, 91, 109);
lixeiras = new Sprite(989, 1709, 234, 70);

sprBancos2 = new Sprite(2888, 315, 860, 81);
sprQuadra2 = new Sprite(3156, 63, 365, 156);
sprArbutoPer2 = new Sprite(3624, 832, 567, 141);
bg3 = new Sprite(2917, 510, 1641, 132);

moca1 = new Sprite(12,1845,103,91);
moca2 = new Sprite(125,1845,103,91);
moca3 = new Sprite(349,1845,103,91);
policial = new Sprite(458,1845,103,91);
homem = new Sprite(237,1845,103,91);
cao = new Sprite(470,840,115,118);
caoCara = new Sprite(575, 1845, 96, 86);
dialogo1 = new Sprite(19, 1702, 78, 119);
dialogo2 = new Sprite(12, 1579, 89, 124);
dialogo3 = new Sprite(142, 1579, 53, 116);

cora = new Sprite(23, 1071, 64, 57);
coraSem = new Sprite(23, 1133, 63, 53);

enter = new Sprite(15, 1375, 141, 59);
fimIn = new Sprite(2542, 1398, 587, 487);
intro = new Sprite(4836, 980, 621, 595);

//var canvas, ctx, x = 50, y = 60, WIDTH = 600, HEIGHT = 600, title1 = new Image(), posicao = 0, num_posicao = 3;