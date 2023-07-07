export enum Step {
  STEP1,
  STEP2,
  STEP3,
  STEP4,
  END,
}

export namespace Step {
  export function toString(step: Step): string {
    return Step[step];
  }
  export function fromString(step: string): Step {
    return (Step as any)[step];
  }
}
