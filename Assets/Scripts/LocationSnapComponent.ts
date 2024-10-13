@component
export class LocationSnapComponent extends BaseScriptComponent {
  startPos: vec3;

  onAwake() {
    this.startPos = this.getTransform().getLocalPosition();
  }

  resetPosition() {
    this.getTransform().setLocalPosition(this.startPos);
  }
}
