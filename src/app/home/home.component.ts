import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
   <section>
    <form >
      <input type="text" placeholder="Filter by a city" #filter />
      <button class="primary" type="button" (click)="filterResult(filter.value)">Search</button>
    </form>
   </section>
   <section class="results">
    <!-- input property -->
    <app-housing-location *ngFor="let housingLocation of filterLocationsList" [housingLocation]="housingLocation"></app-housing-location>
   </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationsList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filterLocationsList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((locations: HousingLocation[]) => {
      this.housingLocationsList = locations;
      this.filterLocationsList = locations;
    });
  }

  filterResult(text: string) {
    if (!text) {
      this.filterLocationsList = this.housingLocationsList;
    }
    this.filterLocationsList = this.housingLocationsList.filter
      (housingLocation =>
        housingLocation
          .city
          .toLowerCase()
          .includes(text.toLowerCase()));
  }

}
