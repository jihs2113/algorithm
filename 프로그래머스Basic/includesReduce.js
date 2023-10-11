//커피 심부름
//order의 원소	                        의미
//"iceamericano", "americanoice"	차가운 아메리카노
//                  order	                                    result
//["cafelatte", "americanoice", "hotcafelatte", "anything"]	    19000

function solution(order) {
    let result = 0;

    for(let i = 0; i < order.length; i++) {
        if(order[i].includes("cafelatte")) {
            result += 5000;
        } else {
            result += 4500;
        }
    }

    return result;
}

function solution(order) {
    var answer = 0;
    order.map(x => {
        if (x.indexOf('cafelatte') > -1) {
            answer += 5000;
        } else {
            answer += 4500;
        }
    })
    return answer;
}

const solution = (order) => order.reduce((acc, cur) => acc + (cur.includes('tte') ? 5000 : 4500), 0)

