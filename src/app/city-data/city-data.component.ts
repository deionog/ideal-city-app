import { Component, OnInit } from '@angular/core';
import { CitydataService } from '../services';
import { CityData } from '../models';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-city-data',
  templateUrl: './city-data.component.html',
  styleUrls: ['./city-data.component.scss']
})
export class CityDataComponent implements OnInit {

  cityResults: Array<CityData>;
  cities: Array<String>;
  hero$: Observable<CityData[]>
  popChart = [];
  eduChart = [];
  showTables = false;

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

    //console.log(sessionStorage.getItem('cities'));
    this.cities = sessionStorage.getItem('cities').split('-vs-');
    this.citydataService.post(this.cities)
    .subscribe((data: any) => {
      this.cityResults = data; console.log(data);
      data.forEach(element => {
        let formattedData = element.subpods[0].formattedData;
        let labels = Object.keys(formattedData);

        if(element.title == "Populations"){
          let formattedData = element.subpods[0].formattedData;
          let labels = Object.keys(formattedData);

          let ds = this.setupDataset(labels, formattedData);
          this.popChart = this.setupChart(labels, ds, 'bar', 'canvas');
        }else if(element.title == "Educational attainment"){
          labels.splice(2);
          let ds = this.setupEduDataset(labels, formattedData);
          this.eduChart = this.setupChart(labels, ds, 'bar', 'edu-canvas');
        }
      });
    },
    err => console.log(err));


  }

  toggleTables(){
    this.showTables = !this.showTables;
  }

  convertToThousands(value){
    if(value && value.indexOf('million') != -1) {
      let strVal = value.substr(0, value.indexOf('million')).trim();
      strVal = parseFloat(strVal).toFixed(0);
      return strVal * 1000000;
    } else if(value){
      let strVal = value.substr(0, value.indexOf('people')).trim();
      return parseFloat(strVal);
    }
    else return 0;
  }

  setupDataset(labels, formattedData){
    let dataset = [];
    let dataArr = [];

    this.cities.forEach(function(city, index){
      let tempArr = [];
      labels.forEach( el => {
        let item = formattedData[el];
        tempArr.push(this.convertToThousands(item[index].value));
      });
      dataArr.push(tempArr);
    },this);


    this.cities.forEach(function(city, index){
      dataset.push({
        "label": city,
        "data": dataArr[index],
        borderColor: "#3cba9f",
        borderWidth: 1
      });
    });

    return dataset;
  }

  setupEduDataset(labels, formattedData){
    let dataset = [];
    let dataArr = [];

    this.cities.forEach(function(city, index){
      let tempArr = [];
      labels.forEach( el => {
        let item = formattedData[el];
        let val = item[index].value;
        tempArr.push(val.substr(val.indexOf(' per')).replace(/\$/g, ''));
      });
      dataArr.push(tempArr);
    },this);


    this.cities.forEach(function(city, index){
      dataset.push({
        "label": city,
        "data": dataArr[index],
        borderColor: "#3cba9f",
        borderWidth: 1
      });
    });

    return dataset;
  }

  setupChart(chartlbs, ds, chartType, id){
     return new Chart(id, {
      type: chartType,
      data: {
        labels: chartlbs,
        datasets: ds
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
