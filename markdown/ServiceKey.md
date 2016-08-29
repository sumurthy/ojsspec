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
|static      | public | string, | your application |
|defaultCreator      | public | ServiceCreator<T> | your application |
|id      | public | string | your application |
|name      | public | string | your application |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[constructor](#constructor)      | public | [ServiceKey](ServiceKey.md) | PRIVATE - Do not call this from your own code |
|[static](#static)      | public | ServiceKey<T> | your application |




## constructor

PRIVATE - Do not call this from your own code.

##### Signature
constructor(id: string, name: string, defaultCreator: ServiceCreator<T>)

#### Returns
ServiceKey

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| id     | undefined | %optional% undefined |
| name     | undefined | %optional% undefined |
| defaultCreator     | undefined | %optional% undefined |


## static

your application.

##### Signature
static createCustom < T >(name: string, defaultCreator: ServiceCreator<T>): ServiceKey<T>

#### Returns
ServiceKey<T>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| name     | undefined | %optional% undefined |
| defaultCreator     | undefined | %optional% undefined |

