export enum Step {
  STEP1,
  STEP2,
  STEP3,
  STEP4,
  END,
}

/* eslint-disabled */
export namespace Step {
  export function toNumber(step: Step): number {
    return Step[step];
  }
  export function fromNumber(step: string): Step {
    return (Step as any)[step];
  }
}
