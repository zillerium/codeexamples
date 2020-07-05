<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <style type="text/css">
        #btn {
            background-color: #4CAF50; /* Green */
            border: none;
            color: black;
              width: 96;
              height: 48;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 24px;
          }
        </style>
        <meta charset="utf-8">
        <title>Button</title>
    </head>
    <body>
            <script   type="text/javascript">
            
            var clicks = 0;
            function onClick() {
                clicks += 1;
                document.getElementById("btn").innerHTML = clicks;
            };
            </script>
         <button type="button" id="btn1" onclick="onClick()">0</button>
        <p id=btn></p>
    </body>
</html>
