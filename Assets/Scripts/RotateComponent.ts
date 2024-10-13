@component
export class NewScript extends BaseScriptComponent {
  @input
  rotateSpeed: number;

  rotation: number;

  onAwake() {
    this.rotation = 0;
    this.rotateSpeed = 1;

    this.createEvent("UpdateEvent").bind(() => {});
  }
}
