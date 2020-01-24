import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry
      .addSvgIcon(
        'instagram',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/instagram.svg')
      )
      .addSvgIcon(
        'twitter',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/twitter.svg')
      )
      .addSvgIcon(
        'youtube',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/youtube.svg')
      );
  }
}
