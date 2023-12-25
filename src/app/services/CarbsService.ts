// import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CarbsService {

    public products: Product[];
    public search = 0;

    constructor() {
        this.products = [];
        this.search = 0;
    }

    public addSearch() {
        this.search += 1;
    }

    public resetSearch() {
        this.search = 0;
    }

    public getSearch() {
        return this.search;
    }

    public setProducts(prods: any) {
        this.products = prods;
    }

    public getProducts() {
        return this.products;
    }
}

interface Product {
    id_alimento: any;
    nombre: string;
    medida: string;
    carbs: number;
    calorias: number;
    proteinas: number;
    lipidos: number;
}
   