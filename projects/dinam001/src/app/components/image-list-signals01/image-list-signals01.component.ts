import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-image-list-signals01',
    imports: [CommonModule],
    templateUrl: './image-list-signals01.component.html',
    styleUrl: './image-list-signals01.component.css'
})
export class ImageListSignals01Component implements OnChanges {
  @Input() value: string = '';

  images: SafeUrl[] = [];
  
    constructor(private imageService: ImageService, private sanitizer: DomSanitizer) {
      console.log('constructor im01 list')
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log('ImageList 01signal Component');
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
