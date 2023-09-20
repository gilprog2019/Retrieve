// helloBinding.js
import { LightningElement } from "lwc";

export default class HelloBinding extends LightningElement {
  greeting = "Mundo";

  handleChange(event) {
    this.greeting = event.target.value;
  }
}