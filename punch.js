var range=30;
export default class Punch extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y,texture)
    {
       super(scene, x, y,texture);
	  scene.add.existing(this);
    scene.physics.add.existing(this);
	scene.physics.world.enable(this);
	this.body.setAllowGravity(false);
	this.body.moves = false;
	this.active=0;
    }
	
	update (player,key,scene)
	{
	
		if (key.punch.isDown && player.canPunch==1)
		{
			if(player.direc==1)
			{		
					player.play('PrepAnimF');
			}
			if(player.direc==0)
			{
				player.play('PrepAnim');
			}
			
			player.canPunch=2;
			player.setVelocityX(0);
			player.canMove=0;
		}
	if (Phaser.Input.Keyboard.JustUp(key.punch)&& player.canPunch==2)
		
							{
								if(player.direc==1)
								{		
									
									this.x=player.x-range;
									player.play('PunchAnimF');
								}
								if(player.direc==0)
								{
									this.x=player.x+range;
									player.play('PunchAnim');
									
								}
								this.active=1;
								player.canPunch=0;
								
							}
							else
							{
							this.active=0;
							this.x=player.x;
							}
							
						this.y=player.y-15;
		
	}
}