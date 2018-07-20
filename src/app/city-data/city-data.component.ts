import { Component, OnInit } from '@angular/core';
import { CitydataService } from '../services';
import { CityData } from '../models';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city-data',
  templateUrl: './city-data.component.html',
  styleUrls: ['./city-data.component.scss']
})
export class CityDataComponent implements OnInit {

  cityResults: Array<CityData>;
  cities: Array<String>;
  hero$: Observable<CityData[]>

  constructor(private citydataService: CitydataService,
    private route: ActivatedRoute,
    private router: Router) {
    this.cityResults = [];

  }

  ngOnInit() {
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     return this.citydataService.post(params.getAll('city'))
    //   })
    // );

    console.log(sessionStorage.getItem('cities'));
    this.cities = sessionStorage.getItem('cities').split('-vs-');
    this.citydataService.post(this.cities)
    .subscribe((data: any) => { this.cityResults = data; console.log(data); },
    err => console.log(err));


  }

}
