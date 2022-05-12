import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-minta',
  templateUrl: './minta.component.html',
  styleUrls: ['./minta.component.css']
})
export class MintaComponent implements OnInit {


  uzenet(): void {
    alert("Ez egy Event Handler függvény volt");
  }

  modosito(): void {
    if (this.keszito == "Keszericze István") {
      this.keszito = "Minta Márton";
    } else {
      this.keszito = "Keszericze István";
    }
  }
  constructor() {}

  ngOnInit(): void {}
  keszito: string = "Keszericze István";
  utvonal: string = "https://angular.io/";

  aOldal: number = 1;

  bevasarLoLista: string[] = ["alma", "körte", "barack", "szilva", "dió", "mangó", "banán"]

  interfaceElem: Dolgozo = {
    nev: "Minta Márton 0",
    kor: 221,
    fizetes: 2200001,
    beosztas: "Követendő péda 1"
  }

  interFaceTomb:Dolgozo[]=[
    {
      nev: "Minta Márton 1",
      kor: 222,
      fizetes: 2200002,
      beosztas: "Követendő péda 2"
    },
    {
      nev: "Minta Márton 2",
      kor: 223,
      fizetes: 2200003,
      beosztas: "Követendő péda3"
    },
    {
      nev: "Minta Márton 3",
      kor: 224,
      fizetes: 2200004,
      beosztas: "Követendő péda4"
    },
    {
      nev: "Minta Márton 4",
      kor: 225,
      fizetes: 2200005,
      beosztas: "Követendő péda5"
    },
    {
      nev: "Minta Márton 5",
      kor: 226,
      fizetes: 2200006,
      beosztas: "Követendő péda6"
    },
    {
      nev: "Minta Márton 6",
      kor: 227,
      fizetes: 2200007,
      beosztas: "Követendő péda 7"
    },
    {
      nev: "Minta Márton 7",
      kor: 228,
      fizetes: 2200008,
      beosztas: "Követendő péda 8"
    },
    {
      nev: "Minta Márton 8",
      kor: 229,
      fizetes: 2200009,
      beosztas: "Követendő péda 9"
    }
  ]

}

export interface Dolgozo {
  nev: string;
  kor: number;
  fizetes: number;
  beosztas: string;
}
