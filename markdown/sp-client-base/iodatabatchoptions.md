# IODataBatchOptions interface





This interface is passed to the ODataBatch constructor. It specifies options 
that affect the entire batch.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`webUrl`      | `string` | ODataBatch will need to perform its POST to an endpoint such as  "http://example.com/sites/sample/_api/$batch". Typically the SPWeb URL  ("https://example.com/sites/sample" in this example) can be guessed by  looking for a reserved URL segment such as "_api" in the first URL  passed to fetch(), but if not, the webUrl can be explicitly specified  using this option. |





