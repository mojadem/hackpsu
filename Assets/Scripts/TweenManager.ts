declare global {
  var tweenManager: {
    startTween: (sceneObject: SceneObject, tweenName: string) => void;
  };
}

@component
export class Script extends BaseScriptComponent {}
