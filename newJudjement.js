// 課題３　複数対応型成績判定プログラム
// 合計得点が
// 満点の80%以上 -> 成績A
// 満点の60%以上 -> 成績B
// 満点の40%以上 -> 成績C
// 満点の40%未満 -> 成績D

let points = [80,80,80,80,100,60,60,60];

function get_achievement(points){
let number = points.length ;
let sum = 0;
for(let i=0; i<number; i++){
    sum = sum + points[i];
}
 if (sum >= 100*number*0.8) {
     return "A";
 }else if (sum >= 100*number*0.6){
     return "B";
 }else if (sum >= 100*number*0.4){
     return "C";
 }else {
     return "D";
 }
}

// 課題４　合否判定関数
// 各教科60点以上であれば"合格"を返す
// １つでも60点未満の場合"不合格"を返す

function get_pass_or_failure(points){
    let judge = "合格"; //デフォルト値を"合格"にしておき、不合格のときだけjudgeの値を上書きする。
    let number = points.length;
        for(let i=0; i<number;i++){
            if (points[i] < 60){
                judge = "不合格";
                return judge;
            }
    }
    return judge;
}

function judgement(points){
    get_achievement(points);
    get_pass_or_failure(points);
    let achievement = get_achievement(points);
    let pass_or_failure =  get_pass_or_failure(points);
    return `あなたの成績は${achievement}です。${pass_or_failure}です!`;
}

console.log(judgement(points));