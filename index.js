
import Player from './player.js';
import Punch from './punch.js';

var platforms;
var player1;
var player2;
var key1;
var key2;
var ext;
var tex;
var v1;
var v2;
var punch1;
var punch2;
var test=0;
var victory1=0;
var victory2=0;
class Key
{
	constructor(l,r,u,d,p)
	{
	this.left=l;
	this.right=r;
	this.up=u;
	this.down=d;
	this.punch=p;
	}
}
function checkHurt1()
{
	player2.hurt(player1);
}
function checkHurt2()
{
	player1.hurt(player2);
}


class MyScene extends Phaser.Scene {

    constructor (config)
    {
        super(config);
    }

    preload ()
    {
       this.load.image('back', 'img/background.jpg');
	  this.load.image('plat1', 'img/plat.jpg');
	  this.load.image('ground', 'img/groud.jpg');
	  this.load.image('Bigplat','img/Bigplat.jpg');
	   this.load.image('BigplatVert','img/BigplatVert.jpg');
	   
	   this.load.image('dude', 'img/dud.png');
	   //Animation Hide
	   this.load.image('hide1','img/hide/Hideframes0000.png');
	   this.load.image('hide2','img/hide/Hideframes0001.png');
	   this.load.image('hide3','img/hide/Hideframes0002.png');
	   this.load.image('hide4','img/hide/Hideframes0003.png');
	   this.load.image('hide5','img/hide/Hideframes0004.png');
	    //Animation Hide F
	   this.load.image('hideF1','img/HideF/HideframesFlip0000.png');
	   this.load.image('hideF2','img/HideF/HideframesFlip0001.png');
	   this.load.image('hideF3','img/HideF/HideframesFlip0002.png');
	   this.load.image('hideF4','img/HideF/HideframesFlip0003.png');
	   this.load.image('hideF5','img/HideF/HideframesFlip0004.png');
	   //Aniation Punch
	   this.load.image('punchframe1','img/AHide/PunchFrames0000.png');
	   this.load.image('punchframe2','img/AHide/PunchFrames0001.png');
	   this.load.image('punchframe3','img/AHide/PunchFrames0002.png');
	   this.load.image('punchframe4','img/AHide/PunchFrames0003.png');
	   this.load.image('punchframe5','img/AHide/PunchFrames0004.png');
	   this.load.image('punchframe6','img/AHide/PunchFrames0005.png');
	   this.load.image('punchframe7','img/AHide/PunchFrames0006.png');
	   this.load.image('punchframe8','img/AHide/PunchFrames0007.png');
	   this.load.image('punchframe9','img/AHide/PunchFrames0008.png');
	   this.load.image('punchframe10','img/AHide/PunchFrames0009.png');
	   this.load.image('punchframe11','img/AHide/PunchFrames0010.png');
	   this.load.image('punchframe12','img/AHide/PunchFrames0011.png');
	   this.load.image('punchframe13','img/AHide/PunchFrames0012.png');
	    //Aniation Punch F
	   this.load.image('punchframeF1','img/PunchFlip/HurtFramesFlip0000.png');
	   this.load.image('punchframeF2','img/PunchFlip/HurtFramesFlip0001.png');
	   this.load.image('punchframeF3','img/PunchFlip/HurtFramesFlip0002.png');
	   this.load.image('punchframeF4','img/PunchFlip/HurtFramesFlip0003.png');
	   this.load.image('punchframeF5','img/PunchFlip/HurtFramesFlip0004.png');
	   this.load.image('punchframeF6','img/PunchFlip/HurtFramesFlip0005.png');
	   this.load.image('punchframeF7','img/PunchFlip/HurtFramesFlip0006.png');
	   this.load.image('punchframeF8','img/PunchFlip/HurtFramesFlip0007.png');
	   this.load.image('punchframeF9','img/PunchFlip/HurtFramesFlip0008.png');
	   this.load.image('punchframeF10','img/PunchFlip/HurtFramesFlip0009.png');
	   this.load.image('punchframeF11','img/PunchFlip/HurtFramesFlip0010.png');
	   this.load.image('punchframeF12','img/PunchFlip/HurtFramesFlip0011.png');
	   this.load.image('punchframeF13','img/PunchFlip/HurtFramesFlip0012.png');
	   //Animation Hurt
	   this.load.image('hurtframe0','img/Hurt/HurtFrames0000.png');
	   this.load.image('hurtframe1','img/Hurt/HurtFrames0001.png');
	   this.load.image('hurtframe2','img/Hurt/HurtFrames0002.png');
	   this.load.image('hurtframe3','img/Hurt/HurtFrames0003.png');
	   //Animation Hurt
	   this.load.image('hurtframeF0','img/HurtFlip/HurtFrames0000.png');
	   this.load.image('hurtframeF1','img/HurtFlip/HurtFrames0001.png');
	   this.load.image('hurtframeF2','img/HurtFlip/HurtFrames0002.png');
	   this.load.image('hurtframeF3','img/HurtFlip/HurtFrames0003.png');
    }
	
    create ()
    {

	//Background image
	this.add.image(540,360, 'back');

	//Platform declaration
	platforms = this.physics.add.staticGroup();
	platforms.create(540, 720, 'ground').refreshBody();
	platforms.create(540, 360, 'Bigplat').refreshBody();
	platforms.create(540, 360, 'BigplatVert').refreshBody();
	platforms.create(150,530, 'plat1').refreshBody();
	platforms.create(930,530, 'plat1').refreshBody();
	//Add player 1
	player1 = new Player(this, 100, 100, 'dude');
	this.add.existing(player1);
		//Add player 1 Key
		key1 = new Key(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C));
		//Add collisions
		this.physics.add.collider(player1, platforms);
		
		
	//Add player 2
	player2 = new Player(this, 800, 100, 'dude');
	
	this.add.existing(player1);
		//Add player 1 Key
		key2 = new Key(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J));
		//Add collisions
		this.physics.add.collider(player2, platforms);
	//Collision
//	this.physics.add.collider(player2, player1);
	this.physics.add.overlap(player1.punch1,player2,checkHurt1);
	this.physics.add.overlap(player2.punch1,player1,checkHurt2);

	//Txt
	ext = this.add.text(16, 16, 'p2x: 50', {fontSize: '22px', fill: 'white'});
	v1 = this.add.text(16, 56, 'Victory: 0', {fontSize: '22px', fill: 'white'});
	tex = this.add.text(16, 36, 'Punch1x: 50', {fontSize: '22px', fill: 'white'});
	v2= this.add.text(16, 76, 'Victory: 50', {fontSize: '22px', fill: 'white'});
	

    }
	
	
	update ()
	{
	player1.deplacement(key1,this,player2);
	player2.deplacement(key2,this,player1);	
	ext.setText('1-HP: ' +player1.vie);
	tex.setText('2-HP: ' +player2.vie);
	v1.setText('1-Victory: ' +victory1);
	v2.setText('2-Victory: ' +victory2);
	
	if (player1.vie<0)
		{
			victory2++;
			this.scene.restart();
		}
		if (player2.vie<0)
		{
			victory1++;
			this.scene.restart();
		}

}
}
	var config = {
	type: Phaser.AUTO,
	width: 1080,
	height: 720,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 2000 },
			debug: false
		}
	},
	scene: MyScene	
};
var game = new Phaser.Game(config);
