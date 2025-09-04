import {delay, Observable, of, Subject} from "rxjs";
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
    fetchProductDetails(filter.searchString)
        .subscribe(details => console.log("[1] Product Details:", details))
})

// Option 2
productFilter.pipe(
    map(productFilter => productFilter.searchString),
    switchMap(searchString => fetchProductDetails(searchString))
).subscribe(details =>
    console.log("[2] Product Details:", details))

productFilter.next({searchString: "Apple"})

//setTimeout(() => productFilter.next({searchString: "Samsung"}), 2000)
productFilter.next({searchString: "Samsung"})

function fetchProductDetails(searchString: string): Observable<ProductDetails> {
    const name = searchString + " Product " + Math.floor(Math.random() * 100);
    return of({
        name,
        price: Math.floor(Math.random() * 100)
    }).pipe(
        // delay(250)
    )
}
