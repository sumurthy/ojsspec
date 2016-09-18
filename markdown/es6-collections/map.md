# Map interface










## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`size`      | `number` |  |




## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[clear ()](#clear-)      | `void` |  |
|[delete (key,)](#delete-key)      | `boolean` |  |
|[forEach (callbackfn, thisArg,)](#foreach-callbackfn thisarg)      | `void` |  |
|[get (key,)](#get-key)      | `V` |  |
|[has (key,)](#has-key)      | `boolean` |  |
|[set (key, value,)](#set-key value)      | [`Map<K,V>`](../es6-collections/map.md) |  |
|[entries ()](#entries-)      | [`Iterator<[K,V]>`](../es6-collections/iterator.md) |  |
|[keys ()](#keys-)      | [`Iterator<K>`](../es6-collections/iterator.md) |  |
|[values ()](#values-)      | [`Iterator<V>`](../es6-collections/iterator.md) |  |




### clear ()



**Signature:** ``clear(): void``

**Returns**: `void`



#### Parameters
None


### delete (key,)



**Signature:** ``delete(key: K): boolean``

**Returns**: `boolean`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |


### forEach (callbackfn, thisArg,)



**Signature:** ``forEach(callbackfn: (value: V,index: K,map: [Map](../es6-collections/map.md)<K,V>) => void,thisArg?: any): void``

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callbackfn`    | `(value: V,index: K,map: Map<K,V>) => void` |  |
| `thisArg`    | `any` | _Optional._ |


### get (key,)



**Signature:** ``get(key: K): V``

**Returns**: `V`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |


### has (key,)



**Signature:** ``has(key: K): boolean``

**Returns**: `boolean`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |


### set (key, value,)



**Signature:** ``set(key: K,value?: V): [Map](../es6-collections/map.md)<K,V>``

**Returns**: [`Map<K,V>`](../es6-collections/map.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |
| `value`    | `V` | _Optional._ |


### entries ()



**Signature:** ``entries(): [Iterator](../es6-collections/iterator.md)<[K,V]>``

**Returns**: [`Iterator<[K,V]>`](../es6-collections/iterator.md)



#### Parameters
None


### keys ()



**Signature:** ``keys(): [Iterator](../es6-collections/iterator.md)<K>``

**Returns**: [`Iterator<K>`](../es6-collections/iterator.md)



#### Parameters
None


### values ()



**Signature:** ``values(): [Iterator](../es6-collections/iterator.md)<V>``

**Returns**: [`Iterator<V>`](../es6-collections/iterator.md)



#### Parameters
None

