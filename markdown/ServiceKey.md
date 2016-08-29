# ServiceKey class

The ServiceKey is a lookup key that is used when calling ServiceScope.consume() 
to fetch a dependency. The key also defines a default implementation of the 
dependency, which will be autocreated by the root scope if the dependency is not found. 
Providing a default implementation ensures that new dependencies can be safely 
introduced without inadvertently breaking components that are loaded by an older host 
(that does not provide the new dependency).


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`create`     | public | `string,` | your application |
|`defaultCreator`     | public | `ServiceCreator<T>` | your application |
|`id`     | public | `string` | your application |
|`name`     | public | `string` | your application |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[constructor](#constructor)     | public | `[ServiceKey](ServiceKey.md)` | PRIVATE - Do not call this from your own code |
|[{](#{)     | serviceClass: | `ServiceKey<T>;` | your application |
|[createCustom](#createcustom)     | public, _static_ | `ServiceKey<T>` | your application |




## constructor

PRIVATE - Do not call this from your own code.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `id`    | `undefined` | undefined |
| `name`    | `undefined` | undefined |
| `defaultCreator`    | `undefined` | undefined |


## {

your application.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | `undefined` | undefined |


## createCustom

your application.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | `undefined` | undefined |
| `defaultCreator`    | `undefined` | undefined |

