# Thenable `<R>` interface



_Type parameters: `<R>`_









## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`then<U>`](#then<u>)      | [`Thenable`](thenable.md),`U`,`` |  |



### then<U>



#### Signature
`then<U>(onFulfilled?: (value: R) => U | Thenable<U>,onRejected?: (error: any) => void): Thenable<U>`

#### Returns
[`Thenable`](thenable.md),`U`,``


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onFulfilled`    | ``,`value`,`R`,`U`,[`Thenable`](thenable.md),`U`,`` | _Optional._ |
| `onRejected`    | ``,`error`,`any`,`void` | _Optional._ |

