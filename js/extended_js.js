Function.prototype.method = function (name, func) {
    if(!this.prototype[name]) {
        this.prototype[name] = func;

        return this;
    } 
};

Array.method('shuffle', function (n) {
    var i,
        len = this.length,
        value = [],
        r;

    n = n || len;

    for(i = 0; i < len; i += 1) {
        if(i < n) {
            r = Math.floor((Math.random() * this.length));

            value.push(this[r]);
            this.splice(r, 1);
        } else {
            this.pop();
        }
    }

    this.addRange(value);
    
    return this;
});

Array.method('addRange', function (v) {
    v.forEach(function (r) {
        this.push(r);
    }, this);

    return this;
});