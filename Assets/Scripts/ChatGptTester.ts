import { ChatGptManager } from "./ChatGptManager";

@component
export class ChatGptCaller extends BaseScriptComponent {
  @input
  prompt: string;

  @input
  isActive: boolean;

  @input
  chatGptManager: ChatGptManager;

  onAwake() {
    this.createEvent("OnStartEvent").bind(() => {
      if (!this.isActive) {
        return;
      }

      this.callGpt("");
    });
  }

  callGpt(appendToPrompt: string) {
    this.chatGptManager.chat(this.prompt + appendToPrompt);
  }
}
