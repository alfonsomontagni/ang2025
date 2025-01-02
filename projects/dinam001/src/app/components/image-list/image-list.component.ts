import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageService } from '../../services/image.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [    
    CommonModule,
  ],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css'
})
export class ImageListComponent  implements OnChanges {
  images: SafeUrl[] = [];

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer) {
    console.log('constructor im list')
  }
  ngOnChanges(changes: SimpleChanges): void {
    //mai chiamato giustamente
    console.log('ImageList Component');
  }
  addImage(): void {
    this.imageService.getImage().subscribe((imageBlob) => {
      const imageUrl = URL.createObjectURL(imageBlob);
      this.images.push(this.sanitizer.bypassSecurityTrustUrl(imageUrl));
    });
  }

  removeImage(index: number): void {
    this.images.splice(index, 1);
  }
}
