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
export class ChatGptManager extends BaseScriptComponent {
  @input
  chatOutput: Text;

  chat(prompt: string) {
    print(`LLM call with prompt ${prompt}`);

    const request = {
      temperature: 1,
      messages: [{ role: "user", content: prompt }],
    };

    chatGpt.completions(request, (errorStatus: any, response: any) => {
      if (!errorStatus && typeof response === "object") {
        this.chatOutput.text = response.choices[0].message.content;
      } else {
        print("Error in response:" + JSON.stringify(response));
      }
    });
  }
}
