namespace dependencyInjectionNelkul {
  class SzemelyesAdat {
    constructor() {

    }
  }
  class JArmuAdat {
    constructor() {

    }
  }

  class JarmuVezetok {
    vezeto: SzemelyesAdat;
    jarmu: JArmuAdat;

    constructor() {
      this.vezeto = new SzemelyesAdat();
      this.jarmu = new JArmuAdat();
    }
  }

  let ujSofor = new JarmuVezetok();
}

namespace dependencyInjectionHasznalataval {
  class SzemelyesAdat {
    teljesNev: string;
    constructor(veznev: string, kerNev: string) {
      this.teljesNev = veznev + " " + kerNev;
    }
  }
  class JArmuAdat {
    constructor(marka:string) {

    }
  }

  class JarmuVezetok {
    vezeto: SzemelyesAdat;
    jarmu: JArmuAdat;

    constructor(vezeto: SzemelyesAdat, jarmu: JArmuAdat) {
      this.vezeto = vezeto;
      this.jarmu = jarmu;
    }
  }
  let ujNeve=new SzemelyesAdat("Békés","Csaba");
  let ujAuto=new JArmuAdat("BMW");
  let ujSofor=new JarmuVezetok(ujNeve,ujAuto);

}
