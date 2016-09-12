# IInternalModuleConfig interface

_Extends: [`IModuleConfig`](imoduleconfig.md)_



 
This is the interface for a script module with the "internal" type. Modules of this type must be provided by the 
component developer. 





### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`globalDependencies`      | `string` | Example: ["jquery"]  Definition: For non-AMD/module-pattern scripts that have dependencies (for example, jQuery plugins), the module  loader will ensure that those dependencies are already loaded |
|`globalName`      | `string` | Example: "$"  Definition: In order to load scripts that don't follow the AMD/module-pattern where "define" or "require" is  called and dependencies are explicitly listed and exports are explicitly returned, the module loader needs to  know which global variable must be examined |
|`path`      | `string `,[` IPath`](ipath.md) | Example: "master_2015-04-20/my-application |
|`shouldNotPreload`      | `boolean` | Example: true  Definition: If set to "true", this module should not be preloaded when loading the component |
|`type`      | `'internal' `,` 'framework' `,` 'localized'` | Example: "localized"  Definition: The type of the script block |





