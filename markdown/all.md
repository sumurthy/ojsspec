# all<R>

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

