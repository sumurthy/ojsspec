# Promise module













## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`resolve<R>(value)`](resolve<R>-hjR49.md)      | [`Promise`](../es6-promise/promise.md)<R> | Make a new promise from the thenable.  A thenable is promise-like in as far as it has a "then" method. |
|[`reject(error)`](reject-u1UQ9.md)      | [`Promise`](../es6-promise/promise.md)<any> | Make a promise that rejects to obj. For consistency and debugging (eg stack traces),obj should be an instanceof Error |
|[`all<R>(promises)`](all<R>-O1309.md)      | [`Promise`](../es6-promise/promise.md)<R[]> | Make a promise that fulfills when every item in the array fulfills,and rejects if (and when) any item rejects.  the array passed to all can be a mixture of promise-like objects and other objects.  The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value. |
|[`race<R>(promises)`](race<R>-EI609.md)      | [`Promise`](../es6-promise/promise.md)<R> | Make a Promise that fulfills when any item fulfills,and rejects if any item rejects. |



