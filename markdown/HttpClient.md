# HttpClient resource type

HttpClient is used to perform REST calls against SharePoint. It adds default 
headers, manages the digest needed for writes, and collects telemetry that 
helps the service to monitor the performance of an application. 
 
For communicating with non-SharePoint services, use the BasicHttpClient 
class instead.




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [HttpClient](HttpClient.md) | HttpClient is used to perform REST calls against SharePoint |
|beginBatch      | public | [ODataBatch](ODataBatch.md) | Begins an ODATA batch, which allows multiple REST queries to be bundled into  a single web request |
|fetch      | public | Promise<Response> | Generally, the parameters and semantics for HttpClient |
|get      | public | Promise<Response> | Calls fetch(), but sets the method to 'GET' |
|static      | public | string | This uses a heuristic to guess the SPWeb URL associated with the provided  REST URL |
|post      | public | Promise<Response> | Calls fetch(), but sets the method to 'POST' |


