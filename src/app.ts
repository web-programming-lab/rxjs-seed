import {Observable, of, Subject} from "rxjs";
import {map, switchMap} from "rxjs/operators";

interface ProductFilter {
    searchString: string
}

interface ProductDetails {
    name: string,
    price: number
}

const productFilter = new Subject<ProductFilter>()

// Option 1
productFilter.subscribe(filter => {
    fetchProductDetails(filter.searchString).subscribe(details => console.log("[1] Product Details:", details))
})

// Option 2
const detailProduct: Observable<ProductDetails> = productFilter.pipe(
    map(productFilter => productFilter.searchString),
    switchMap(searchString => fetchProductDetails(searchString))
)

detailProduct.subscribe(details => console.log("[2] Product Details:", details))

productFilter.next({searchString: "Apple"})
productFilter.next({searchString: "Samsung"})

function fetchProductDetails(productName: string): Observable<ProductDetails> {
    return of({
        name: productName,
        price: Math.floor(Math.random() * 100)
    })
}
