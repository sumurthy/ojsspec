# Guid resource type

This class represents a globally unique identifier, as described by 
IETF RFC 4122. The input string is normalized and validated by the class 
constructor, which provides important guarantees that simplify other code 
that works with the GUID. This class also provides basic functionality 
for generating a pseudo-random GUID ("version 4" UUID from the RFC); 
however, be aware that the uniqueness depends on the browser's 
Math.random() function and may be not be suitable for some applications. 





## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|equals      | public | boolean | represent the same value |
|static      | public | [Guid](Guid.md) | Trys to construct a new Guid instance using guid string |
|toString      | public | string | Example: 'd5369f3b-bd7a-412a-9c0f-7f0650bb5489' |


