# BasicHttpClient class





BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`protected`     | `null` | [`ServiceScope`](../sp-client-base/servicescope.md) | BasicHttpClient implements a basic set of features for performing REST operations |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`BasicHttpClient`](../sp-client-base/basichttpclient.md) | BasicHttpClient implements a basic set of features for performing REST operations |
|[`fetch`](#fetch)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | BasicHttpClient implements a basic set of features for performing REST operations |
|[`fetchCore`](#fetchcore)     | `protected` | [`Promise<Response>`](../es6-promise/promise.md) | BasicHttpClient implements a basic set of features for performing REST operations |
|[`get`](#get)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | BasicHttpClient implements a basic set of features for performing REST operations |
|[`post`](#post)     | `public` | [`Promise<Response>`](../es6-promise/promise.md) | BasicHttpClient implements a basic set of features for performing REST operations |





### constructor

BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.

#### Signature
`constructor(serviceScope: ServiceScope)`

#### Returns
[`BasicHttpClient`](../sp-client-base/basichttpclient.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](../sp-client-base/servicescope.md) |  |


### fetch

BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.

#### Signature
`fetch(url: string,options: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result 
Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https://fetch.spec.whatwg.org/

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch  Performs a REST service call |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | - additional options that affect the request  Performs a REST service call |


### fetchCore

BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.

#### Signature
`fetchCore(request: Request): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result 
Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https://fetch.spec.whatwg.org/

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `request`    | [`Request`](../whatwg-fetch/request.md) |  |


### get

BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.

#### Signature
`get(url: string,options?: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result 
Calls fetch(), but sets the method to 'GET'.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch  Calls fetch(), but sets the method to 'GET' |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | _Optional._- additional options that affect the request  Calls fetch(), but sets the method to 'GET' |


### post

BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.

#### Signature
`post(url: string,options: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](../es6-promise/promise.md)
a promise that will return the result 
Calls fetch(), but sets the method to 'POST'.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch  Calls fetch(), but sets the method to 'POST' |
| `options`    | [`IBasicHttpClientOptions`](../sp-client-base/ibasichttpclientoptions.md) | - additional options that affect the request  Calls fetch(), but sets the method to 'POST' |

