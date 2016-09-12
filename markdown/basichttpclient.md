# BasicHttpClient class





enhancements. 
BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`protected`     | `null` | [`ServiceScope`](servicescope.md) | Calls fetch(),but sets the method to 'POST' |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`BasicHttpClient`](basichttpclient.md) | enhancements |
|[`fetch`](#fetch)     | `public` | [`Promise<Response>`](promise.md) | https:  Performs a REST service call |
|[`fetchCore`](#fetchcore)     | `protected` | [`Promise<Response>`](promise.md) | https:  Performs a REST service call |
|[`get`](#get)     | `public` | [`Promise<Response>`](promise.md) | Calls fetch(),but sets the method to 'GET' |
|[`post`](#post)     | `public` | [`Promise<Response>`](promise.md) | Calls fetch(),but sets the method to 'POST' |





### constructor

enhancements. 
BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.

#### Signature
`constructor(serviceScope: ServiceScope)`

#### Returns
[`BasicHttpClient`](basichttpclient.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](servicescope.md) |  |


### fetch

https: 
Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https://fetch.spec.whatwg.org/

#### Signature
`fetch(url: string,options: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](promise.md)
a promise that will return the result 
Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https://fetch.spec.whatwg.org/

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch  Performs a REST service call |
| `options`    | [`IBasicHttpClientOptions`](ibasichttpclientoptions.md) | - additional options that affect the request  Performs a REST service call |


### fetchCore

https: 
Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https://fetch.spec.whatwg.org/

#### Signature
`fetchCore(request: Request): Promise<Response>`

#### Returns
[`Promise<Response>`](promise.md)
a promise that will return the result 
Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https://fetch.spec.whatwg.org/

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `request`    | [`Request`](request.md) |  |


### get

Calls fetch(),but sets the method to 'GET'. 
Calls fetch(), but sets the method to 'GET'.

#### Signature
`get(url: string,options?: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](promise.md)
a promise that will return the result 
Calls fetch(), but sets the method to 'GET'.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch  Calls fetch(), but sets the method to 'GET' |
| `options`    | [`IBasicHttpClientOptions`](ibasichttpclientoptions.md) | _Optional._- additional options that affect the request  Calls fetch(), but sets the method to 'GET' |


### post

Calls fetch(),but sets the method to 'POST'. 
Calls fetch(), but sets the method to 'POST'.

#### Signature
`post(url: string,options: IBasicHttpClientOptions): Promise<Response>`

#### Returns
[`Promise<Response>`](promise.md)
a promise that will return the result 
Calls fetch(), but sets the method to 'POST'.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | - the URL to fetch  Calls fetch(), but sets the method to 'POST' |
| `options`    | [`IBasicHttpClientOptions`](ibasichttpclientoptions.md) | - additional options that affect the request  Calls fetch(), but sets the method to 'POST' |

