import { Ingredients } from "Ingredients";

@component
export class SpeechRecognition extends BaseScriptComponent {
  @input
  vmlModule: VoiceMLModule;

  @input
  ingredients: Ingredients;

  options: VoiceML.ListeningOptions;

  onAwake() {
    print(this);
    this.options = VoiceML.ListeningOptions.create();
    this.options.speechRecognizer = VoiceMLModule.SpeechRecognizer.Default;
    this.options.shouldReturnAsrTranscription = true;
    this.vmlModule.onListeningUpdate.add((eventArgs) => {
      print(this);
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

    this.ingredients.helloWorld();
    this.ingredients.addIngredient("testing");
  }

  startTranscription() {
    print("start transcription");
    this.vmlModule.startListening(this.options);
  }

  stopTranscription() {
    print("stop transcription");
    this.vmlModule.stopListening();
  }

  onButtonToggle(on: boolean) {
    print(on);

    if (on) {
      this.startTranscription();
    } else {
      this.stopTranscription();
    }
  }
}
