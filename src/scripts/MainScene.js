import * as PIXI from "pixi.js";
import { Globals } from "./Globals";
import { Platforms } from "./Platforms";
import { Background } from "./Background";

export class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        // Globals.resources.music.sound.play({
        //     loop: true,
        //     volume: 0.2
        // });
        this.createBackground();
        this.createPlatforms();
    }

    createBackground() {
        this.bg = new Background();
        this.container.addChild(this.bg.container);
    }

    createPlatforms() {
        this.platforms = new Platforms();
        this.container.addChild(this.platforms.container);
    }

    update(dt) {
        this.bg.update(dt);
    }
}