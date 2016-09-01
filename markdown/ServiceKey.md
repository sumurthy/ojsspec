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
|`create`     | public | string, | your application |
|`defaultCreator`     | public | ServiceCreator<T> | your application |
|`id`     | public | string | your application |
|`name`     | public | string | your application |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[constructor](#constructor~93886)     | public | ServiceCreator<T> | PRIVATE - Do not call this from your own code |
|[createCustom<T>](#createcustom<t>~94115)     | public, _static_ | [ServiceKey<T>](ServiceKey.md) | your application |




## constructor

PRIVATE - Do not call this from your own code.

##### Signature

#### Returns
ServiceCreator<T>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `id`    | string |  |
| `name`    | string |  |
| `defaultCreator`    | ServiceCreator<T> |  |


## createCustom<T>

your application.

##### Signature

#### Returns
ServiceKey<T>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | string |  |
| `defaultCreator`    | ServiceCreator<T> |  |

