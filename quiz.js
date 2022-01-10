   /*
   Topics Covered :

   1. Comments
   2. Console.log
   3. readline
   4. Functions
   5. Arrays
   6. For Loop
   7. Conditional Statements
   8. Objects

   */
   // ---------------------------------------------------
   // ---------------------------------------------------
   
    //console.log("Hello World");
    // comment
    /* hello */
    
    // EX04

    var readline = require('readline-sync');
    // var userName  = readline.question("Please enter your Name?");

    // console.log("Hello Bhai "+ userName);

    // ------------------------------------------------------------------------------

    //EX05

    /* var ans = (readline.question("Is your age greater than 25? (Y/N)")).toUpperCase();

    if(ans.toString() === "Y"){
    console.log("Right");
    }else{ 
        if(ans === "N"){
        console.log("Wrong");
    }
    else{
        console.log("Wrong Input");
    }
    } */

    // ------------------------------------------------------------------------------

    //EX06

    /* var city = (readline.question("Your City Name: ")).toLowerCase();
    var count =0;

    if(city === 'jaipur'){
        count++;
        
    }
    console.log("Your score: "+count);

    */

    // ---------------------------------------------------------------------------------

    //EX07
    /* var a = parseInt(readline.question("Enter First Number: "));
    var b = parseInt(readline.question("Enter Second Number: "));


    function addNumbers(a,b){

    return a+b;

    }

    var result = addNumbers(a,b);
    console.log("Sum: "+ result); */


    // ---------------------------------------------------------------------------------

    //EX08

     function checkAns(userAns,correctAns){
        if(userAns===correctAns){
            return "\nSahi Jawab. Badhai ho!! Aap jeete h 15 laakh rupiya. Modiji gonna transfer soon. Just wait for one eternity.\n";
        }else{ if(userAns=== "modi"){

            return "\n 'ji' kon lagayega bhadwe. Calling Amit Shah to charge you with UAPA (Unlawful Activities Act, 1967). Gya tu to ab.\n"
        }else
        
        { return "\nAfsos. Aap yahan se leke jaate h - kuch nhi.\n"}
           
        }
    }

    var userAns = (readline.question("Who is current Prime Minister of India? (Just surname) : ")).toLowerCase().replace(" ","");
    console.log(userAns);
    var correctAns = "modiji";

    var res = checkAns(userAns,correctAns);

    console.log(res); 


    // ---------------------------------------------------------------------------------

    //EX09

    /*
    var name = "Hemant Gupta";

    for(var i=0;i<5;i++){
        console.log(name);
    }
    */

    // ---------------------------------------------------------------------------------

    //EX10&11
     /* var ministerList = ["Modi ji","mota bhai","rajnath","mansukh bhai","anurag thakur","ashwini vaishnav"];

     for(var i=0;i<ministerList.length;i++){

        console.log(ministerList[i]);
     } */

    // ---------------------------------------------------------------------------------

    //EX12
    // Object is key : value pair
    /* var ministerOne = {
        name : "Amit Shah",
        codename : "Mota Bhai",
        des : "Home Minister of India & Invisible PM of India",
        state : "Gujarat",
        hobby : ["Corruption","Framing Jumlas"],
        character : "True Hypocrite (BCCI)"

    }

    var ministerTwo = {
        name : "Narendra DamodarDas Modi",
        codename : "Fakeer",
        des : "Public PM of India",
        state : "Gujarat",
        hobby : ["Corruption","Reciting Jumlas","Public Speaking"],
        character : "Fakeeri"

    }

    console.log("\nMinister #1 Profile : \n");  
    console.log("Name : "+ministerOne.name);
    console.log("Nick Name : "+ministerOne.codename);
    console.log("Designation : "+ministerOne.des);
    console.log("State : "+ministerOne.state);
    console.log("Hobby : "+ministerOne.hobby);
    console.log("Character : "+ministerOne.character);

    var ministers = [ministerOne,ministerTwo];
    */

 
// ---------------------------------------------------------------------------------

//ASSIGNMENT















     