# Map interface










## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`size`      | `number` |  |




## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`clear()`](#clear)      | `void` |  |
|[`delete(key)`](#deletekey)      | `boolean` |  |
|[`forEach(callbackfn,thisArg)`](#foreachcallbackfnthisarg)      | `void` |  |
|[`get(key)`](#getkey)      | `V` |  |
|[`has(key)`](#haskey)      | `boolean` |  |
|[`set(key,value)`](#setkeyvalue)      | [`Map`]()<K,V> |  |
|[`entries()`](#entries)      | [`Iterator`]()<[K,V]> |  |
|[`keys()`](#keys)      | [`Iterator`]()<K> |  |
|[`values()`](#values)      | [`Iterator`]()<V> |  |




### clear()



**Signature:** _clear(): void_

**Returns**: `void`



#### Parameters
None


### delete(key)



**Signature:** _delete(key: K): boolean_

**Returns**: `boolean`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |


### forEach(callbackfn,thisArg)



**Signature:** _forEach(callbackfn: (value: V,index: K,map: [Map](../es6-collections/map.md)<K,V>) => void,thisArg?: any): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callbackfn`    | `(value: V,index: K,map: Map<K,V>) => void` |  |
| `thisArg`    | `any` | _Optional._ |


### get(key)



**Signature:** _get(key: K): V_

**Returns**: `V`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |


### has(key)



**Signature:** _has(key: K): boolean_

**Returns**: `boolean`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |


### set(key,value)



**Signature:** _set(key: K,value?: V): [Map](../es6-collections/map.md)<K,V>_

**Returns**: [`Map`]()<K,V>



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |
| `value`    | `V` | _Optional._ |


### entries()



**Signature:** _entries(): [Iterator](../es6-collections/iterator.md)<[K,V]>_

**Returns**: [`Iterator`]()<[K,V]>



#### Parameters
None


### keys()



**Signature:** _keys(): [Iterator](../es6-collections/iterator.md)<K>_

**Returns**: [`Iterator`]()<K>



#### Parameters
None


### values()



**Signature:** _values(): [Iterator](../es6-collections/iterator.md)<V>_

**Returns**: [`Iterator`]()<V>



#### Parameters
None

