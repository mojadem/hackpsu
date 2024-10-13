import { Interactable } from "SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable";

@component
export class ButtonManager extends BaseScriptComponent {
  @input
  interactable: Interactable;

  onAwake() {
    print("awake");
    this.interactable.onTriggerStart.add(() => {
      print("test");
    });
  }
}
