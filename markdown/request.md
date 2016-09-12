# Request class

_Implements: [`Body`](body.md)_







### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`method`     | `null` | `string` |  |
|`url`     | `null` | `string` |  |
|`headers`     | `null` | [`Headers`](headers.md) |  |
|`context`     | `null` | `string`,[`RequestContext`](requestcontext.md) |  |
|`referrer`     | `null` | `string` |  |
|`mode`     | `null` | `string`,[`RequestMode`](requestmode.md) |  |
|`credentials`     | `null` | `string`,[`RequestCredentials`](requestcredentials.md) |  |
|`cache`     | `null` | `string`,[`RequestCache`](requestcache.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`RequestInit`](requestinit.md) |  |




### constructor



#### Signature
`constructor(input: string|Request,init?:RequestInit)`

#### Returns
[`RequestInit`](requestinit.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `input`    | `string`,[`Request`](request.md) |  |
| `init`    | [`RequestInit`](requestinit.md) | _Optional._ |

