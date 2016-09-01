# IClientSideWebPartStatusRenderer interface



error messages for a webpart.







## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[clearError](#clearerror~11918)      | void | Clear the webpart error message |
|[clearLoadingIndicator](#clearloadingindicator~98189)      | void | Clear the loading indicator |
|[displayLoadingIndicator](#displayloadingindicator~12628)      | void | Display a loading spinner |
|[renderError](#rendererror~11840)      | void | Render the provided error message in the webpart container div |



## clearError

Clear the webpart error message.

##### Signature

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | HTMLElement |  |


## clearLoadingIndicator

Clear the loading indicator.

##### Signature

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | Element |  |


## displayLoadingIndicator

Display a loading spinner.

##### Signature

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | Element |  |
| `loadingMessage`    | string |  |


## renderError

Render the provided error message in the webpart container div.

##### Signature

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | HTMLElement |  |
| `error`    | Error , string |  |

