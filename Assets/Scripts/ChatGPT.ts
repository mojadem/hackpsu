declare global {
  var chatGpt: {
    completions: (
      request: {
        temperature: number;
        messages: { role: string; content: string }[];
      },
      callback: (errorStatus: any, response: any) => void,
    ) => void;
  };
}

@component
export class ChatGPTEngine extends BaseScriptComponent {
  @input
  recipeText: Text;

  requestRecipe(ingredientsText: string) {
    let prompt = `
    Create a delicious and healthy recipe given the following ingredients. Output only the recipe and no extra text.
    
    The recipe should repeat the ingredients at the top, clearly outline the steps to make the recipe, and provide a brief summary of nutrition estimates at the end.

    The summary should be brief and concise, include time measurements for each step, and be around 150 words (but don't display the word count), and outputted in plain text instead of Markdown.

    Ingredients:

    ${ingredientsText}
    `;

    const request = {
      temperature: 1,
      messages: [{ role: "user", content: prompt }],
    };

    chatGpt.completions(request, (errorStatus: any, response: any) => {
      print('test')
      if (!errorStatus && typeof response === "object") {
        this.recipeText.text = response.choices[0].message.content;
      } else {
        print("Error in response:" + JSON.stringify(response));
      }
    });
  }
}
