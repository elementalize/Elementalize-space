# ele-text-box

`ele-text-box` is an Angular component that provides a customizable text box input field with various configuration options for accessibility, styling, events, and more. You can integrate it into your Angular project to improve the user experience and handle input in a more flexible way.

## Installation

To install `ele-text-box`, run the following command in your Angular project directory:

```bash
npm install ele-inputs
```
## Usage
Import the `EleTextBoxModule` into your Angular module:

```bash
import { EleInputsModule } from 'ele-inputs';

@NgModule({
  declarations: [AppComponent],
  imports: [EleInputsModule], // Import the module here
  bootstrap: [AppComponent]
})
export class AppModule {}
```
## Basic Usage
In your Angular component HTML, you can use `ele-text-box` like this:

```bash
<ele-text-box></ele-text-box>
```
## Input Properties
```bash
{
  "id": {
    "type": "string",
    "default": "'ele-text-box'",
    "description": "The ID of the text box."
  },
  "name": {
    "type": "string",
    "default": "'ele-text-name'",
    "description": "The name of the text box."
  },
  "placeholder": {
    "type": "string",
    "default": "'ele-text-placeholder'",
    "description": "Placeholder text for the input."
  },
  "value": {
    "type": "string",
    "default": "'ele-text-value'",
    "description": "The value of the text box."
  },
  "placeholderAnimation": {
    "type": "boolean",
    "default": "false",
    "description": "Enable placeholder animation."
  },
  "disabled": {
    "type": "boolean",
    "default": "false",
    "description": "Whether the text box is disabled."
  },
  "readonly": {
    "type": "boolean",
    "default": "false",
    "description": "Whether the text box is readonly."
  },
  "required": {
    "type": "boolean",
    "default": "false",
    "description": "Whether the text box is required."
  },
  "autocomplete": {
    "type": "string",
    "default": "'on'",
    "description": "Autocomplete setting for the input."
  },
  "autofocus": {
    "type": "boolean",
    "default": "false",
    "description": "Whether the text box should focus on load."
  },
  "title": {
    "type": "string",
    "default": "'ele-text-title'",
    "description": "Title text for the input box."
  },
  "spellcheck": {
    "type": "boolean",
    "default": "true",
    "description": "Whether spellchecking is enabled."
  },
  "role": {
    "type": "string",
    "default": "'ele-text-role'",
    "description": "ARIA role for the text box."
  },
  "showInfoIcon": {
    "type": "boolean",
    "default": "true",
    "description": "Whether to display an information icon."
  },
  "tooltip": {
    "type": "object",
    "default": "{ content: 'ele-tooltip-content', set: true }",
    "description": "Tooltip settings."
  },
  "invalidMessage": {
    "type": "string",
    "default": "'ele-text-invalid-message'",
    "description": "Custom invalid message to show when input is invalid."
  },
  "invalid": {
    "type": "boolean",
    "default": "false",
    "description": "Whether the text box is invalid."
  },
  "ariaLabel": {
    "type": "string",
    "default": "'ele-text-aria-label'",
    "description": "ARIA label for the input."
  },
  "ariaDescribedby": {
    "type": "string",
    "default": "'ele-text-aria-describedby'",
    "description": "ARIA describedby for the input."
  },
  "testId": {
    "type": "string",
    "default": "'ele-text-test-id'",
    "description": "Test ID for testing purposes."
  },
  "cyId": {
    "type": "string",
    "default": "'ele-text-cy-id'",
    "description": "Cypress test ID for integration tests."
  },
  "automationId": {
    "type": "string",
    "default": "'ele-text-automation-id'",
    "description": "Automation ID for tests."
  },
  "customData": {
    "type": "string",
    "default": "'ele-text-custom-data'",
    "description": "Custom data for tracking or other purposes."
  },
  "tabIndex": {
    "type": "number",
    "default": 0,
    "description": "The tab index for the input field."
  }
}
```
## Output Events
Here are the available output events for the `ele-text-box` component:
```bash
{
  "blur": {
    "type": "Event",
    "description": "Emitted when the input loses focus."
  },
  "focus": {
    "type": "Event",
    "description": "Emitted when the input gains focus."
  },
  "click": {
    "type": "Event",
    "description": "Emitted when the input is clicked."
  },
  "keyDown": {
    "type": "Event",
    "description": "Emitted when a key is pressed down."
  },
  "keyUp": {
    "type": "Event",
    "description": "Emitted when a key is released."
  },
  "keyPress": {
    "type": "Event",
    "description": "Emitted when a key is pressed (before key release)."
  },
  "mouseEnter": {
    "type": "Event",
    "description": "Emitted when the mouse enters the input area."
  },
  "mouseLeave": {
    "type": "Event",
    "description": "Emitted when the mouse leaves the input area."
  },
  "mouseDown": {
    "type": "Event",
    "description": "Emitted when a mouse button is pressed."
  },
  "mouseUp": {
    "type": "Event",
    "description": "Emitted when a mouse button is released."
  },
  "doubleClick": {
    "type": "Event",
    "description": "Emitted when the input is double-clicked."
  },
  "ngModel": {
    "type": "Event",
    "description": "Emitted on value change through Angular's ngModel."
  },
  "change": {
    "type": "Event",
    "description": "Emitted when the input value changes."
  }
}
```
## License
This library is licensed under the MIT License.

This README contains an overview of how to install and use the `ele-text-box` component. It includes information on how to configure the component, handle events, and customize it according to your needs.

Let me know if you'd like me to adjust any part of the file or if you need further changes!