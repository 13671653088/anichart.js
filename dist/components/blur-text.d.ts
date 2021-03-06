import { BlurTextOptions } from "../options/blur-text-options";
import { FadeText } from "./fade-text";
export declare class BlurText extends FadeText {
    private _blur;
    constructor(options: BlurTextOptions);
    reset(options: BlurTextOptions): void;
    preRender(n: number): void;
    render(n: number): void;
}
