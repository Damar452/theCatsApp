import { Component, OnInit } from '@angular/core';
import { ApiCatsService } from 'src/app/data/api-cats.service';
import { Cat } from 'src/app/models/cat-interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-model-cat',
  templateUrl: './view-model-cat.page.html',
  styleUrls: ['./view-model-cat.page.scss'],
})
export class ViewModelCatPage implements OnInit {

  public cats: Cat[] = [];

  constructor(private apiCatsService: ApiCatsService) { }

  ngOnInit() {
    this.getCats();
  }

  private getCats(): void {
   this.apiCatsService.getCats().subscribe(cats => {
    this.cats = cats.map( cat => ({
        ...cat, imageUrl: `${environment.api_images}/${cat.reference_image_id}.jpg`
    }))
   });
  }

}
