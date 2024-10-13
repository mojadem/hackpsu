import { PinchButton } from "SpectaclesInteractionKit/Components/UI/PinchButton/PinchButton";
import { ChatGptManager } from "./ChatGptManager";

@component
export class Main extends BaseScriptComponent {
  @input
  startButton: PinchButton;

  @input
  ghostChef: SceneObject;

  @input
  recipeSelectMenu: SceneObject;

  @input
  recipeInfo: SceneObject;

  @input
  recipeGpt: ChatGptManager;

  @input
  recipeText: Text;

  onAwake() {
    this.createEvent("OnStartEvent").bind(() => {
      this.recipeSelectMenu.enabled = false;
      this.recipeInfo.enabled = false;
    });
  }

  onStart() {
    tweenManager.startTween(this.startButton.getSceneObject(), "start_button");

    const delay = this.createEvent("DelayedCallbackEvent");

    delay.bind(() => {
      this.startButton.getSceneObject().destroy();
      this.recipeSelectMenu.enabled = true;
    });

    delay.reset(2);
  }

  selectRecipe(recipeName: string) {
    this.recipeSelectMenu.enabled = false;
    this.recipeInfo.enabled = true;

    const prompt = `
    Create a delicious and healthy recipe given the following recipe name: ${recipeName}. Output only the recipe and no extra text.
    
    The recipe should repeat the ingredients at the top, clearly outline the steps to make the recipe, and provide a brief summary of nutrition estimates at the end.

    The summary should be brief and concise, include time measurements for each step, and be around 150 words (but don't display the word count), and outputted in plain text instead of Markdown.
    `;

    this.recipeGpt.chat(prompt);
  }

  back() {
    this.recipeText.text = "Loading recipe...";
    this.recipeSelectMenu.enabled = true;
    this.recipeInfo.enabled = false;
  }
}
