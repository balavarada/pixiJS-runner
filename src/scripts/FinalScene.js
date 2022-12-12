import * as PIXI from "pixi.js";
import { Background } from "./Background";
import { Globals } from "./Globals";
import { LabelScore } from "./LabelScore";
import { MainScene } from "./MainScene";

export class FinalScene {
    constructor(amount) {
        this.container = new PIXI.Container();
        this.createBackground();
        this.createPopup();
        this.createLabelScore(amount);
        this.createText();
        this.container.interactive = true;
        this.container.once("pointerdown", () => {
            Globals.scene.start(new MainScene());
        });
    }

    createBackground() {
        this.bg = new Background();
        this.container.addChild(this.bg.container);
    }
}