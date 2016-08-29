## resolve<R>

Make a new promise from the thenable. 
A thenable is promise-like in as far as it has a "then" method.

##### Signature
resolve<R>(value?: R | Thenable<R>): Promise<R>

#### Returns
Promise<R>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| value?     | undefined | %optional% undefined |


## reject

Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error

##### Signature
reject(error: any): Promise<any>

#### Returns
Promise<any>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| error     | undefined | %optional% undefined |


## all<R>

Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects. 
the array passed to all can be a mixture of promise-like objects and other objects. 
The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.

##### Signature
all<R>(promises: (R | Thenable<R>)[]): Promise<R[]>

#### Returns
Promise<R[]>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| promises     | undefined | %optional% undefined |


## race<R>

Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.

##### Signature
race<R>(promises: (R | Thenable<R>)[]): Promise<R>

#### Returns
Promise<R>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| promises     | undefined | %optional% undefined |


## combineURLPaths

Combines any number of URL paths.

##### Signature
combineURLPaths(...url: string[]): string

#### Returns
string

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| ...url     | undefined | %optional% undefined |


## getPathNameFromAbsoluteUrl

Get's the path name from an absolute url. 


##### Signature
getPathNameFromAbsoluteUrl(url: string): string

#### Returns
string

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| url     | undefined | %optional% undefined |


## PropertyPaneButton

Helper method to create a Button on the PropertyPane.

##### Signature
PropertyPaneButton(targetProperty: string,

#### Returns
string,

#### Parameters
None


## PropertyPaneCheckbox

Helper method to create a Checkbox on the PropertyPane.

##### Signature
PropertyPaneCheckbox(targetProperty: string,

#### Returns
string,

#### Parameters
None


## PropertyPaneChoiceGroup

Helper method to create a Choice Group on the PropertyPane.

##### Signature
PropertyPaneChoiceGroup(targetProperty: string,

#### Returns
string,

#### Parameters
None

