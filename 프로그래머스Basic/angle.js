//각도기 구하기
//switch문 활용

function solution(angle) {
    switch(angle){
        case 90:return 2;
        case 180 : return 4;
            default : return angle > 0 && angle < 90 ? 1 : 3;
    }
 }