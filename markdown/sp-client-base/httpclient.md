# HttpClient class

_Implements: [`BasicHttpClient`](../sp-client-base/basichttpclient.md)_



HttpClient is used to perform REST calls against SharePoint. It adds default 
headers, manages the digest needed for writes, and collects telemetry that 
helps the service to monitor the performance of an application. 
 
For communicating with non-SharePoint services, use the BasicHttpClient 
class instead.


## Constructor


**Signature:** _constructor(serviceScope: [ServiceScope](../sp-client-base/servicescope.md))_

**Returns**: [`HttpClient`](../sp-client-base/httpclient.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](../sp-client-base/servicescope.md) |  |





## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`beginBatch(batchOptions)`](beginbatch-qdz89.md)     | `public` | [`ODataBatch`](../sp-client-base/odatabatch.md) | Begins an ODATA batch,which allows multiple REST queries to be bundled into  a single web request. |
|[`fetch(url,options)`](fetch-gl3m9.md)     | `public` | [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)> | Generally,the parameters and semantics for HttpClient.fetch() are essentially  the same as the WHATWG API standard that is documented here:  https://fetch.spec.whatwg.org/    The HttpClient subclass adds some additional behaviors that are convenient when  working with SharePoint ODATA API's (which can be avoided by using  BasicHttpClient instead):  - Default "Accept" and "Content-Type" headers are added if not explicitly specified.  - For write operations, an "X-RequestDigest" header is automatically added  - The request digest token is automatically fetched and stored in a cache, with  support for preloading    For a write operation, HttpClient will automatically add the "X-RequestDigest"  header, which may need to be obtained by issuing a seperate request such as  "https://example.com/sites/sample/_api/contextinfo". Typically the appropriate  SPWeb URL can be guessed by looking for a reserved URL segment such as "_api"  in the original URL passed to fetch(); if not, use IHttpClientOptions.webUrl  to specify it explicitly.   |
|[`get(url,options)`](get-hbbg9.md)     | `public` | [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)> | Calls fetch(),but sets the method to 'GET'. |
|[`getWebUrlFromRequestUrl(requestUrl)`](getweburlfromrequesturl-j9sa9.md)     | `public, static` | `string` | This uses a heuristic to guess the SPWeb URL associated with the provided  REST URL. This is necessary for operations such as the X-RequestDigest  and ODATA batching, which require POSTing to a separate REST endpoint  in order to complete a request.  For excample, if the requestUrl is "/sites/site/web/_api/service",  the returned URL would be "/sites/site/web". Or if the requestUrl  is "http://example.com/_layouts/service", the returned URL would be  "http://example.com". |
|[`post(url,options)`](post-azhu9.md)     | `public` | [`Promise`](../es6-promise/promise.md)<[`Response`](../whatwg-fetch/response.md)> | Calls fetch(),but sets the method to 'POST'. |




