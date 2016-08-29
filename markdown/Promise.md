# Promise class







## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[constructor](#constructor)      | public | [Promise](Promise.md) | If you call resolve in the body of the callback passed to the constructor,  your promise is fulfilled with result object passed to resolve |
|[ErrorErrorError](#errorerrorerror)      | catch<U>(onRejected?: | Promise<U> | Sugar for promise |




## constructor

If you call resolve in the body of the callback passed to the constructor, 
your promise is fulfilled with result object passed to resolve. 
If you call reject your promise is rejected with the object passed to resolve. 
For consistency and debugging (eg stack traces), obj should be an instanceof Error. 
Any errors thrown in the constructor callback will be implicitly passed to reject().

##### Signature
constructor(callback: (resolve : (value?: R | Thenable<R>) => void, reject: (error?: any) => void) => void)

#### Returns
Promise

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| callback     | undefined | %optional% undefined |


## ErrorErrorError

Sugar for promise.then(undefined, onRejected) 


##### Signature
(error: any) => U | Thenable<U>): Promise<U>

#### Returns
Promise<U>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| onRejected?     | undefined | %optional% undefined |

