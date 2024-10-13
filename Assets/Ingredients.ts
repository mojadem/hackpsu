@component
export class Ingredients extends BaseScriptComponent {
    @input
    textComponent: Text;

    ingredients: Array<string>;

    @input
    hello: string;

    onAwake() {
        this.textComponent.text = "- Test\n- Test2"
        this.ingredients = [];
    }

    updateText() {
        let text = ""

        this.ingredients.forEach((ingredient) => {
            text += `- ${ingredient}\n`
        })

        this.textComponent.text = text
    }

    helloWorld() {
        print("hello")
    }

    addIngredient(ingredient: string) {
        this.ingredients.push(ingredient)
        this.updateText()
    }
}
