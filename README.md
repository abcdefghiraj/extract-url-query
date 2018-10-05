# Extract Url Query

Extracts parameters from query parameters in a url. 
Why another extractor ?
- It nicely decodes the URI.
- I had nothing else to do.
- It also fills a given object rather than blindly giving out an object.
- Gives out wrongly formatted parameters in `objectsWithoutKeys` parameter

This is how you import:

```node
import {extractObject} from 'extract-url-query';
```

This has 2 methods : 

- fillObject(url,obj) : fill a given object with parameters from the url. (Internally uses the second method)

    ```node
        var objectToBeFilled = { 
            name:undefined,
            lastName:undefined,
            phoneNumber:undefined
        };
        urlExtractor.fillObject('google.com?name=John&lastName=Doe&address=not%20required',objectToBeFilled);
        // => (objectToBeFilled) {name:"John",lastName:"Doe",phoneNumber:undefined}
    ```
- extractObject(url)

    ```node
        var obj = urlExtractor.extractObject('google.com?name=John&lastName=Doe&address=not%20required&blah');
        // => (obj) {name:"John",lastName:"Doe",address:"not required",objectsWithoutKeys:["blah"]}
    ```
Suggestions welcome.

