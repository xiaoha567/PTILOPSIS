/* =====================================================
   RHINE LAB DATABASE
   script.js
   FINAL VERSION
===================================================== */



/* =========================
   系统信息
========================= */


const systemLines = [

"[SYSTEM] Connecting...",

"[SYSTEM] Authentication Passed.",

"[SYSTEM] Access Level : Visitor",

"[SYSTEM] Archive #001 Loaded."

];





/* =========================
   二进制数据
========================= */


const binaryText =
`111001111010010110011101
111001101000010010111111
111001011011000110001111
111001011011100110010101
111010011001110110100010
111001011000100110001101
111001111001101010000100
111001011000110110011010
111001011010001110101011
111001011001001010001100
111001111010111010100001
111001111001000010000110
111001011001000110011000
111000101000000010010100
111000101000000010010100
111001011011100110110011
111001011010111010001001
111011111011110010001100
111001011011111110101011
111001001011100110010000`;







/* =========================
   获取元素
========================= */


const systemText =
document.getElementById("systemText");


const binaryBox =
document.getElementById("binary");

binaryBox.textContent = "";


const decodeButton =
document.getElementById("decodeButton");


const resultBox =
document.getElementById("resultBox");







/* =========================
   页面启动
========================= */


window.addEventListener(
"load",
()=>{


    startSystem();



});







/* =========================
   SYSTEM动画
========================= */


let systemIndex = 0;



function startSystem(){


    if(systemIndex >= systemLines.length){


        setTimeout(

            startBinary,

            400

        );


        return;


    }





    const line =
    document.createElement("div");



    systemText.appendChild(line);




    let charIndex = 0;




    const timer =
    setInterval(()=>{



        line.textContent =

        systemLines[systemIndex]

        .substring(0,charIndex);



        charIndex++;




        if(charIndex >

        systemLines[systemIndex].length){



            clearInterval(timer);



            systemIndex++;



            setTimeout(

                startSystem,

                300

            );


        }




    },35);



}







/* =========================
   二进制逐字显示
========================= */

let binaryIndex = 0;


function startBinary(){


    function show(){


        if(binaryIndex >= binaryText.length){


            setTimeout(()=>{


                decodeButton.style.display =
                "block";


            },600);


            return;


        }


        binaryBox.textContent +=
        binaryText.charAt(binaryIndex);



        binaryIndex++;



        setTimeout(

            show,

            8

        );


    }


    show();


}




/* =========================
   数据解析
========================= */


decodeButton.addEventListener(

"click",

()=>{


    decodeButton.style.display =
    "none";



    decodeButton.textContent =
    "DATA ANALYZING...";



    setTimeout(()=>{


        resultBox.style.display =
        "block";



        resultBox.scrollIntoView({

            behavior:"smooth",

            block:"center"

        });



    },600);



});





/* =========================
   手机适配
========================= */


window.addEventListener(

"resize",

()=>{


    document.body.style.minHeight =

    window.innerHeight + "px";


});