function loadMachine(itemPayload, opts) {
  var opts = opts || {};
  if (Array.isArray(itemPayload)){
    return loadMultiple(itemPayload, opts);
  } else {
    return load(itemPayload, opts);
  }
};

function load(item, opts){
  var storage = opts.storage || {};
  var height = opts.height || 8;
  var width = opts.width || 6;
  for (var a = 97; a < (97 + height); a++){
    var key = String.fromCharCode(a);
    for (var i = 1; i <= width; i++){
      if (!storage[key + i]){
        return storage[key + i] = item;
      }
    }
  }
}

function loadMultiple(items, opts){
  var storage = opts.storage || {};
  items.forEach(function(item){
    load(item, {storage: storage});
  });
  return storage;
}

module.exports = loadMachine;