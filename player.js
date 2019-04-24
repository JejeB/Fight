var speed=600;
var speedup=800;
var speeddown=900;
var range=30;
var coef=0.5;

import Punch from './punch.js';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  
  
  constructor (scene, x, y,texture)
    {
		
       super(scene, x, y,texture);
	   scene.anims.create({  //Hide
        key: 'hide',
        frames: [
            { key: 'hide1' },
            { key: 'hide2' },
            { key: 'hide3' },
            { key: 'hide4', duration: 50 }
        ],
		 yoyo: true,
        frameRate: 8,
        repeat: -1
    });
	scene.anims.create({   //hideF
        key: 'hideF',
        frames: [
            { key: 'hideF1' },
            { key: 'hideF2' },
            { key: 'hideF3' },
            { key: 'hideF4', duration: 50 }
        ],
		 yoyo: true,
        frameRate: 8,
        repeat: -1
    });
	 scene.anims.create({  //PrepAnim
        key: 'PrepAnim',
        frames: [
            { key: 'punchframe1' },
			{ key: 'punchframe2' },
            { key: 'punchframe3', duration: 5 }
        ],
        frameRate: 30,
        
    });
	scene.anims.create({  //PrepAimF
        key: 'PrepAnimF',
        frames: [
            { key: 'punchframeF1' },
			{ key: 'punchframeF2' },
            { key: 'punchframeF3', duration: 5 }
        ],
        frameRate: 30,
        
    });
	 scene.anims.create({ //PucnhAnim
        key: 'PunchAnim',
        frames: [
            { key: 'punchframe4' },
			{ key: 'punchframe5' },
			{ key: 'punchframe5' },
			{ key: 'punchframe6' },
			{ key: 'punchframe7' },
			{ key: 'punchframe8' },
			{ key: 'punchframe9' },
            { key: 'punchframe10', duration: 5 }
        ],
        frameRate: 30,
        
    });
	 scene.anims.create({ //PunchAnimF
        key: 'PunchAnimF',
        frames: [
            { key: 'punchframeF4' },
			{ key: 'punchframeF5' },
			{ key: 'punchframeF5' },
			{ key: 'punchframeF6' },
			{ key: 'punchframeF7' },
			{ key: 'punchframeF8' },
			{ key: 'punchframeF9' },
            { key: 'punchframeF10', duration: 5 }
        ],
        frameRate: 30,
        
    });
	 scene.anims.create({ //BackAnim
        key: 'BackAnim',
        frames: [
            { key: 'punchframe11' },
			{ key: 'punchframe12' },
            { key: 'punchframe13', duration: 5 }
        ],
        frameRate: 30,
        
    });
	scene.anims.create({ //BackAnimF
        key: 'BackAnimF',
        frames: [
            { key: 'punchframeF11' },
			{ key: 'punchframeF12' },
            { key: 'punchframeF13', duration: 5 }
        ],
        frameRate: 30,
        
    });
	scene.anims.create({ //HurtAnim
        key: 'HurtAnim',
        frames: [
            { key: 'hurtframe0' },
			{ key: 'hurtframe1' },
			{ key: 'hurtframe2' },
			{ key: 'hurtframe3' },
			{ key: 'hurtframe3' },
            { key: 'hurtframe3', duration: 5 }
        ],
        frameRate: 20,
        
    });
	scene.anims.create({ //HurtAnimF
        key: 'HurtAnimF',
        frames: [
            { key: 'hurtframeF0' },
			{ key: 'hurtframeF1' },
			{ key: 'hurtframeF2' },
			{ key: 'hurtframeF3' },
			{ key: 'hurtframeF3' },
            { key: 'hurtframeF3', duration: 5 }
        ],
        frameRate: 20,
        
    });
	
	  scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);
	this.direc=0;
	this.jump=0;
	this.vie=50;
	this.frappe=1;
	this.canPunch=1;
	this.canMove=1;
	this.otherMove=0; //1 if a another force applying in X on the player
	this.punch1 =new Punch(scene,x,y,texture);
	this.play('hide');
	scene.add.existing(this.punch1);
    }
	recul(playerP) //The player as been kick check left or right
	{
		//console.log(this.anims.getCurrentKey());
		if(this.anims.getCurrentKey()=='HurtAnim' && this.anims.getProgress()!=1 && this.anims.getProgress()!=0)
		{
			this.canMove=0;
			
			if(playerP.direc==1)
			{
				
				this.setVelocityX(-800);
			}
			if(playerP.direc==0)
			{
				
				this.setVelocityX(800);
			}
		}
	
	}
	hurt(playerP)
	{
		if(playerP.punch1.active==1)
		{
		this.vie=this.vie-playerP.frappe;
		this.canPunch=0;
		this.play('HurtAnim');
		}
	}
	manageRight()
	{
		if(this.anims.getCurrentKey()=='HurtAnim' && this.anims.getProgress()==1)
		{
			this.play('hide');
			this.canPunch=1;
			this.canMove=1;
		}
		if(this.anims.getCurrentKey()=='PunchAnim' && this.anims.getProgress()==1)
		{
			this.play('BackAnim');
		}
		if(this.anims.getCurrentKey()=='BackAnim' && this.anims.getProgress()==1)
		{
			this.play('hide');
			this.canPunch=1;
			this.canMove=1;
		}
	}
	manageLeft()
	{
		if(this.anims.getCurrentKey()=='HurtAnim' && this.anims.getProgress()==1)
		{
			this.play('hideF');
			this.canPunch=1;
			this.canMove=1;
		}
		if(this.anims.getCurrentKey()=='PunchAnimF' && this.anims.getProgress()==1)
		{
			this.play('BackAnimF');
		}
		if(this.anims.getCurrentKey()=='BackAnimF' && this.anims.getProgress()==1)
		{
			this.play('hideF');
			this.canPunch=1;
			this.canMove=1;
		}
	}

	deplacement(key,scene,playerP)
	{
		this.recul(playerP);
		this.manageRight();
		this.manageLeft();
		this.punch1.update(this,key,scene);
		if(this.vie>40)
			{
				this.frappe=1;
		}
		else
		{
		this.frappe=5-(this.vie/10%10);
		}
		
		if(this.canMove==1)
		{
			
			if(key.left.isDown && this.direc==0)  //Changement de direction vers la gauche
				{
					this.play('hideF');
				}
		if(key.right.isDown && this.direc==1)  //Changement de direction vers la droite
				{		
					this.play('hide');
				}
			if (key.left.isDown)
			{
				this.direc=1;
				this.setVelocityX(-speed);
			}
			else if (key.right.isDown)
			{
				
				this.setVelocityX(speed);
				this.direc=0;
			}
			else
			{
				
				this.setVelocityX(0);
			}
			if (this.body.touching.down)
				{
					if (Phaser.Input.Keyboard.JustDown(key.up))
						{
							this.setVelocityY(-speedup);
						}
						this.jump=0;
				}
					else
				{
					if (key.down.isDown && this.jump<2)
						{
							this.setVelocityY(speeddown);
							
						}
						if (Phaser.Input.Keyboard.JustDown(key.up) && this.jump<1)
						{
							this.setVelocityY(-speedup);
							this.jump=this.jump+1;
						}
				}
		}
							
							
							
	}
	
}