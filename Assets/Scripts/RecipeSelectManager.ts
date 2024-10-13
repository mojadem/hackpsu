import { Interactable } from "SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable";

@component
export class NewScript extends BaseScriptComponent {
    @input
    breakfastInteractable: Interactable;

    @input
    lunchInteractable: Interactable;

    @input
    dinnerInteractable: Interactable;

    onAwake() {
        this.createEvent('OnStartEvent').bind(() => {
            this.breakfastInteractable.onTriggerEnd.add(() => {
                print('end')
            })
        })
    }
}
