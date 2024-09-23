import { Component } from '@angular/core';
import { MySharedService } from './my-shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  country = "";
  state = "";
  district = "";
  place = "";

  constructor(private mySharedService: MySharedService){

  }

  getOptions(n: Number): any[] {
    if(n == 1) {
      return Object.entries(this.mySharedService.treeResponse.countries);
    }
    if(n == 2) {
      let selectedCountry =   this.mySharedService.treeResponse.countries[this.country];
      return Object.entries(selectedCountry.states);
    }
    if(n == 3) {
      let selectedState =   this.mySharedService.treeResponse.countries[this.country].states[this.state];
      return Object.entries(selectedState.districts);
    }
    if(n == 4) {
      let selectedDistrict =   this.mySharedService.treeResponse.countries[this.country].states[this.state].districts[this.district];
      return Object.entries(selectedDistrict.places);
    }
    return [];
  }

  clear(n: Number){
    if(n == 1) {
      this.state= '';
      this.district= '';
      this.place= '';
    }
    if(n == 2) {
      this.district= '';
      this.place= '';
    }
    if(n == 3) {
      this.place= '';
    }
  }

}
