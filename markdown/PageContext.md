# PageContext resource type

The page context represents contextual information about the SharePoint page that 
is currently being viewed, such as its site URL, the client side application ID, 
the current user, etc. The page context objects themselves represent key information 
that is needed e.g. to identify the site/web/list/listitem in a REST service call, 
but it is not a full cache with invalidation and change notifications. If your 
application maintains such a cache, it can keep the PageContext up to date by 
means of methods such as SPListItem.updateOdataObject().


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|application      | public |  ApplicationContext | Contextual information for the client-side application |
|core      | public |  PageContextCore | Contextual information for the SharePoint SPPageContextInfo object  If unsure whether this object is initialized, check the SPPageContextInfo |
|list      | public |  SPList | Contextual information for the SharePoint list that is hosting the page |
|listItem      | public |  SPListItem | Contextual information for the SharePoint list item that stores data for the page |
|quickLaunch      | public |  SPNavigationNodeCollection | Contextual quick launch navigation information for the page |
|site      | public |  SPSite | Contextual information for the SharePoint site collection that is hosting the page |
|topNav      | public |  SPNavigationNodeCollection | Top navigation information for the page |
|urlQueryParameters      | public |  UrlQueryParameterCollection | Object for retrieving the current page's query parameter values |
|user      | public |  SPUser | Contextual information for the current SharePoint user  If unsure whether this object is initialized, check the SPPageContextInfo |
|web      | public |  SPWeb | Contextual information for the SharePoint site ("web") that is hosting the page |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [PageContext](PageContext.md) | The page context represents contextual information about the SharePoint page that  is currently being viewed, such as its site URL, the client side application ID,  the current user, etc |


