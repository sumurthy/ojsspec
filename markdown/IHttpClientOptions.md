# IHttpClientOptions interface

headers ?: HeaderInit|{ [index: string]: string }



### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`body`      |` BodyInit` |  |
|`cache`      |` [ILocalizedString](ILocalizedString.md),[ILocalizedString](ILocalizedString.md)` |  |
|`credentials`      |` string,RequestCredentials` |  |
|`method`      |` string` |  |
|`mode`      |` string,RequestMode` |  |
|`webUrl`      |` string` | For a write operation, HttpClient will automatically add the  "X-RequestDigest" header, which may need to be fetched using a seperate  request such as "https://example |




