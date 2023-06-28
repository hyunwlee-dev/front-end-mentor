export enum Step {
  STEP1,
  STEP2,
  STEP3,
  STEP4,
  END,
}

export namespace Step {
  export function toNumber(step: Step): number {
    return Step[step];
  }
  export function fromNumber(step: number): Step {
    return Step[step];
  }
}
