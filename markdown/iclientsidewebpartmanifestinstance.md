# IClientSideWebPartManifestInstance `<TProperties>` interface



_Type parameters: `<TProperties>`_

 
Manifest that is relevant to a Web Part instance. 





### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`componentType`      | `'Application' `,` 'WebPart' `,` 'Library'` | Example: "Application"  Definition: Type of client side component |
|`description`      | [`ILocalizedString`](ilocalizedstring.md) | }  Definition: Description of the web part represented as a dictionary of locale keys to description values |
|`group`      | [`ILocalizedString`](ilocalizedstring.md) |  |
|`groupId`      | `string` |  |
|`iconImageUrl`      | `string` | Example: "https:  Definition: The icon for the WebPart, to be displayed in the toolbox, represented an image URL |
|`id`      | `string` | Example: "dbef608d-3ad5-4f8f-b139-d916f2f0a294"  Definition: A universally unique component id |
|`imageLinkPropertyNames`      | `string` | Example: ["image[0] |
|`linkPropertyNames`      | `string` | Example: ["destination |
|`loaderConfig`      | [`IClientSideComponentLoaderConfig`](iclientsidecomponentloaderconfig.md) |   Definition: This portion of the configuration describes how the component is to be loaded and initialized by a  client |
|`manifestVersion`      | `number` | Example: 1  Definition: Version of the component manifest schema |
|`officeFabricIconFontName`      | `string` | Example: "graph"  Definition: The icon for the Web Part, to be displayed in the toolbox, represented as a character name in the  Office 365 icon font file |
|`properties`      | `TProperties` | Example: {"imageSource": "https:  Definition: every Web Part is expected to have some custom properties |
|`searchablePropertyNames`      | `string` | Example: ["text"]  Definition: List of names of Web Part properties that need to be indexed for search |
|`title`      | [`ILocalizedString`](ilocalizedstring.md) | }  Definition: Title of the web part represented as a single a dictionary of locale keys to title values |
|`version`      | `string` | Example: "1 |




