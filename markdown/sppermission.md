# SPPermission class





https: 
This class can be used to determine if the current user has a requested set of permissions. 
Specifies the built-in permissions available in SharePoint Foundation 
Derived from OneDriveWeb/ODBNext/odsp-shared 
https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spbasepermissions.aspx



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`public`     | `null` | [`SPPermission`](sppermission.md) | View past versions of a list item or document |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`SPPermission`](sppermission.md) | https:  This class can be used to determine if the current user has a requested set of permissions |
|[`hasAllPermissions`](#hasallpermissions)     | `public` | `boolean` | Function for determining if a given permission mask has all of the requested permissions |
|[`hasAnyPermissions`](#hasanypermissions)     | `public` | `boolean` | Function for determining if a given permission mask has any of the requested permissions |
|[`hasPermission`](#haspermission)     | `public` | `boolean` | Function for checking if a given permission mask has the requested permission |





### constructor

https: 
This class can be used to determine if the current user has a requested set of permissions. 
Specifies the built-in permissions available in SharePoint Foundation 
Derived from OneDriveWeb/ODBNext/odsp-shared 
https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spbasepermissions.aspx

#### Signature
`constructor(value: IODataBasePermission)`

#### Returns
[`SPPermission`](sppermission.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | [`IODataBasePermission`](iodatabasepermission.md) |  |


### hasAllPermissions

Function for determining if a given permission mask has all of the requested permissions. 
Function for determining if a given permission mask has all of the requested permissions.

#### Signature
`hasAllPermissions(...requestedPerms: SPPermission[]): boolean`

#### Returns
`boolean`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `...requestedPerms`    | `SPPermission[]` |  |


### hasAnyPermissions

Function for determining if a given permission mask has any of the requested permissions. 
Function for determining if a given permission mask has any of the requested permissions.

#### Signature
`hasAnyPermissions(...requestedPerms: SPPermission[]): boolean`

#### Returns
`boolean`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `...requestedPerms`    | `SPPermission[]` |  |


### hasPermission

Function for checking if a given permission mask has the requested permission. 
Function for checking if a given permission mask has the requested permission.

#### Signature
`hasPermission(requestedPerm: SPPermission): boolean`

#### Returns
`boolean`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `requestedPerm`    | [`SPPermission`](sppermission.md) | - The SPPermission object to be compared against the original  Function for checking if a given permission mask has the requested permission |

