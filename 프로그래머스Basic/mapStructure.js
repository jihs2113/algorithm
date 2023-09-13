//로그인 성공?
//구조분해 & map 활용


function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const map = new Map(db);
    return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
  }


function solution(id_pw, db) {
    const [ userId, userPw ] = id_pw;
    for (const [ dbId, dbPw ] of db) {
        if (userId === dbId && userPw === dbPw) return "login";
        else if (userId === dbId && userPw !== dbPw) return "wrong pw";
    }
    return "fail";
}
