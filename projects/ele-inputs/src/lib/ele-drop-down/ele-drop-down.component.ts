import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
interface data {
  item: string;
  disable: boolean;
}
@Component({
  selector: 'ele-drop-down',
  standalone: false,
  templateUrl: './ele-drop-down.component.html',
  styleUrl: './ele-drop-down.component.scss'
})
export class EleDropDownComponent {
  showList: boolean = false;
  defaultSearchData: any[] = [];
  searchAction: boolean = false;
  dropDownClose: any;
  escKeyClose: any;
  searchValue :string = "";
  @Input() selectedValue: string = "";
  @Input() placeHolder: string = "Select an option";
  @Input() data: data[] = [];
  @Input() allowSearch: boolean = true;
  @Input() searchPlaceHolder: string = "Search";
  @Output() valueSelectedEmitter = new EventEmitter<any>();
  constructor(private readonly renderer: Renderer2) { }
  onShowList() {
    if(this.searchAction){
      this.searchValue = "";
      this.data = this.defaultSearchData;
    }
    this.showList = !this.showList;
    if (this.showList) {
      setTimeout(() => {
        this.dropDownClose = this.renderer.listen('document', 'click', () => this.onDropdownClose());
        this.escKeyClose = this.renderer.listen('document', 'keydown', (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            this.onDropdownClose();
          }
        });
      }, 0);
    }
  }
  valueSelected(value: any) {
    if (value.disable || this.selectedValue === value.item) {
      return;
    }
    this.selectedValue = value.item;
    this.showList = false;
    this.valueSelectedEmitter.emit(value);
  }
  onSearch(value: any) {
    this.searchValue = value;
    if (!this.searchAction) {
      this.defaultSearchData = this.data;
    }
    if (value === "") {
      this.data = this.defaultSearchData;
      this.searchAction = false;
    } else {
      this.data = this.data.filter((ele: any) => ele.item.toLowerCase().includes(value.toLowerCase()));
      this.searchAction = true;
    }
  }
  onDropdownClose() {
    this.showList = false;
    this.dropDownClose();
    this.escKeyClose();
  }
}
