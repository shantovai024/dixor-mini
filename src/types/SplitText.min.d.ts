// File: src/utils/SplitText.min.d.ts

declare class SplitText {
  constructor(
    target: Element | string,
    vars?: {
      type?: string;
      linesClass?: string;
      wordsClass?: string;
      charsClass?: string;
      [key: string]: any;
    }
  );
  words: HTMLElement[];
  lines: HTMLElement[];
  chars: HTMLElement[];
  revert(): void;
}

export { SplitText };