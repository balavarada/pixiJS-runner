import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class Hero {
    constructor() {
        this.score = 0;
        this.dy = 0;
        this.jumpIndex = 0;
        this.platform = null;

        this.sprite = new PIXI.AnimatedSprite([
            Globals.resources["b0"].texture,
            Globals.resources["b2"].texture,
            Globals.resources["b3"].texture,
            Globals.resources["b4"].texture,
            Globals.resources["b5"].texture,
            Globals.resources["b7"].texture,
            Globals.resources["b8"].texture,
            Globals.resources["b9"].texture,
            Globals.resources["b10"].texture,
            Globals.resources["b11"].texture,
            Globals.resources["b12"].texture,
            Globals.resources["b13"].texture,
            Globals.resources["b14"].texture,
            Globals.resources["b15"].texture,
            Globals.resources["b16"].texture,
            Globals.resources["b17"].texture,
            Globals.resources["b18"].texture,
            Globals.resources["b19"].texture,
            Globals.resources["b20"].texture,
            Globals.resources["b21"].texture,
            Globals.resources["b22"].texture,
            Globals.resources["b23"].texture,
            Globals.resources["b24"].texture,
            Globals.resources["b25"].texture,
            Globals.resources["b26"].texture,
            Globals.resources["b27"].texture,
            Globals.resources["b28"].texture,
            Globals.resources["b29"].texture,
            Globals.resources["b20"].texture,
            Globals.resources["b31"].texture,
            Globals.resources["b32"].texture,
            Globals.resources["b33"].texture,
            Globals.resources["b34"].texture,
            Globals.resources["b35"].texture,
            Globals.resources["b36"].texture,
            Globals.resources["b37"].texture,
            Globals.resources["b38"].texture,
            Globals.resources["b39"].texture,
            Globals.resources["b40"].texture,
            Globals.resources["b41"].texture,
            Globals.resources["b42"].texture,
            Globals.resources["b43"].texture,
            Globals.resources["b44"].texture,
            Globals.resources["b45"].texture,
            Globals.resources["b46"].texture,
            Globals.resources["b47"].texture,
            Globals.resources["b48"].texture,
            Globals.resources["b49"].texture
        ]);
        this.sprite.x = 100;
        this.sprite.y = 100;
        this.sprite.loop = true;
        this.sprite.animationSpeed = 0.8;
        this.sprite.play();
    }

    collectDiamond() {
        ++this.score;
        this.sprite.emit("score");
    }

    startJump() {
        if (this.platform || this.jumpIndex === 1) {
            ++this.jumpIndex;
            this.platform = null;
            this.dy = -18;
        }
    }

    get left() {
        return this.sprite.x;
    }

    get right() {
        return this.left + this.sprite.width;
    }

    get top() {
        return this.sprite.y;
    }

    get bottom() {
        return this.top + this.sprite.height;
    }

    get nextbottom() {
        return this.bottom + this.dy;
    }

    stayOnPlatform(platform) {
        this.platform = platform;
        this.dy = 0;
        this.jumpIndex = 0;
        this.sprite.y = platform.top - this.sprite.height; //to keep on top of platform
    }

    moveByPlatform(platform) {
        this.sprite.x = platform.nextleft - this.sprite.width;
    }

    update() {
        if (!this.platform) {
            ++this.dy;
            this.sprite.y += this.dy;
        }

        if (this.sprite.y > window.innerHeight) {
            this.sprite.emit("die"); // Game over state;
        }
    }
}