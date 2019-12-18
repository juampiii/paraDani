import {Injectable} from "@angular/core";

@Injectable()
export class ProductRepositoryService{
  protected products = [
    {
      "id":"pienso-perros",
      "name": "Pienso de perros",
      "description": "Pienso vegano para perros pequeños",
      "price": 15
    },
    {
      "id":"collar-perros",
      "name": "Collar para perros",
      "description": "Collar antiparasitario",
      "price": 8
    },
    {
      "id":"cepillo-gatos",
      "name": "Cepillo para gatos",
      "description": "Cepillo suave y eficaz",
      "price": 20
    },
    {
      "id":"antiestaminico-gatos",
      "name": "Antiestamínico para gatos",
      "description": "Anula los efectos de la alergia en otros gatos",
      "price": 30
    }]

  public findAll(){
    return this.products;
  }

  public findById(productId: string){
    return this.products.find(product => product.id == productId)
  }
}
