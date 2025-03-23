import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
interface tooltip {
  content?: string;
  set?: boolean;
}
@Component({
  selector: 'ele-text-box',
  standalone: false,
  templateUrl: './ele-text-box.component.html',
  styleUrl: './ele-text-box.component.scss'
})
export class EleTextBoxComponent {
  // Standard Inputs
  @Input() id: string = "ele-input-id";
  @Input() name: string = "";
  @Input() placeholder: string = "Enter Text";
  @Input() value: string = "";
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() autocomplete: string =  "off";
  @Input() autofocus: boolean = false;
  @Input() tabIndex: number = 0;
  @Input() title: string = "";
  @Input() spellcheck: boolean = false;
  @Input() showInfoIcon: boolean = false;
  @Input() tooltip: tooltip = { content: "ele-tooltip-content", set: true};
  @Input() invalidMessage: string = "";  
  @Input() placeholderAnimation : boolean = false;
  // ARIA Inputs
  @Input() role: string = "TextBox";
  @Input() ariaLabel: string = "";
  @Input() ariaDescribedby: string = "";
  @Input() invalid: boolean = false;
  // Testing Inputs
  @Input() testId: string = "";
  @Input() cyId: string = "";
  @Input() automationId: string = "";
  @Input() customData: string = "";
  // Event Emitters
  @Output() ngModel = new EventEmitter<Event>();
  @Output() change = new EventEmitter<Event>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();
  @Output() keyDown = new EventEmitter<KeyboardEvent>();
  @Output() keyUp = new EventEmitter<KeyboardEvent>();
  @Output() keyPress = new EventEmitter<KeyboardEvent>();
  @Output() click = new EventEmitter<MouseEvent>();
  @Output() doubleClick = new EventEmitter<MouseEvent>();
  @Output() mouseEnter = new EventEmitter<MouseEvent>();
  @Output() mouseLeave = new EventEmitter<MouseEvent>();
  @Output() mouseDown = new EventEmitter<MouseEvent>();
  @Output() mouseUp = new EventEmitter<MouseEvent>();

  ngOnChanges(chages : SimpleChanges) {
    if (chages['disabled'] && this.disabled && !this.tooltip.set) {
       this.tooltip.content = "Input is disabled";
    } else if (chages['disabled'] && !this.disabled && !this.tooltip.set) {
       this.tooltip.content = "";
    }
  }
  ngAfterViewInit() {
   if(this.autofocus){
    document.getElementById(this.id)?.focus()
   } 
  }
  // Event Handlers
  onInput(event: Event): void {
    this.ngModel.emit(event);
  }

  onChange(event: Event): void {
    this.change.emit(event);
  }

  onFocus(event: FocusEvent): void {
    this.focus.emit(event);
  }

  onBlur(event: FocusEvent): void {
    this.blur.emit(event);
  }

  onKeyDown(event: KeyboardEvent): void {
    this.keyDown.emit(event);
  }

  onKeyUp(event: KeyboardEvent): void {
    this.keyUp.emit(event);
  }

  onKeyPress(event: KeyboardEvent): void {
    this.keyPress.emit(event);
  }

  onClick(event: MouseEvent): void {
    this.click.emit(event);
  }

  onDoubleClick(event: MouseEvent): void {
    this.doubleClick.emit(event);
  }

  onMouseEnter(event: MouseEvent): void {
    this.mouseEnter.emit(event);
  }

  onMouseLeave(event: MouseEvent): void {
    this.mouseLeave.emit(event);
  }

  onMouseDown(event: MouseEvent): void {
    this.mouseDown.emit(event);
  }

  onMouseUp(event: MouseEvent): void {
    this.mouseUp.emit(event);
  }
}
