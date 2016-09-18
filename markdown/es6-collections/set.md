# Set interface










## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`size`      | `number` |  |




## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[add(value)](add(value))      | [`Set<T>`](../es6-collections/set.md) |  |
|[clear()](clear())      | `void` |  |
|[delete(value)](delete(value))      | `boolean` |  |
|[forEach(callbackfn,thisArg)](foreach(callbackfn-thisarg))      | `void` |  |
|[has(value)](has(value))      | `boolean` |  |
|[entries()](entries())      | [`Iterator<[T,T]>`](../es6-collections/iterator.md) |  |
|[keys()](keys())      | [`Iterator<T>`](../es6-collections/iterator.md) |  |
|[values()](values())      | [`Iterator<T>`](../es6-collections/iterator.md) |  |




### add



**Signature:** ``add(value: T): [Set](../es6-collections/set.md)<T>``

**Returns**: [`Set<T>`](../es6-collections/set.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `T` |  |


### clear



**Signature:** ``clear(): void``

**Returns**: `void`



#### Parameters
None


### delete



**Signature:** ``delete(value: T): boolean``

**Returns**: `boolean`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `T` |  |


### forEach



**Signature:** ``forEach(callbackfn: (value: T,index: T,set: [Set](../es6-collections/set.md)<T>) => void,thisArg?: any): void``

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callbackfn`    | `(value: T,index: T,set: Set<T>) => void` |  |
| `thisArg`    | `any` | _Optional._ |


### has



**Signature:** ``has(value: T): boolean``

**Returns**: `boolean`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `T` |  |


### entries



**Signature:** ``entries(): [Iterator](../es6-collections/iterator.md)<[T,T]>``

**Returns**: [`Iterator<[T,T]>`](../es6-collections/iterator.md)



#### Parameters
None


### keys



**Signature:** ``keys(): [Iterator](../es6-collections/iterator.md)<T>``

**Returns**: [`Iterator<T>`](../es6-collections/iterator.md)



#### Parameters
None


### values



**Signature:** ``values(): [Iterator](../es6-collections/iterator.md)<T>``

**Returns**: [`Iterator<T>`](../es6-collections/iterator.md)



#### Parameters
None

