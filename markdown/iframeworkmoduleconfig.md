# IFrameworkModuleConfig interface

_Extends: [`IModuleConfig`](imoduleconfig.md)_



 
This is the interface for a script module with the "framework" type. Modules of this type will be provided by the 
framework runtime. The key in the "scriptResources" dictionary must be the name of a standard framework library. 





### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`failoverPath`      | `string `,[` IPath`](ipath.md) | Example: "https:  Definition: A path to the framework-supplied module in case the framework fails to load the requested version |
|`shouldNotPreload`      | `boolean` | Example: true  Definition: If set to "true", this module should not be preloaded when loading the component |
|`type`      | `'internal' `,` 'framework' `,` 'localized'` | Example: "localized"  Definition: The type of the script block |
|`version`      | `string` | Example: "2 |



