## resolve<R>

Make a new promise from the thenable. 
A thenable is promise-like in as far as it has a "then" method.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value? `    | `undefined` | _%optional%_ undefined |


## reject

Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `error `    | `undefined` | _%optional%_ undefined |


## all<R>

Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects. 
the array passed to all can be a mixture of promise-like objects and other objects. 
The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `promises `    | `undefined` | _%optional%_ undefined |

