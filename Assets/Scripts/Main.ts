import { PinchButton } from "SpectaclesInteractionKit/Components/UI/PinchButton/PinchButton";

@component
export class Main extends BaseScriptComponent {

    @input
    startButton: PinchButton;

    @input
    ghostChef: SceneObject;

    onAwake() {

    }

    onStart() {
        tweenManager.startTween(this.startButton.getSceneObject(), "start_button")

        const delay = this.createEvent("DelayedCallbackEvent")
        
        delay.bind(() => {
            this.startButton.getSceneObject().destroy()
        })

        delay.reset(2)
    }
}
