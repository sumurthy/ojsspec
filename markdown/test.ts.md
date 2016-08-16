/// <reference path="../typings/tsd.d.ts" />

/**
 * Implements the minimal functionality for a webpart. This class also provides a bunch of parameter
 * validate and access to readonly properties like the displayMode, properties, manifest, instanceId,
 * domElement, and so on...
 *
 * The following methods in
 * the BaseClientSideWebPart have no functionality and are intended to be overridden
 * by the derived webpart:
 *
 *    render       Render the webpart inside the provided dom element.
 */
 interface IWebPartHost {
   /**
    * BasicHttpClient is used to perform REST calls with general internet services.
    * For communicating with SharePoint services, use HttpClient instead.
    */
   basicHttpClient: BasicHttpClient;
   /**
    * Event aggregator
    */
   eventAggregator ?: IEventAggregator;
   hostType: HostType;
   /**
    * HttpClient is used to perform REST calls with SharePoint services.
    * It implements special enhancements such as configuring default headers, adding
    * an "X-RequestDigest" header for write operations, and collecting telemetry
    * to help the service monitor the performance and reliability of the application.
    *
    * For communicating with non-SharePoint services, use BasicHttpClient instead.
    */
   httpClient: HttpClient;
   /**
    * @todo: (VSO Task 189081) When the new IPageContext API is completed, we will
    * rename newPageContext->pageContext and migrate existing web part projects.
    * (VSO Task #163986 is tracking the new PageContext design.)
    * @something else
    */
   newPageContext: IPageContext;
   /**
    * Page context provided by the host. This context is expected to provide sharepoint
    * page level info like site URLs, locale info, theme id etc...
    */
   pageContext: PreloadedPageData;
   /**
    * Resource loader
    */
   resourceLoader ?: IResourceLoader;
