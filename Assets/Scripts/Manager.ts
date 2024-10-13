import { ChatGPTEngine } from "Scripts/ChatGPT";
import { Ingredients } from "Scripts/Ingredients";

@component
export class Manager extends BaseScriptComponent {
    @input 
    ingredients: Ingredients

    @input
    chatGptEngine: ChatGPTEngine;

    getRecipe() {
        const ingredientText = this.ingredients.getFormattedText()
        this.chatGptEngine.requestRecipe(ingredientText)
    }
}
