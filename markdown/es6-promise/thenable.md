# Thenable interface













## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`then<U>(onFulfilled,onRejected)`](#then<u>onfulfilledonrejected)      | [`Thenable`](targetLink)<U> |  |
|[`then<U>(onFulfilled,onRejected)`](#then<u>onfulfilledonrejected)      | [`Thenable`](targetLink)<U> |  |




### then<U>(onFulfilled,onRejected)



**Signature:** _then<U>(onFulfilled?: (value: R) => U | [Thenable](../es6-promise/thenable.md)<U>,onRejected?: (error: any) => U | Thenable<U>): Thenable<U>_

**Returns**: [`Thenable`](targetLink)<U>



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onFulfilled`    | `(value: R) => U `, [`Thenable`](targetLink)<U> | _Optional._ |
| `onRejected`    | `(error: any) => U `, [`Thenable`](targetLink)<U> | _Optional._ |


### then<U>(onFulfilled,onRejected)



**Signature:** _then<U>(onFulfilled?: (value: R) => U | [Thenable](../es6-promise/thenable.md)<U>,onRejected?: (error: any) => void): Thenable<U>_

**Returns**: [`Thenable`](targetLink)<U>



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `onFulfilled`    | `(value: R) => U `, [`Thenable`](targetLink)<U> | _Optional._ |
| `onRejected`    | `(error: any) => void` | _Optional._ |

