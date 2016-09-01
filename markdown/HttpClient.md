# HttpClient class



HttpClient is used to perform REST calls against SharePoint. It adds default 
headers, manages the digest needed for writes, and collects telemetry that 
helps the service to monitor the performance of an application. 
 
For communicating with non-SharePoint services, use the BasicHttpClient 
class instead.






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[constructor](#constructor~86297)     | public | [ServiceScope](ServiceScope.md) |  |
|[beginBatch](#beginbatch~86648)     | public | [ODataBatch](ODataBatch.md) | Begins an ODATA batch,which allows multiple REST queries to be bundled into  a single web request |
|[fetch](#fetch~50255)     | public | [Promise<Response>](Promise.md) | Generally,the parameters and semantics for HttpClient |
|[get](#get~39010)     | public | [Promise<Response>](Promise.md) | Calls fetch(),but sets the method to 'GET' |
|[getWebUrlFromRequestUrl](#getweburlfromrequesturl~14241)     | public, _static_ | string | This uses a heuristic to guess the SPWeb URL associated with the provided  REST URL |
|[post](#post~61649)     | public | [Promise<Response>](Promise.md) | Calls fetch(),but sets the method to 'POST' |




## constructor



##### Signature

#### Returns
ServiceScope

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [ServiceScope](ServiceScope.md) |  |


## beginBatch

Begins an ODATA batch,which allows multiple REST queries to be bundled into 
a single web request.

##### Signature

#### Returns
ODataBatch

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `batchOptions`    | [IODataBatchOptions](IODataBatchOptions.md) | _Optional._ |


## fetch

Generally,the parameters and semantics for HttpClient.fetch() are essentially 
the same as the WHATWG API standard that is documented here: 
https: 
 
The HttpClient subclass adds some additional behaviors that are convenient when 
working with SharePoint ODATA API's (which can be avoided by using 
BasicHttpClient instead): 
- Default "Accept" and "Content-Type" headers are added if not explicitly specified. 
- For write operations, an "X-RequestDigest" header is automatically added 
- The request digest token is automatically fetched and stored in a cache, with 
support for preloading 
 
For a write operation, HttpClient will automatically add the "X-RequestDigest" 
header, which may need to be obtained by issuing a seperate request such as 
"https: 
SPWeb URL can be guessed by looking for a reserved URL segment such as "_api" 
in the original URL passed to fetch(); if not, use IHttpClientOptions.webUrl 
to specify it explicitly. 


##### Signature

#### Returns
Promise<Response>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | string |  |
| `options`    | [IHttpClientOptions](IHttpClientOptions.md) |  |


## get

Calls fetch(),but sets the method to 'GET'.

##### Signature

#### Returns
Promise<Response>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | string |  |
| `options`    | [IHttpClientOptions](IHttpClientOptions.md) | _Optional._ |


## getWebUrlFromRequestUrl

This uses a heuristic to guess the SPWeb URL associated with the provided 
REST URL. This is necessary for operations such as the X-RequestDigest 
and ODATA batching, which require POSTing to a separate REST endpoint 
in order to complete a request. 
For excample, if the requestUrl is "/sites/site/web/_api/service", 
the returned URL would be "/sites/site/web". Or if the requestUrl 
is "http: 
"http:

##### Signature

#### Returns
string

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `requestUrl`    | string |  |


## post

Calls fetch(),but sets the method to 'POST'.

##### Signature

#### Returns
Promise<Response>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | string |  |
| `options`    | [IHttpClientOptions](IHttpClientOptions.md) |  |

