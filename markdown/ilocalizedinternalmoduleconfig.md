# ILocalizedInternalModuleConfig interface

_Extends: [`IModuleConfig`](imoduleconfig.md)_



 
This is the interface for a script module with the "localized" type. Modules of this type must be provided by the 
component developer. These script resources are similar to those of the "internal" type, but they may be present 
at a number of different paths, to be selected by the user's locale. Paths in this module type are loaded exactly 
the same way as "internal" modules are. 





### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`defaultPath`      | `string `,[` IPath`](ipath.md) | Example: "master_2015-04-20/my-application_strings_default_af378e0d |
|`[`      | `string ]: string `,` IPath}` | }  Definition: This is a dictionary of locale keys (in the "ll-cc" format) to paths to this module's localed  javascript resource either as a fully-qualified URL or as a path under the paths provided in the  "internalModuleBaseUrls" field |
|`shouldNotPreload`      | `boolean` | Example: true  Definition: If set to "true", this module should not be preloaded when loading the component |
|`type`      | `'internal' `,` 'framework' `,` 'localized'` | Example: "localized"  Definition: The type of the script block |





