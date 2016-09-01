# IHttpClientOptions interface

_Implements/extends: [IBasicHttpClientOptions](IBasicHttpClientOptions.md)_

This interface defines the options for the HttpClient operations such as 
get(), post(), fetch(), etc. It is based on the WHATWG API standard 
parameters that are documented here: 
https:




### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`body`      | BodyInit |  |
|`cache`      | [ILocalizedString](ILocalizedString.md),[ILocalizedString](ILocalizedString.md) |  |
|`credentials`      | string,RequestCredentials |  |
|`method`      | string |  |
|`mode`      | string,RequestMode |  |
|`webUrl`      | string | For a write operation,HttpClient will automatically add the  "X-RequestDigest" header, which may need to be fetched using a seperate  request such as "https:  Typically the SPWeb URL ("https:  example) can be guessed by looking for a reserved URL segment such  as "_api" in the original REST query, however certain REST endpoints  do not contain a reserved URL segment; in this case, the webUrl can  be explicitly specified using this option |




