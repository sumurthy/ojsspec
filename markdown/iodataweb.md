# IODataWeb interface





https: 
Represents an OData SP.Web object. For more information about this object 
see the MSDN documentation here: 
https://msdn.microsoft.com/en-us/library/office/jj860569.aspx




### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`Created`      | `string` | Example: "/Date(2016,0,20,12,58,7,0)/"  Gets a value that specifies when the site was created |
|`CurrentChangeToken`      | [`IODataChangeToken`](iodatachangetoken.md) | Represents the unique sequential location of a change within the change log |
|`CustomMasterUrl`      | `string` | Example: "/sites/PubSite/_catalogs/masterpage/seattle |
|`Description`      | `string` | Gets or sets the description for the site |
|`Id`      | `string` | Example: "/Guid(92ea328e-9f50-49a6-9da5-2f2dd5577041)/"  Gets a value that specifies the site identifier for the site |
|`IsMultilingual`      | `boolean` | Value that represents if the web was  Value that represents if the web was |
|`Language`      | `number` | Example: 1033  Gets a value that specifies the LCID for the language that is used on the site |
|`LastItemModifiedDate`      | `string` | Example: "/Date(1453618828000)/"  Gets a value that specifies when an item was last modified in the site |
|`MasterUrl`      | `string` | Example: "/sites/PubSite/_catalogs/masterpage/seattle |
|`NoCrawl`      | `boolean` | Determines if a particular web will be crawled by search or not |
|`QuickLaunchEnabled`      | `boolean` | Gets or sets a value that specifies whether the Quick Launch area is enabled on the site |
|`RecycleBinEnabled`      | `boolean` | Gets or sets a value that determines whether the recycle bin is enabled for the website |
|`ServerRelativeUrl`      | `string` | Example: "/sites/PubSite"  Gets or sets the server-relative URL for the Web site |
|`SiteLogoUrl`      | `string` | Gets the url for the logo of this particular site |
|`Title`      | `string` | The title of the web |
|`UIVersion`      | `number` | Example: 15  Gets or sets the user interface (UI) version of the Web site |
|`Url`      | `string` | Example: "http:  Gets the absolute URL for the website |
|`WebTemplate`      | `string` | Example: "BLANKINTERNET"  Gets the name of the site definition or site template that was used to create the site |





