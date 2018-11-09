var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {

  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

  object[key] = value

  return object
}

deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, obj)

  delete newObj.key

  return newObj
}
