# Promise module













## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`resolve<R>`](#resolve<r>)      | [`Promise<R>`](promise.md) | A thenable is promise-like in as far as it has a "then" method |
|[`reject`](#reject)      | [`Promise<any>`](promise.md) | Make a promise that rejects to obj |
|[`all<R>`](#all<r>)      | [`Promise<R[]>`](promise.md) | The fulfillment value is an array (in order) of fulfillment values |
|[`race<R>`](#race<r>)      | [`Promise<R>`](promise.md) | Make a Promise that fulfills when any item fulfills,and rejects if any item rejects |




### resolve<R>

A thenable is promise-like in as far as it has a "then" method. 
Make a new promise from the thenable. 
A thenable is promise-like in as far as it has a "then" method.

#### Signature
`resolve<R>(value?: R | Thenable<R>): Promise<R>`

#### Returns
[`Promise<R>`](promise.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `R `,[` Thenable<R>`](thenable.md) | _Optional._ |


### reject

Make a promise that rejects to obj. For consistency and debugging (eg stack traces),obj should be an instanceof Error 
Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error

#### Signature
`reject(error: any): Promise<any>`

#### Returns
[`Promise<any>`](promise.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `error`    | `any` |  |


### all<R>

The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value. 
Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects. 
the array passed to all can be a mixture of promise-like objects and other objects. 
The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.

#### Signature
`all<R>(promises: (R | Thenable<R>)[]): Promise<R[]>`

#### Returns
[`Promise<R[]>`](promise.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `promises`    | `(R `,[` Thenable<R>)[]`](thenable.md) |  |


### race<R>

Make a Promise that fulfills when any item fulfills,and rejects if any item rejects. 
Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.

#### Signature
`race<R>(promises: (R | Thenable<R>)[]): Promise<R>`

#### Returns
[`Promise<R>`](promise.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `promises`    | `(R `,[` Thenable<R>)[]`](thenable.md) |  |

