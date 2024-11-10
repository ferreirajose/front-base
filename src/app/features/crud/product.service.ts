import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product-type';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    async getProductsSmall() {
        const response = await firstValueFrom(this.http.get<any>('assets/data/products-small.json'));
        return response.data as Product[];
    }

    async getProducts() {
        const response = await firstValueFrom(this.http.get<any>('assets/data/products.json'));
        return response.data as Product[];
    }

    async getProductsMixed() {
        const response = await firstValueFrom(this.http.get<any>('assets/data/products-mixed.json'));
        return response.data as Product[];
    }

    async getProductsWithOrdersSmall() {
        const response = await firstValueFrom(this.http.get<any>('assets/data/products-orders-small.json'));
        return response.data as Product[];
    }
}
