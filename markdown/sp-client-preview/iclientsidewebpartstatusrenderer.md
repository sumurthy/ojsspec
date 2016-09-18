# IClientSideWebPartStatusRenderer interface













## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[clearError(domElement)](clearerror(domelement))      | `void` | Clear the webpart error message. |
|[clearLoadingIndicator(domElement)](clearloadingindicator(domelement))      | `void` | Clear the loading indicator. |
|[displayLoadingIndicator(domElement,loadingMessage)](displayloadingindicator(domelement-loadingmessage))      | `void` | Display a loading spinner. |
|[renderError(domElement,error)](rendererror(domelement-error))      | `void` | Render the provided error message in the webpart container div. |




### clearError(domElement)

Clear the webpart error message.

**Signature:** ``clearError(domElement: HTMLElement): void``

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `HTMLElement` | - the webpart container div. |


### clearLoadingIndicator(domElement)

Clear the loading indicator.

**Signature:** ``clearLoadingIndicator(domElement: Element): void``

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `Element` | - the webpart container div. |


### displayLoadingIndicator(domElement,loadingMessage)

Display a loading spinner.

**Signature:** ``displayLoadingIndicator(domElement: Element,loadingMessage: string): void``

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `Element` | - the webpart container div. |
| `loadingMessage`    | `string` | - the message to be displayed when the loading spinner id displayed. |


### renderError(domElement,error)

Render the provided error message in the webpart container div.

**Signature:** ``renderError(domElement: HTMLElement,error: Error | string): void``

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `HTMLElement` | - the webpart container div. |
| `error`    | `Error `,` string` | - the error message. |

