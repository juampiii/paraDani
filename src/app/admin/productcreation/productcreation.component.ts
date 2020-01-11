import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {ProductRepositoryService} from "../../productRepository/productrepository.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-productcreation',
  templateUrl: './productcreation.component.html',
  styleUrls: ['./productcreation.component.scss']
})
export class ProductcreationComponent implements OnInit {

  public productEditionForm: FormGroup;

  constructor(protected formBuilder: FormBuilder,
              protected productRepositoryService: ProductRepositoryService,
              protected router: Router) {

  }

  ngOnInit() {

    this.productEditionForm = this.formBuilder.group({
      id: new FormControl("", [Validators.required]),
      name: new FormControl("Nombre inicial", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      price: new FormControl("")
    })

    this.productEditionForm.get('name').valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        console.log(value);
      })

  }

  public onSubmit() {

    let product = {
      "id": this.productEditionForm.controls["id"].value,
      "name": this.productEditionForm.controls["name"].value,
      "description": this.productEditionForm.controls["description"].value,
      "price": this.productEditionForm.controls["price"].value
    }

    this.productRepositoryService.save(product).subscribe(response =>
      this.router.navigate(['/'])
    )
  }

}
