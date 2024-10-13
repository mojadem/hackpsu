import { Ingredients } from "Scripts/Ingredients";

@component
export class SpeechRecognition extends BaseScriptComponent {
  @input
  vmlModule: VoiceMLModule;

  @input
  ingredients: Ingredients;

  options: VoiceML.ListeningOptions;

  onAwake() {
    this.options = VoiceML.ListeningOptions.create();
    this.options.speechRecognizer = VoiceMLModule.SpeechRecognizer.Default;
    this.options.shouldReturnAsrTranscription = true;

    this.vmlModule.onListeningUpdate.add((eventArgs) => {
      if (eventArgs.transcription.trim() == "") {
        return;
      }
      print("Transcription: " + eventArgs.transcription);

      if (!eventArgs.isFinalTranscription) {
        return;
      }
      print("Final Transcription: " + eventArgs.transcription);

      this.ingredients.addIngredient(eventArgs.transcription);
    });
  }

  startTranscription() {
    print("start transcription");
    print(JSON.stringify(this.vmlModule));
    this.vmlModule.startListening(this.options);
  }

  stopTranscription() {
    print("stop transcription");
    this.vmlModule.stopListening();
  }

  onButtonToggle(on: boolean) {
    if (on) {
      this.startTranscription();
    } else {
      this.stopTranscription();
    }
  }
}
