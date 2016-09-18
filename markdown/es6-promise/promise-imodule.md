# Promise module













## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|o[e]['docName'](resolve<r>(value))      | [`Promise<R>`](../es6-promise/promise.md) | Make a new promise from the thenable.  A thenable is promise-like in as far as it has a "then" method. |
|o[e]['docName'](reject(error))      | [`Promise<any>`](../es6-promise/promise.md) | Make a promise that rejects to obj. For consistency and debugging (eg stack traces),obj should be an instanceof Error |
|o[e]['docName'](all<r>(promises))      | [`Promise<R[]>`](../es6-promise/promise.md) | Make a promise that fulfills when every item in the array fulfills,and rejects if (and when) any item rejects.  the array passed to all can be a mixture of promise-like objects and other objects.  The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value. |
|o[e]['docName'](race<r>(promises))      | [`Promise<R>`](../es6-promise/promise.md) | Make a Promise that fulfills when any item fulfills,and rejects if any item rejects. |




### resolve<R>

Make a new promise from the thenable. 
A thenable is promise-like in as far as it has a "then" method.

**Signature:** ``resolve<R>(value?: R | [Thenable](../es6-promise/thenable.md)<R>): [Promise](../es6-promise/promise.md)<R>``

**Returns**: [`Promise<R>`](../es6-promise/promise.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `R `,[` Thenable<R>`](../es6-promise/thenable.md) | _Optional._ |


### reject

Make a promise that rejects to obj. For consistency and debugging (eg stack traces),obj should be an instanceof Error

**Signature:** ``reject(error: any): [Promise](../es6-promise/promise.md)<any>``

**Returns**: [`Promise<any>`](../es6-promise/promise.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `error`    | `any` |  |


### all<R>

Make a promise that fulfills when every item in the array fulfills,and rejects if (and when) any item rejects. 
the array passed to all can be a mixture of promise-like objects and other objects. 
The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.

**Signature:** ``all<R>(promises: (R | [Thenable](../es6-promise/thenable.md)<R>)[]): [Promise](../es6-promise/promise.md)<R[]>``

**Returns**: [`Promise<R[]>`](../es6-promise/promise.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `promises`    | `(R `,[` Thenable<R>)[]`](../es6-promise/thenable.md) |  |


### race<R>

Make a Promise that fulfills when any item fulfills,and rejects if any item rejects.

**Signature:** ``race<R>(promises: (R | [Thenable](../es6-promise/thenable.md)<R>)[]): [Promise](../es6-promise/promise.md)<R>``

**Returns**: [`Promise<R>`](../es6-promise/promise.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `promises`    | `(R `,[` Thenable<R>)[]`](../es6-promise/thenable.md) |  |

