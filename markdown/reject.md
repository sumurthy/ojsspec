## resolve<R>

Make a new promise from the thenable. 
A thenable is promise-like in as far as it has a "then" method.

##### Signature
resolve<R>(value?: R | Thenable<R>): Promise<R>

#### Returns
Promise<R>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| value?     | undefined | %optional% undefined |


## reject

Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error

##### Signature
reject(error: any): Promise<any>

#### Returns
Promise<any>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| error     | undefined | %optional% undefined |

