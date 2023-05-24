import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent {
  //@ViewChild('justifiedText') justifiedText!: Element;

  TextComponent() {}

  ngAfterViewInit() {
    this.adjustSpaceBetweenWords();
  }

  adjustSpaceBetweenWords() {
    const element: any = document.getElementById('justifiedText');
    const text = element.innerText.trim();
    const words = text.split(' ');

    const adjustedText = words
      .map(
        (word: string) =>
          `<span style="display: inline-block; width: 50px; height: 20px;${word}</span>`
      )
      .join(' ');
    element.innerHTML = adjustedText;
  }
}
