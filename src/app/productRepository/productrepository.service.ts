import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class ProductRepositoryService {

  public constructor(protected httpClient: HttpClient) {
  }

  public findAll() {
    // URL: http://localhost:3000/api/products

    return this.httpClient.get("http://localhost:3000/api/products");
  }

  public findById(productId: string) {

    return this.httpClient.get("http://localhost:3000/api/products/" + productId);
  }

  public save(product:any){
    return this.httpClient.put("http://localhost:3000/api/products/", product);
  }
}
