import { Interactable } from "SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable";
import { Main } from "./Main";
import { ChatGptCaller } from "./ChatGptTester";

@component
export class NewScript extends BaseScriptComponent {
  @input
  main: Main;

  @input
  breakfastInteractable: Interactable;

  @input
  breakfastRecipe: Text;

  @input
  breakfastGptCaller: ChatGptCaller;

  @input
  lunchInteractable: Interactable;

  @input
  lunchRecipe: Text;

  @input
  lunchGptCaller: ChatGptCaller;

  @input
  dinnerInteractable: Interactable;

  @input
  dinnerRecipe: Text;

  @input
  dinnerGptCaller: ChatGptCaller;

  onAwake() {
    this.createEvent("OnStartEvent").bind(() => {
      this.breakfastInteractable.onTriggerEnd.add(() => {
        this.main.selectRecipe(this.breakfastRecipe.text);
      });
    });

    this.createEvent("OnStartEvent").bind(() => {
      this.lunchInteractable.onTriggerEnd.add(() => {
        this.main.selectRecipe(this.lunchRecipe.text);
      });
    });

    this.createEvent("OnStartEvent").bind(() => {
      this.dinnerInteractable.onTriggerEnd.add(() => {
        this.main.selectRecipe(this.dinnerRecipe.text);
      });
    });
  }

  regenerate() {
    this.breakfastGptCaller.callGpt();
    this.lunchGptCaller.callGpt();
    this.dinnerGptCaller.callGpt();
  }
}
