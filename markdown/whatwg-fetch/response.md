# Response class

_Implements: [`Body`](../whatwg-fetch/body.md)_






## Constructor


**Signature:** `constructor(body?: BodyInit,init?: [ResponseInit](../whatwg-fetch/responseinit.md))`

**Returns**: [`Response`](../whatwg-fetch/response.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `body`    | [`BodyInit`](..//whatwg-fetch.md#types) | _Optional._ |
| `init`    | [`ResponseInit`](../whatwg-fetch/responseinit.md) | _Optional._ |


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`type`     | `public` | `string`,[`ResponseType`](../whatwg-fetch/responsetype.md) |  |
|`url`     | `public` | `string` |  |
|`status`     | `public` | `number` |  |
|`ok`     | `public` | `boolean` |  |
|`statusText`     | `public` | `string` |  |
|`headers`     | `public` | [`Headers`](../whatwg-fetch/headers.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|o[e]['docName'](error())     | `public` | [`Response`](../whatwg-fetch/response.md) |  |
|o[e]['docName'](redirect(url-status))     | `public` | [`Response`](../whatwg-fetch/response.md) |  |
|o[e]['docName'](clone())     | `public` | [`Response`](../whatwg-fetch/response.md) |  |





### error



**Signature:** ``error(): [Response](../whatwg-fetch/response.md)``

**Returns**: [`Response`](../whatwg-fetch/response.md)



#### Parameters
None


### redirect



**Signature:** ``redirect(url: string,status: number): [Response](../whatwg-fetch/response.md)``

**Returns**: [`Response`](../whatwg-fetch/response.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` |  |
| `status`    | `number` |  |


### clone



**Signature:** ``clone(): [Response](../whatwg-fetch/response.md)``

**Returns**: [`Response`](../whatwg-fetch/response.md)



#### Parameters
None

