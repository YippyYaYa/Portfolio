import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  imageLinks: Array<string> = [];
  galleryImagesSize: number = 23;

  ngOnInit(): void {
    for(let i = 0; i < this.galleryImagesSize; ++i) {
      this.imageLinks.push(
        `../../../assets/images/jpg/gallery/CarpentryTTT (${i+1}).jpg`
      )
    };
  }
}
