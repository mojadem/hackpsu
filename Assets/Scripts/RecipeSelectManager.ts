import { Interactable } from "SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable";
import { Main } from "./Main";
import { ChatGptCaller } from "./ChatGptTester";
import { Ingredients } from "./Ingredients";
import { LocationSnapComponent } from "./LocationSnapComponent";

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
  breakfastLocationSnap: LocationSnapComponent;

  @input
  lunchInteractable: Interactable;

  @input
  lunchRecipe: Text;

  @input
  lunchGptCaller: ChatGptCaller;

  @input
  lunchLocationSnap: LocationSnapComponent;

  @input
  dinnerInteractable: Interactable;

  @input
  dinnerRecipe: Text;

  @input
  dinnerGptCaller: ChatGptCaller;

  @input
  dinnerLocationSnap: LocationSnapComponent;

  @input
  ingredients: Ingredients;

  ingredientPrompt: string;

  onAwake() {
    this.createEvent("OnStartEvent").bind(() => {
      this.breakfastInteractable.onTriggerEnd.add(() => {
        this.main.selectRecipe(this.breakfastRecipe.text);
        this.breakfastLocationSnap.resetPosition();
      });
    });

    this.createEvent("OnStartEvent").bind(() => {
      this.lunchInteractable.onTriggerEnd.add(() => {
        this.main.selectRecipe(this.lunchRecipe.text);
        this.lunchLocationSnap.resetPosition();
      });
    });

    this.createEvent("OnStartEvent").bind(() => {
      this.dinnerInteractable.onTriggerEnd.add(() => {
        this.main.selectRecipe(this.dinnerRecipe.text);
        this.dinnerLocationSnap.resetPosition();
      });
    });

    this.ingredientPrompt = "";
  }

  regenerate() {
    this.breakfastGptCaller.callGpt(this.ingredientPrompt);
    this.lunchGptCaller.callGpt(this.ingredientPrompt);
    this.dinnerGptCaller.callGpt(this.ingredientPrompt);
  }

  submitIngredients() {
    this.ingredientPrompt = `
    The recipe should be one that is possible to make with the following ingredients:

    ${this.ingredients.getFormattedText()}
    `;

    print(this.ingredientPrompt);

    this.regenerate();
  }

  resetIngredients() {
    this.ingredients.clear();
    this.ingredientPrompt = "";
  }
}
