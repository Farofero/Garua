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
spriteBoneco = new Sprite(115, 703, 30, 48),
spriteBonecoPula = new Sprite(242, 712, 35, 39),
spriteBonecoCorre = new Sprite(175, 708, 38, 44),
spriteBonecoHit = new Sprite(53, 711, 38, 43),

perdeu = new Sprite(4367, 1176, 373, 369),
jogar = new Sprite(3320, 1176, 373, 367),
jogar2 = new Sprite(3900, 1184, 373, 367),
fim = new Sprite(1713, 1383, 2288, 1880),
obstaculo1 = new Sprite(774, 558, 89, 69),
obstaculo2 = new Sprite(886, 495, 101, 136),
obstaculo3 = new Sprite(995, 554, 83, 81),
obstaculo4 = new Sprite(1093, 544, 55, 90),
obstaculo5 = new Sprite(1151, 553, 142, 78),
obstaculo6 = new Sprite(781, 663, 88, 107),
obstaculo7 = new Sprite(868, 692, 117, 69),
obstaculo8 = new Sprite(983, 657, 61, 102),
obstaculo9 = new Sprite(1053, 635, 98, 122),
obstaculo10 = new Sprite(1161, 649, 97, 112),
obstaculo11 = new Sprite(766, 383, 90, 113),
obstaculo12 = new Sprite(854, 388, 71, 108),
obstaculo13 = new Sprite(924, 387, 77, 103),
obstaculo14 = new Sprite(1005, 394, 69, 90),
obstaculo15 = new Sprite(1080, 400, 83, 90),
spriteChao = new Sprite(0, 621, 687, 62),
bg2 = new Sprite(1205, 422, 1341, 532);
sprArvore = new Sprite(2142, 741, 2463, 1104);
sprBancos = new Sprite(1431, 24, 2322, 132);
sprArvorinhas = new Sprite(1281, 177, 2433, 387);
sprQuadra = new Sprite(723, 72, 1233, 309);
sprArbutoPer = new Sprite(1457, 575, 1995, 672);
sprBancosPer = new Sprite(1719, 597, 1983, 711);
lixeiraVer = new Sprite(202, 861, 93, 111);
lixeiraAzul = new Sprite(293, 861, 97, 105);
lixeiraVerme = new Sprite(17, 861, 91, 111);
lixeiraAma = new Sprite(111, 861, 91, 109);
lixeiras = new Sprite(989, 1709, 234, 70);

sprBancos2 = new Sprite(2877, 309, 3789, 417);
sprQuadra2 = new Sprite(3156, 63, 3561, 243);
sprArbutoPer2 = new Sprite(3624, 759, 4179, 888);
bg3 = new Sprite(2929, 504, 4545, 645);

moca1 = new Sprite(12,1845,103,91);
moca2 = new Sprite(125,1845,103,91);
moca3 = new Sprite(349,1845,103,91);
policial = new Sprite(458,1845,103,91);
homem = new Sprite(237,1845,103,91);
cao = new Sprite(470,840,115,118);
caoCara = new Sprite(473, 846, 62, 55);

cora = new Sprite(23, 1071, 64, 57);
coraSem = new Sprite(23, 1133, 63, 53);

//var canvas, ctx, x = 50, y = 60, WIDTH = 600, HEIGHT = 600, title1 = new Image(), posicao = 0, num_posicao = 3;