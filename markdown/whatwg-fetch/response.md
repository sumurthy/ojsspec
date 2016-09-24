# Response class

_Implements: [`Body`](../whatwg-fetch/body.md)_






## Constructor


**Signature:** _constructor(body?: BodyInit,init?: [ResponseInit](../whatwg-fetch/responseinit.md))_

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
|[`error()`](error-s60I9.md)     | `public` | [`Response`](../whatwg-fetch/response.md) |  |
|[`redirect(url,status)`](redirect-3bnQ9.md)     | `public` | [`Response`](../whatwg-fetch/response.md) |  |
|[`clone()`](clone-3mAQ9.md)     | `public` | [`Response`](../whatwg-fetch/response.md) |  |




