//javascript 언어로 객체 지향 프로그래밍을 적용시켜 
//typescript 기반
//A초등학교는 1학년 대상으로 수학 경진 대회를 준비하고 있습니다.1학년은 총 5반으로 선생님이 반별로 1문제씩 출제하기로 하였습니다.

// 1반) 1 ~ 10 숫자 중에 짝수만 모두 더한 결과를 반환
// 2반) 10 ~ 20 숫자 중에 홀수의 개수를 반환
// 3반) 임의의 숫자 4개 중에 가장 큰 숫자를 반환

// 반별로 출제한 문제의 실행 결과를 출력하는 코드

class Grade{
    gradeNumber : number;

    constructor(gradeNumber : number){
        this.gradeNumber = gradeNumber;
    }

    pro1() : number{
        let sum =0;
        for(let i=1;i<=10;i++){
            if(i%2 == 0){
                sum+=1;
            }
        }
        return sum;
    }
    pro2(): number{
        let count=0;
        for(let i=10;i<=20;i++){
            if(i%2 !==0){
                count++;
            }
        }
        return count;
    }
    pro3(numbers : number[]): number{
        if(numbers.length !==4){
            throw new Error('4개의 숫자를 입력해야합니다.');
        } return Math.max(...numbers);
    }
}

const grade1 = new Grade(1);
const grade2 = new Grade(2);
const grade3 = new Grade(3);