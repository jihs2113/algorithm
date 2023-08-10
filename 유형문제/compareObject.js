//모든 키들 더하거나 그 하위 오브젝트들까지 전부 비교 가능하다.

const obj1 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1,
  },
};

const obj2 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1,
  },
};

function isEqual(objA, objB) {
  let a = JSON.stringify(objA);
  let b = JSON.stringify(objB);

  return a.split("").sort().join("") === b.split("").sort().join("");
}

function isEqual(objA, objB) {
  const checkObjects =
    objA && objB && typeof objA === "object" && typeof objB === "object";

  if (checkObjects && Object.keys(objA).length === Object.keys(objB).length) {
    return Object.keys(objA).reduce((equal, key) => {
      return equal && isEqual(objA[key], objB[key]);
    }, true);
  } else {
    return objA === objB;
  }
}

console.log(isEqual(obj1, obj2));
