import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    content: String
  }

  copy(){
    navigator.clipboard.writeText(this.contentValue).then(
      () => {
        /* Sucess */
      },
      () => {
        alert("Failed to copy to clipboard")
      }
    );
  }
}