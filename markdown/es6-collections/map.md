# Map interface










## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`size`      | `number` |  |




## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|o[e]['docName'](clear())      | `void` |  |
|o[e]['docName'](delete(key))      | `boolean` |  |
|o[e]['docName'](foreach(callbackfn-thisarg))      | `void` |  |
|o[e]['docName'](get(key))      | `V` |  |
|o[e]['docName'](has(key))      | `boolean` |  |
|o[e]['docName'](set(key-value))      | [`Map<K,V>`](../es6-collections/map.md) |  |
|o[e]['docName'](entries())      | [`Iterator<[K,V]>`](../es6-collections/iterator.md) |  |
|o[e]['docName'](keys())      | [`Iterator<K>`](../es6-collections/iterator.md) |  |
|o[e]['docName'](values())      | [`Iterator<V>`](../es6-collections/iterator.md) |  |




### clear



**Signature:** ``clear(): void``

**Returns**: `void`



#### Parameters
None


### delete



**Signature:** ``delete(key: K): boolean``

**Returns**: `boolean`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |


### forEach



**Signature:** ``forEach(callbackfn: (value: V,index: K,map: [Map](../es6-collections/map.md)<K,V>) => void,thisArg?: any): void``

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callbackfn`    | `(value: V,index: K,map: Map<K,V>) => void` |  |
| `thisArg`    | `any` | _Optional._ |


### get



**Signature:** ``get(key: K): V``

**Returns**: `V`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |


### has



**Signature:** ``has(key: K): boolean``

**Returns**: `boolean`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |


### set



**Signature:** ``set(key: K,value?: V): [Map](../es6-collections/map.md)<K,V>``

**Returns**: [`Map<K,V>`](../es6-collections/map.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |
| `value`    | `V` | _Optional._ |


### entries



**Signature:** ``entries(): [Iterator](../es6-collections/iterator.md)<[K,V]>``

**Returns**: [`Iterator<[K,V]>`](../es6-collections/iterator.md)



#### Parameters
None


### keys



**Signature:** ``keys(): [Iterator](../es6-collections/iterator.md)<K>``

**Returns**: [`Iterator<K>`](../es6-collections/iterator.md)



#### Parameters
None


### values



**Signature:** ``values(): [Iterator](../es6-collections/iterator.md)<V>``

**Returns**: [`Iterator<V>`](../es6-collections/iterator.md)



#### Parameters
None

