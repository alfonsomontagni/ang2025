import { Component, OnChanges, signal, SimpleChanges } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-list-signals',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './image-list-signals.component.html',
  styleUrl: './image-list-signals.component.css'
})
export class ImageListSignalsComponent implements OnChanges {
  // Signal che tiene traccia della lista delle immagini
  images = signal<string[]>([]);

  constructor(private imageService: ImageService) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ImageListSignalsComponent');
  }

  // Aggiunge una nuova immagine alla lista
  addImageOld(): void {
    this.imageService.getImage().subscribe((imageBlob) => {
      const imageUrl = URL.createObjectURL(imageBlob);
      // Aggiorna il signal con una nuova lista
      this.images.update((currentImages) => [...currentImages, imageUrl]);
    });
  }
  /*
  addImageMutate(): void {
    this.imageService.getImage().subscribe((imageBlob) => {
      const imageUrl = URL.createObjectURL(imageBlob);
      this.images.mutate((currentImages) => currentImages.push(imageUrl)); // Mutazione diretta
    });
  }*/
    addImage(): void {
      this.imageService.getImage().subscribe((imageBlob) => {
        const imageUrl = URL.createObjectURL(imageBlob);
        // Usa update per aggiungere l'immagine alla lista
        this.images.update((currentImages) => [...currentImages, imageUrl]);
      });
    }

  // Rimuove un'immagine specifica dalla lista
  removeImage(image: string): void {
    this.images.update((currentImages) =>
      currentImages.filter((img) => img !== image)
    );
  }
}
