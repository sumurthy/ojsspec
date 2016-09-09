# Set `<T>` interface



_Type parameters: `<T>`_






### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`size`      | `number` |  |




## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`add`](#add)      | [`Set`](set.md),`T`,`` |  |
|[`clear`](#clear)      | `void` |  |
|[`delete`](#delete)      | `boolean` |  |
|[`forEach`](#foreach)      | `void` |  |
|[`has`](#has)      | `boolean` |  |
|[`entries`](#entries)      | [`Iterator`](iterator.md),`T`,`T`,`` |  |
|[`keys`](#keys)      | [`Iterator`](iterator.md),`T`,`` |  |
|[`values`](#values)      | [`Iterator`](iterator.md),`T`,`` |  |



### add



#### Signature
`add(value: T): Set<T>`

#### Returns
[`Set`](set.md),`T`,``


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `T` |  |


### clear



#### Signature
`clear(): void`

#### Returns
`void`


#### Parameters
None


### delete



#### Signature
`delete(value: T): boolean`

#### Returns
`boolean`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `T` |  |


### forEach



#### Signature
`forEach(callbackfn: (value: T,index: T,set: Set<T>) => void,thisArg?: any): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callbackfn`    | ``,`value`,`T`,`index`,`T`,`set`,[`Set`](set.md),`T`,`void` |  |
| `thisArg`    | `any` | _Optional._ |


### has



#### Signature
`has(value: T): boolean`

#### Returns
`boolean`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `T` |  |


### entries



#### Signature
`entries(): Iterator<[T,T]>`

#### Returns
[`Iterator`](iterator.md),`T`,`T`,``


#### Parameters
None


### keys



#### Signature
`keys(): Iterator<T>`

#### Returns
[`Iterator`](iterator.md),`T`,``


#### Parameters
None


### values



#### Signature
`values(): Iterator<T>`

#### Returns
[`Iterator`](iterator.md),`T`,``


#### Parameters
None

