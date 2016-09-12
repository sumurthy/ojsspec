# IHttpClientOptions interface

_Extends: [`IBasicHttpClientOptions`](ibasichttpclientoptions.md)_



https: 
This interface defines the options for the HttpClient operations such as 
get(), post(), fetch(), etc. It is based on the WHATWG API standard 
parameters that are documented here: 
https://fetch.spec.whatwg.org/




### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`body`      | [`BodyInit`](whatwg-fetch-module.md#types) | https:  This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc |
|`cache`      | `string`,[`RequestCache`](requestcache.md) | https:  This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc |
|`credentials`      | `string`,[`RequestCredentials`](requestcredentials.md) | https:  This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc |
|`headers`      | [`HeaderInit`](whatwg-fetch-module.md#types),`{ [index: string]: string }` | https:  This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc |
|`method`      | `string` | https:  This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc |
|`mode`      | `string`,[`RequestMode`](requestmode.md) | https:  This interface defines the options for the HttpClient operations such as  get(), post(), fetch(), etc |
|`webUrl`      | `string` | be explicitly specified using this option |





