import { Base } from "./base";

export class Group extends Base {
  render(n: number): void {
    return;
  }
  components: Base[] = [];
  constructor(options: any) {
    super(options);
    this.reset(options);
  }
  addComponent(c: Base) {
    this.components.push(c);
    c.ani = this.ani;
    this.reset({});
    c.reset({});
  }
  reset(options: any) {
    super.reset(options);
    if (this.components) {
      this.components.forEach((c) => {
        c.reset(options);
      });
    }
  }
  draw(n: number) {
    this.components.forEach((c) => {
      c.draw(n);
    });
  }
}
