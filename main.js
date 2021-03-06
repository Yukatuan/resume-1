let html = document.querySelector('#html');
let style = document.querySelector('#style');

let string = `
/* 您好，我是Yuka
 * 接下来我要用制作太极图的方式
 * 演示一下我的前端功底
 * 首先我要准备一个画板
 */

#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}

/* 接下来我要念咒语
 * 将画板变成圆形
 * 注意看好了
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* 太极生两仪
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 50%, 
    rgba(0,0,0,1) 50%, 
    rgba(0,0,0,1) 100%);
}

/* 两仪生四象
 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left: 25%;
    tranform: tranlateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 18%, 
    rgba(0,0,0,1) 18%, 
    rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left: 25%;
    tranform: tranlateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, 
    rgba(0,0,0,1) 18%, 
    rgba(255,255,255,1) 18%, 
    rgba(255,255,255,1) 100%);
}
/* 四象生而八卦起
 * 万物之所以成
 * The End
 */
`;

let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        // 如果是回车就不照搬
        // 如果不是回车就照搬
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp"
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1
            step();
        } else {

        }
    }, 100);
};

step();


