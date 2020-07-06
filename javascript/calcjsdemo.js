<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <style type="text/css">
        .res {
            background-color: lightgray; /* Green */
            border: solid;
            color: black;
              width: 100%;
              height: 48px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 20px;
          }

          .res1 {
            background-color: lightgray; /* Green */
            border: none;
            color: black;
              width: 100%;
              height: 48;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 24px;
          }

          .buttonContainer {
                width: 90%;
            }

          .buttonContainer > .buttonClass {
                    width: 30%;
                    height: 48px;
                    font-size: 24px;
            }

        </style>
        <meta charset="utf-8"/>
        <title>Button</title>
    </head>
    <body>
            <script   type="text/javascript">
            
            var clicks = 0;
            function onClick(id) {
                if (id == "btn5") {
                    changeSq();
                }

            }

            function changeSq() {
                clicks += 1;
                var pos=[];
                var new_pos=[];
                
                for (var i=0;i<9;i++) {
                   // console.log("i==" + i);
                    var new_id = "btn" + (i+1).toString();
                   // console.log(document.getElementById(new_id).innerHTML)
                    pos[i+1] = document.getElementById(new_id).innerHTML;
                }
                new_pos[2]=pos[1];
                new_pos[3]=pos[2];
                new_pos[6]=pos[3];
                new_pos[9]=pos[6];
                new_pos[8]=pos[9]; 
                new_pos[7]=pos[8];
                new_pos[4]=pos[7];
                new_pos[1]=pos[4];
                new_pos[5]=pos[5];
                for (var i=0;i<9;i++) {
                    var new_id = "btn" + (i+1).toString();
                     document.getElementById(new_id).innerHTML=new_pos[i+1];
                }
                
            };
            </script>
    
                <div align="center">
                        <div id="btns" class="buttonContainer">
                                <button type="button" id="res"  class="buttonClass" onclick="onClick(this.id)"></button>
                                <button type="button" id="btns"  class="buttonClass" onclick="onClick(this.id)"></button>
          
                                <button type="button" id="btn0"  class="buttonClass" onclick="onClick(this.id)">0</button>
                                <button type="button" id="btn1"  class="buttonClass" onclick="onClick(this.id)">1</button>
                                <button type="button" id="btnClr"  class="buttonClass" onclick="onClick(this.id)">C</button>
                                <button type="button" id="btnEql"  class="buttonClass" onclick="onClick(this.id)">=</button>
                
                                <button type="button" id="btnSum"  class="buttonClass" onclick="onClick(this.id)">+</button>
                                <button type="button" id="btnSub"  class="buttonClass" onclick="onClick(this.id)">-</button>
                                <button type="button" id="btnMul"  class="buttonClass" onclick="onClick(this.id)">*</button>
                                <button type="button" id="btnDiv"  class="buttonClass" onclick="onClick(this.id)">/</button>
                               
                        </div>
                </div>        
     
    </body>
</html>
