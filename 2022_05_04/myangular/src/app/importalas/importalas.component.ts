import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-importalas',
  templateUrl: './importalas.component.html',
  styleUrls: ['./importalas.component.css']
})
export class ImportalasComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  adatok = [
    "Sumeg, vasutallomas; Sumeg ,buszpályaudvar;1,2008;16;6;n",
    "Sumeg, vasutallomas; Sumeg ,buszpályaudvar;1,2008;16;6;n",
    "Sumeg, vasutallomas; Sumeg ,buszpályaudvar;1,2008;16;6;n",
    "Sumeg, vasutallomas; Sumeg ,buszpályaudvar;1,2008;16;6;n",
    "Sumeg, vasutallomas; Sumeg ,buszpályaudvar;1,2008;16;6;n",
    "Sumeg, vasutallomas; Sumeg ,buszpályaudvar;1,2008;16;6;n",
    "Sumeg, vasutallomas; Sumeg ,buszpályaudvar;1,2008;16;6;n",
    "Sumeg, vasutallomas; Sumeg ,buszpályaudvar;1,2008;16;6;n"
  ];


  objektumFeltolto(feltoltendoElem:string[]):Kektura[]{
    const beolvasottAdatok:Kektura[]=[];
    for (let i = 0; i < feltoltendoElem.length; i++) {
      let daraboltSor:string[]=feltoltendoElem[i].split(";");
      const kekturaElem:Kektura=new Kektura(daraboltSor[0],daraboltSor[1],Number(daraboltSor[2]),Number(daraboltSor[3]),Number(daraboltSor[4]),daraboltSor[5]);
      beolvasottAdatok.push(kekturaElem);

    }return beolvasottAdatok;
  }
  kekturAdatok=this.objektumFeltolto(this.adatok);
}

  export interface Utvonal {
  kezdopont: string;
  vegPont: String;
  tavolsag: number;
  emelkedes: number;
  lejtes: number;
  pecsetelőHelyE: string;
}

export class Kektura implements Utvonal {
  kezdopont: string;
  vegPont: String;
  tavolsag: number;
  emelkedes: number;
  lejtes: number;
  pecsetelőHelyE: string;

  constructor(kezdopont: string, vegPont: String, tavolsag: number, emelkedes: number, lejtes: number, pecsetelőHelyE: string) {
    this.kezdopont = kezdopont;
    this.vegPont = vegPont;
    this.tavolsag = tavolsag;
    this.emelkedes = emelkedes;
    this.lejtes = lejtes;
    this.pecsetelőHelyE = pecsetelőHelyE;
  }
}
