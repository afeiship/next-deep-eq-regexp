
## Comparable:
```js
nx.declare({
  statics:{
    config: function(inType){
      this.type = inType;
    },
    deepEqual: function(target1,target2){
      var obj1 = new this(this.type, target1);
      var obj2 = new this(this.type, target2);
      if (obj1 === obj2) {
        return true;
      }

      var isObj1 = obj1.is(target1);
      var isObj2 = obj2.is(target2);
      if (isObj1 != isObj2) {
        return false;
      }

      if (isObj1 && isObj2) {
        return obj1.stringify() === obj2.stringify();
      }

      return false;
    }
  },
  methods: {
    init: function (inType,inData) {
      this.type = inType;
      this.data = inData;
    },
    stringify: function () {
      return this.data.toString();
    },
    is: function () {
      return this.data instanceof inType;
    }
  }
});

// deep equal:
var iReg1 = new IDeepEqual(RegExp,reg1);
var iReg2 = new IDeepEqual(RegExp,reg2);

```
