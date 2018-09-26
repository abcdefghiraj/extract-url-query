let urlExtractor = {
    fillObject : function(url,obj){
        var parsedObj = this.extractObject(url);
        obj.objectsWithoutKeys = parsedObj.objectsWithoutKeys;
        Object.keys(obj).map(x => {
            obj[x] = parsedObj[x];
        });
        return obj;
    },
    extractObject : function(url){
        let parts = url.split('?');
        var obj = {
            objectsWithoutKeys : []
        };
        var queryPart = parts[parts.length > 1?1:0];
        queryPart.split('&').map(x => {
            if(x.split('=')[1] == undefined){
                obj.objectsWithoutKeys.push(x);
            }
            else{
                obj[x.split('=')[0]] = decodeURI(x.split('=')[1]);  
            }
        });
        return obj;
    }
}
var objTBE = {
    name:undefined,
    lastName:undefined
};
var x = urlExtractor.extractObject('riverus.in/something?name=Anna&lastName=something&something=some%20thing&blah');
var y = urlExtractor.fillObject('riverus.in/something?name=Anna&lastName=something&something=something&blah',objTBE);

module.exports = urlExtractor;