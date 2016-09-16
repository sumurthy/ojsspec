# IClientSideWebPartStatusRenderer interface













## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`clearError`](#clearerror)      | `void` | Clear the webpart error message. |
|[`clearLoadingIndicator`](#clearloadingindicator)      | `void` | Clear the loading indicator. |
|[`displayLoadingIndicator`](#displayloadingindicator)      | `void` | Display a loading spinner. |
|[`renderError`](#rendererror)      | `void` | Render the provided error message in the webpart container div. |




### clearError

Clear the webpart error message.

**Signature:** `clearError(domElement: HTMLElement): void`

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `HTMLElement` | - the webpart container div. |


### clearLoadingIndicator

Clear the loading indicator.

**Signature:** `clearLoadingIndicator(domElement: Element): void`

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `Element` | - the webpart container div. |


### displayLoadingIndicator

Display a loading spinner.

**Signature:** `displayLoadingIndicator(domElement: Element,loadingMessage: string): void`

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `Element` | - the webpart container div. |
| `loadingMessage`    | `string` | - the message to be displayed when the loading spinner id displayed. |


### renderError

Render the provided error message in the webpart container div.

**Signature:** `renderError(domElement: HTMLElement,error: Error | string): void`

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `domElement`    | `HTMLElement` | - the webpart container div. |
| `error`    | `Error `,` string` | - the error message. |
