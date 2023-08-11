//모든 키들 더하거나 그 하위 오브젝트들까지 전부 비교 가능하다.
//완전히 동등한지 아닌지 체크하고 return
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

  //오브젝트의 키 순서가 바껴버리면 제대로 체크가 불가하다.
  return a.split("").sort().join("") === b.split("").sort().join("");
  //이렇게 정렬 비교 해준다.
}

function isEqual(objA, objB) {
  const checkObjects =
    objA && objB && typeof objA === "object" && typeof objB === "object";
  //undefined인지 체크하고 object인지도 확인해준다.

  if (checkObjects && Object.keys(objA).length === Object.keys(objB).length) {
    return Object.keys(objA).reduce((equal, key) => {
      return equal && isEqual(objA[key], objB[key]);
      //재귀를 통해서 자신을 다시 호출해준다.
    }, true);
    //초기값 true로 설정
  } else {
    return objA === objB;
    //일반값 비교
  }
}

console.log(isEqual(obj1, obj2));
