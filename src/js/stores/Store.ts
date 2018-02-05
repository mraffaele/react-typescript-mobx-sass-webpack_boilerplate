import { observable, computed } from "mobx";
import { Message } from "../models/Message";

export default class Store {
  messages: Message[] = [
    { text: "Hello, World" },
    { text: "Lorem Ipsum" },
    { text: "Dolor Sit Amet" },
    { text: "Consectetur" },
    { text: "Adipiscing Elit" },
    { text: "Goodbye, World" }
  ];

  @observable currentMessageIndex: number = 0;

  @computed
  get currentMessage(): Message {
    return this.messages[this.currentMessageIndex];
  }

  selectNextMessage(): void {
    let nextIndex = this.currentMessageIndex + 1;
    if (nextIndex >= this.messages.length) nextIndex = 0;
    this.currentMessageIndex = nextIndex;
  }

  selectPrevMessage(): void {
    let prevIndex = this.currentMessageIndex - 1;
    if (prevIndex < 0) prevIndex = this.messages.length - 1;
    this.currentMessageIndex = prevIndex;
  }
}
