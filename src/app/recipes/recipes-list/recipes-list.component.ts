import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test name', 'Test description', 'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_16_9%2Fpublic%2Fmigration%2Fimg%2Fweb%2F2013%2F05%2Fslides%2Fbest-veggie-burger-400x400.jpg%3Fitok%3Dy27aLrWs&w=800&q=85');
  ];

  constructor() { }

  ngOnInit() {
  }

}
