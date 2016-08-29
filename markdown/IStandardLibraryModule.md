# IStandardLibraryModule interface

Definition: A path to this module's javascript resource either as a fully-qualified URL or as a path under the 
paths provided in the "internalModuleBaseUrls" field. The script referenced by this field is loaded by default 
unless a debug version of the script is provided and explicitly requested. 
Required: yes 
Supported values: The path to the default/non-debug script either as a fully-qualified URL or as a path under the 
paths providedin the "internalModuleBaseUrls" field. 
Example: "master_2015-04-20/my-application.bundle_1928f8a0.js"



### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`aliases:`      |` IBundleReference[]` | References to modules that are swappable for this module (for example, modules that contain a superset of  this module) |
|`bundleReference:`      |` [IBundleReference](IBundleReference.md)` | Reference (id and entryName pair) to the bundle |
|`dependentIds:`      |` string[]` | The IDs of modules this module depends on |
|`preloadId:`      |` string` | The ID of the bundle to preload |
|`}`      |` }` | The ID of the bundle to preload |




