# ServiceScope resource type

ServiceScope provides a formalized way for components to register and consume dependencies 
("services"), and to enable different implementations to be registered in different scopes. 
This improves modularity by decoupling components from their dependencies in an extensible way. 
 
For example, suppose that various components need access to an IPageManager instance. We could 
simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if 
we need to create a pop-up dialog that requires a second PageManager instance. A better solution 
would be to add the PageManager as a constructor parameter for each component that requires it, 
however then we immediately face the problem that any code that calls these constructors 
also needs a PageManager parameter. In an application with many such dependencies, business 
logic that ties together many subsystems would eventually pick up a constructor parameter 
for every possible dependency, which is unwieldy. A natural solution would be to move all the 
dependencies into a class with name like "ApplicationContext", and then pass this around as our 
constructor parameter. This enables the PageManager to be passed to classes that need it 
without cluttering the intermediary classes that don't. However, it still has a design problem 
that "ApplicationContext" has hard-coded dependencies on many unrelated things. A more flexible 
approach is to make it a dictionary that can look up items for consumers/providers who know the 
right lookup key (i.e. ServiceKey). This is the popular "service locator" design pattern, 
familiar from the SPContext API in classic SharePoint. 
 
ServiceScope takes this idea a step further in two important ways: First, it provides a scoping 
mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager 
instance while still sharing other common dependencies. Secondly, it allows for a ServiceKey 
to provide a default implementation of the dependency. This is important for API stability in 
our modular client-side environment: For example, suppose that version 2.0 of our application 
introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume. 
If the version 2.0 component gets loaded by an older 1.0 application, it would fail. We could 
fix this by requiring each consumer to check for any missing dependencies and handle that case, 
but it would require a lot of checks. A better solution is to ensure that a default implementation 
always exists, perhaps just a trivial behavior, so that components don't have to worry about it. 
 
Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or 
ServiceScope.startNewChild(). They are initially in an "unfinished" state, during which provide() 
can be called to register service keys, but consume() is forbidden. After ServiceScope.finish() 
is called, consume() is allowed and provide() is now forbidden. These semantics ensure that 
ServiceScope.consume() always returns the same result for the same key, and does not depend on 
order of initialization. It also allows us to support circular dependencies without worrying 
about infinite loops, even when working with external components that were implemented by 
third parties. To avoid mistakes, it's best to always call consume() inside a callback from 
serviceScope.whenFinished().


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|createAndProvide      | public | ServiceKey<T>, | This is a shorthand function that its equivalent to constructing a new instance of the  simpleServiceClass, then registering it by calling ServiceScope |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [ServiceScope](ServiceScope.md) | PRIVATE CONSTRUCTOR - DO NOT CALL THIS FROM YOUR OWN CODE |
|consume      | public | T | Components should call this function to "consume" a dependency, i |
|createDefaultAndProvide      | public | T | This is a shorthand function that constructs the default implementation of the specified  serviceKey, and then registers it by calling ServiceScope |
|finish      | public | void | When a ServiceScope is first started, it is in an "unfinished" state where provide() is  allowed but consume() is not allowed |
|getParent      | public | [ServiceScope](ServiceScope.md) | Returns the parent of the current ServiceScope, or undefined if this is a root scope |
|provide      | public | T | ServiceScope |
|startNewChild      | public | [ServiceScope](ServiceScope.md) | Constructs a new ServiceScope that is a child of the current scope |
|static      | public | [ServiceScope](ServiceScope.md) | Create a new root-level ServiceScope |
|whenFinished      | public | void | It is an error to call ServiceScope |


