# ClientSideApplication resource type

This is the system base class for client-side applications. It manages the overall 
life cycle of your application, and is the first entry point for your code to start 
executing when the page loads. The two main events are onLoad() which occurs first, 
and onRender() which occurs after the shell has initialized the environment and 
completed rendering the page chrome.


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|domElement      | protected |  HTMLDivElement | Returns the DOM element where the application is expected to render its content |
|shell      | protected |  IShell | Returns a reference to the shell, which is a global singleton object that contains  the main service classes |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [ClientSideApplication](ClientSideApplication.md) | This is the system base class for client-side applications |
|load      | public |  void | RESERVED FOR INTERNAL USAGE |
|onLoad      | protected |  void | This life cycle event occurs immediately after the shell has loaded the application,  before the DOM is constructed |
|onRender      | protected |  void | This lifecycle event occurs after the shell has constructed the DOM for the page chrome |
|render      | public |  void | RESERVED FOR INTERNAL USAGE |
|suiteNavConfiguration      | public |  ISuiteNavManagerConfiguration | Returns a reference to the shell, which is a global singleton object that contains  the main service classes |


