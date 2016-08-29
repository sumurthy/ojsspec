# SPPermission class

This class can be used to determine if the current user has a requested set of permissions. 
Specifies the built-in permissions available in SharePoint Foundation 
Derived from OneDriveWeb/ODBNext/odsp-shared 
https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spbasepermissions.aspx


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`static`     | public | `[SPPermission](SPPermission.md)` | View past versions of a list item or document |
|`value`     | public | `[IODataBasePermission](IODataBasePermission.md)` | Returns the value of this SPPermission object |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[constructor](#constructor)     | public | `[SPPermission](SPPermission.md)` |  |
|[hasAllPermissions](#hasallpermissions)     | public | `boolean` | Function for determining if a given permission mask has all of the requested permissions |
|[hasAnyPermissions](#hasanypermissions)     | public | `boolean` | Function for determining if a given permission mask has any of the requested permissions |
|[hasPermission](#haspermission)     | public | `boolean` | Function for checking if a given permission mask has the requested permission |




## constructor



##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value `    | `undefined` | _%optional%_ undefined |


## hasAllPermissions

Function for determining if a given permission mask has all of the requested permissions.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `...requestedPerms `    | `undefined` | _%optional%_ undefined |


## hasAnyPermissions

Function for determining if a given permission mask has any of the requested permissions.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `...requestedPerms `    | `undefined` | _%optional%_ undefined |


## hasPermission

Function for checking if a given permission mask has the requested permission.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `requestedPerm `    | `undefined` | _%optional%_ undefined |

