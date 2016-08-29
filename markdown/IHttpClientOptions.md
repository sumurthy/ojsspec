# IHttpClientOptions interface

This interface defines the options for the HttpClient operations such as 
get(), post(), fetch(), etc. It is based on the WHATWG API standard 
parameters that are documented here: 
https://fetch.spec.whatwg.org/



### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|body      | BodyInit |  |
|cache      | [ILocalizedString](ILocalizedString.md),[ILocalizedString](ILocalizedString.md) |  |
|credentials      | string,RequestCredentials |  |
|method      | string |  |
|mode      | string,RequestMode |  |
|webUrl      | string | For a write operation, HttpClient will automatically add the  "X-RequestDigest" header, which may need to be fetched using a seperate  request such as "https://example |




