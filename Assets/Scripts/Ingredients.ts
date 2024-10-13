@component
export class Ingredients extends BaseScriptComponent {
  @input
  textComponent: Text;

  ingredients: Array<string>;

  onAwake() {
    this.textComponent.text = "";
    this.ingredients = ["Egg", "Tomato", "Parsley"];
    this.updateText();
  }

  getFormattedText() {
    let text = "";

    this.ingredients.forEach((ingredient) => {
      text += `- ${ingredient}\n`;
    });

    return text;
  }

  updateText() {
    this.textComponent.text = this.getFormattedText();
  }

  addIngredient(ingredient: string) {
    ingredient = ingredient.replace(".", "");
    this.ingredients.push(ingredient);
    this.updateText();
  }

  clear() {
    this.ingredients = [];
    this.updateText();
  }
}
