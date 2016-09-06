# Set `<T>` interface



_Type parameters: `<T>`_






### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`size`      | number |  |




## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`add`](#add~7r2c9)      | [`Set<T>`](Set.md) |  |
|[`clear`](#clear~n1pq9)      | void |  |
|[`delete`](#delete~hwgq9)      | boolean |  |
|[`forEach`](#foreach~jqfq9)      | void |  |
|[`has`](#has~mnoc9)      | boolean |  |
|[`entries`](#entries~fmli9)      | [`Iterator<[T,T]>`](Iterator.md) |  |
|[`keys`](#keys~5ysm9)      | [`Iterator<T>`](Iterator.md) |  |
|[`values`](#values~bdxe9)      | [`Iterator<T>`](Iterator.md) |  |



## add



##### Signature
`add(value: T): Set<T>`

#### Returns
`Set<T>`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | T |  |


## clear



##### Signature
`clear(): void`

#### Returns
`void`

#### Parameters
None


## delete



##### Signature
`delete(value: T): boolean`

#### Returns
`boolean`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | T |  |


## forEach



##### Signature
`forEach(callbackfn: (value: T,index: T,set: Set<T>) => void,thisArg?: any): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callbackfn`    | (value: T,index: T,set: Set<T>) => void |  |
| `thisArg`    | any | _Optional._ |


## has



##### Signature
`has(value: T): boolean`

#### Returns
`boolean`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | T |  |


## entries



##### Signature
`entries(): Iterator<[T,T]>`

#### Returns
`Iterator<[T,T]>`

#### Parameters
None


## keys



##### Signature
`keys(): Iterator<T>`

#### Returns
`Iterator<T>`

#### Parameters
None


## values



##### Signature
`values(): Iterator<T>`

#### Returns
`Iterator<T>`

#### Parameters
None

