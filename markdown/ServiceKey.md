# ServiceKey `<T>` class



_Type parameters: `<T>`_

The ServiceKey is a lookup key that is used when calling ServiceScope.consume() 
to fetch a dependency. The key also defines a default implementation of the 
dependency, which will be autocreated by the root scope if the dependency is not found. 
Providing a default implementation ensures that new dependencies can be safely 
introduced without inadvertently breaking components that are loaded by an older host 
(that does not provide the new dependency).



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`defaultCreator`     | `public` | `ServiceCreator<T>` | Constructs a new ServiceKey whose default implementation will be obtained  by invoking the specified callback |
|`id`     | `public` | `string` | Constructs a new ServiceKey whose default implementation will be obtained  by invoking the specified callback |
|`name`     | `public` | `string` | Constructs a new ServiceKey whose default implementation will be obtained  by invoking the specified callback |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | `ServiceCreator<T>` | PRIVATE - Do not call this from your own code |
|[`create<T>`](#create<t>)     | `public, _static_` | [`ServiceKey<T>;`](servicekey.md) | Constructs a new ServiceKey whose default implementation will be a new instance of  a TypeScript class that accepts the standard constructor parameter |
|[`createCustom<T>`](#createcustom<t>)     | `public, _static_` | [`ServiceKey<T>`](servicekey.md) | Constructs a new ServiceKey whose default implementation will be obtained  by invoking the specified callback |




### constructor

PRIVATE - Do not call this from your own code.

#### Signature
`constructor(id: string,name: string,defaultCreator: ServiceCreator<T>)`

#### Returns
`ServiceCreator<T>`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `id`    | `string` |  |
| `name`    | `string` |  |
| `defaultCreator`    | `ServiceCreator<T>` |  |


### create<T>

Constructs a new ServiceKey whose default implementation will be a new instance of 
a TypeScript class that accepts the standard constructor parameter. If you want to 
specify custom constructor parameters, use createCustom() instead.

#### Signature
`public create<T>(name: string,serviceClass: { new (serviceScope: ServiceScope) }): ServiceKey<T>;`

#### Returns
[`ServiceKey<T>;`](servicekey.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | `string` |  |
| `serviceClass`    | `{ new (serviceScope: ServiceScope) }` |  |


### createCustom<T>

Constructs a new ServiceKey whose default implementation will be obtained 
by invoking the specified callback.

#### Signature
`public createCustom<T>(name: string,defaultCreator: ServiceCreator<T>): ServiceKey<T>`

#### Returns
[`ServiceKey<T>`](servicekey.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `name`    | `string` |  |
| `defaultCreator`    | `ServiceCreator<T>` |  |

