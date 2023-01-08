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

perdeu = new Sprite(452, 679, 131, 68),
jogar = new Sprite(299, 683, 131, 67),
obstaculo1 = new Sprite(774, 558, 89, 69),
