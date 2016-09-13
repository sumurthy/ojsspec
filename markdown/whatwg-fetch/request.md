# Request class

_Implements: [`Body`](../whatwg-fetch/body.md)_







### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`method`     | `null` | `string` |  |
|`url`     | `null` | `string` |  |
|`headers`     | `null` | [`Headers`](../whatwg-fetch/headers.md) |  |
|`context`     | `null` | `string`,[`RequestContext`](../whatwg-fetch/requestcontext.md) |  |
|`referrer`     | `null` | `string` |  |
|`mode`     | `null` | `string`,[`RequestMode`](../whatwg-fetch/requestmode.md) |  |
|`credentials`     | `null` | `string`,[`RequestCredentials`](../whatwg-fetch/requestcredentials.md) |  |
|`cache`     | `null` | `string`,[`RequestCache`](../whatwg-fetch/requestcache.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`Request`](../whatwg-fetch/request.md) |  |





### constructor



#### Signature
`constructor(input: string|Request,init?:RequestInit)`

#### Returns
[`Request`](../whatwg-fetch/request.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `input`    | `string`,[`Request`](../whatwg-fetch/request.md) |  |
| `init`    | [`RequestInit`](../whatwg-fetch/requestinit.md) | _Optional._ |

