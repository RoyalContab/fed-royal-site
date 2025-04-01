import { Component } from '@angular/core';

@Component({
  selector: 'app-system',
  imports: [],
  templateUrl: './system.component.html',
  styleUrl: './system.component.scss'
})
export class SystemComponent {
  arquivoLink: string = 'https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome'; // Link para o sistema de arquivo
  powerBiLink: string = 'https://web.hubcount.com.br/index.html#!/tenant/dashboard'; // Link para o Power BI
}