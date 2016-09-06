# Map `<K,V>` interface



_Type parameters: `<K,V>`_






### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`size`      | number |  |




## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`clear`](#clear~n1pq9)      | void |  |
|[`delete`](#delete~hwgq9)      | boolean |  |
|[`forEach`](#foreach~jqfq9)      | void |  |
|[`get`](#get~xkvg9)      | V |  |
|[`has`](#has~mnoc9)      | boolean |  |
|[`set`](#set~9zym9)      | [`Map<K,V>`](Map.md) |  |
|[`entries`](#entries~fmli9)      | [`Iterator<[K,V]>`](Iterator.md) |  |
|[`keys`](#keys~5ysm9)      | [`Iterator<K>`](Iterator.md) |  |
|[`values`](#values~bdxe9)      | [`Iterator<V>`](Iterator.md) |  |



## clear



##### Signature
`clear(): void`

#### Returns
void

#### Parameters
None


## delete



##### Signature
`delete(key: K): boolean`

#### Returns
boolean

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | K |  |


## forEach



##### Signature
`forEach(callbackfn: (value: V,index: K,map: Map<K,V>) => void,thisArg?: any): void`

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callbackfn`    | (value: V,index: K,map: Map<K,V>) => void |  |
| `thisArg`    | any | _Optional._ |


## get



##### Signature
`get(key: K): V`

#### Returns
V

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | K |  |


## has



##### Signature
`has(key: K): boolean`

#### Returns
boolean

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | K |  |


## set



##### Signature
`set(key: K,value?: V): Map<K,V>`

#### Returns
[`Map<K,V>`](Map.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | K |  |
| `value`    | V | _Optional._ |


## entries



##### Signature
`entries(): Iterator<[K,V]>`

#### Returns
[`Iterator<[K,V]>`](Iterator.md)

#### Parameters
None


## keys



##### Signature
`keys(): Iterator<K>`

#### Returns
[`Iterator<K>`](Iterator.md)

#### Parameters
None


## values



##### Signature
`values(): Iterator<V>`

#### Returns
[`Iterator<V>`](Iterator.md)

#### Parameters
None

