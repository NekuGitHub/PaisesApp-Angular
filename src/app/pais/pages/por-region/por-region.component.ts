import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right:5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paises: Country[]=[];

  constructor( private paisService: PaisService ) { 
    this.paisService.getPaisPorRegion
  }

  getClaseCSS( region: string ){
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion( region: string ){
    if (region!=this.regionActiva) {
      this.paises=[]; // da fluidez
      this.regionActiva = region;
      this.buscar();
    }
    
  }

  buscar() {
    console.log(this.regionActiva);
    this.paisService.getPaisPorRegion(this.regionActiva)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
      });
  }
  
}
