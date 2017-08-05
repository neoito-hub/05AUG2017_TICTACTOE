/**
 * Entry point for your program
 * 
 * @param {Array} ttt - The 2 dimensional array which shows the current state of game.
 * @param {string}  symbol - Denotes your symbol - 'X' or 'O'.
 * @returns {Array} The updated state of tictac board
 */
function x( inputArray, friendlySymbol)
{
    if(winNow(inputArray,friendlySymbol))
    {
        return inputArray;//1
    }
    else if(blockNow(inputArray,friendlySymbol))
    {
        return inputArray;//2
    }
    else if(playCentre(inputArray,friendlySymbol))
    {
        return inputArray;//5
    }
    else if(oppositeCorner(inputArray,friendlySymbol))
    {
        return inputArray;//6
    }
    else if(emptycorner(inputArray,friendlySymbol))
    {
        return inputArray;//7
    }
    else if(emptySide(inputArray,friendlySymbol))
    {
        return inputArray;//8
    }
    else
    {
        alert("mehh");
    }
    /*else if(forkNow(inputArray,friendlySymbol))
    {
        //3
    }*/
    
    /*
    else if(blockFork(inputArray,friendlySymbol))
    {
        //4
    }
    
    
    */

}


function winNow(inputArray, friendlySymbol)
{
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            if(inputArray[i][j]==null || inputArray[i][j]=="null")
            {
                if(inputArray[normalizeTT(i+2)][normalizeTT(j)]!=null && inputArray[normalizeTT(i+2)][normalizeTT(j)]!="null")
                {
                    if(inputArray[(normalizeTT(i+1))][normalizeTT(j)]!=null && inputArray[(normalizeTT(i+1))][normalizeTT(j)]!="null")
                    {
                        if(lineWin(friendlySymbol,inputArray[(normalizeTT(i+1))][normalizeTT(j)],inputArray[normalizeTT(i+2)][normalizeTT(j)], friendlySymbol))
                        {
                            inputArray[i][j] = friendlySymbol;
                            return true;
                        }
                    }
                }
                
                if(inputArray[normalizeTT(i)][normalizeTT(j+1)]!=null && inputArray[normalizeTT(i)][normalizeTT(j+2)]!="null")
                {
                    if(inputArray[normalizeTT(i)][normalizeTT(j+1)]!=null && inputArray[normalizeTT(i)][normalizeTT(j+2)]!="null")
                    {
                         if(lineWin(friendlySymbol,inputArray[normalizeTT(i)][normalizeTT(j+1)],inputArray[normalizeTT(i)][normalizeTT(j+2)], friendlySymbol))
                         {
                            inputArray[i][j] = friendlySymbol;
                            return true;
                        }
                    }
                }
               
                if(inputArray[normalizeTT(i+2)][normalizeTT(j+2)]!=null && inputArray[normalizeTT(i+2)][normalizeTT(j+2)]!="null")
                {
                    if(inputArray[normalizeTT(i+1)][normalizeTT(j+2)]!=null && inputArray[normalizeTT(i+1)][normalizeTT(j+2)]!="null")
                    {
                        if(lineWin(friendlySymbol,inputArray[normalizeTT(i+1)][normalizeTT(j+2)],inputArray[normalizeTT(i+2)][normalizeTT(j+2)], friendlySymbol))
                        {
                            inputArray[i][j] = friendlySymbol;
                            return true;
                        }
                    }
                }
                
            }
        }
    }
    return false;
}


function blockNow(inputArray, friendlySymbol)
{
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            if(inputArray[i][j]==null || inputArray[i][j]=="null")
            {
                if(inputArray[normalizeTT(i+2)][normalizeTT(j)]!=null && inputArray[normalizeTT(i+2)][normalizeTT(j)]!="null")
                {
                    if(inputArray[(normalizeTT(i+1))][normalizeTT(j)]!=null && inputArray[(normalizeTT(i+1))][normalizeTT(j)]!="null")
                    {
                        if(lineWin(enemyS(friendlySymbol),inputArray[(normalizeTT(i+1))][normalizeTT(j)],inputArray[normalizeTT(i+2)][normalizeTT(j)], enemyS(friendlySymbol)))
                        {
                            inputArray[i][j] = friendlySymbol;
                            return true;
                        }
                    }
                }

                if(inputArray[normalizeTT(i)][normalizeTT(j+1)]!=null && inputArray[normalizeTT(i)][normalizeTT(j+2)]!="null")
                {
                    if(inputArray[normalizeTT(i)][normalizeTT(j+1)]!=null && inputArray[normalizeTT(i)][normalizeTT(j+2)]!="null")
                    {
                        if(lineWin(enemyS(friendlySymbol),inputArray[normalizeTT(i)][normalizeTT(j+1)],inputArray[normalizeTT(i)][normalizeTT(j+2)], enemyS(friendlySymbol)))
                        {
                            inputArray[i][j] = friendlySymbol;
                            return true;
                        }
                    }
                }
                
                if(inputArray[normalizeTT(i+2)][normalizeTT(j+2)]!=null && inputArray[normalizeTT(i+2)][normalizeTT(j+2)]!="null")
                {
                    if(inputArray[normalizeTT(i+1)][normalizeTT(j+2)]!=null && inputArray[normalizeTT(i+1)][normalizeTT(j+2)]!="null")
                    {
                        if(lineWin(enemyS(friendlySymbol),inputArray[normalizeTT(i+1)][normalizeTT(j+2)],inputArray[normalizeTT(i+2)][normalizeTT(j+2)], enemyS(friendlySymbol)))
                        { 
                            inputArray[i][j] = friendlySymbol;
                            return true;
                        }
                    }
                }
               
            }
        }
    }
    return false;
}

function playCentre(inputArray, friendlySymbol)
{
    if(inputArray[1][1] == null|| inputArray[1][1] == "null")
    {
        inputArray[1][1] = friendlySymbol;
        return true;
    }
    return false;
}

function oppositeCorner(inputArray,friendlySymbol)
{
    if(inputArray[0][0] == enemyS(friendlySymbol) && (inputArray[2][2] == null|| inputArray[2][2] == "null"))
    {
        inputArray[2][2] = friendlySymbol;
        return true;
    }
    else if(inputArray[0][2] == enemyS(friendlySymbol) && (inputArray[2][0] == null|| inputArray[2][0] == "null"))
    {
        inputArray[2][0] = friendlySymbol;
        return true;
    }
    else if(inputArray[2][0] == enemyS(friendlySymbol) && (inputArray[0][2] == null|| inputArray[0][2] == "null"))
    {
        inputArray[0][2] = friendlySymbol;
        return true;
    }
    else if(inputArray[2][2] == enemyS(friendlySymbol) && (inputArray[0][0] == null|| inputArray[0][0] == "null"))
    {
        inputArray[0][0] = friendlySymbol;
        return true;
    }
    return false;
}

function emptycorner(inputArray,friendlySymbol)
{
    if(inputArray[0][0] == null || inputArray[0][0] == "null")
    {
        inputArray[0][0] = friendlySymbol;
        return true;
    }
    else if(inputArray[0][2] == null || inputArray[0][2] == "null")
    {
        inputArray[0][2] = friendlySymbol;
        return true;
    }
    else if(inputArray[2][0] == null || inputArray[2][0] == "null")
    {
        inputArray[2][0] = friendlySymbol;
        return true;
    }
    else if(inputArray[2][2] == null || inputArray[2][2] == "null")
    {
        inputArray[2][2] = friendlySymbol;
        return true;
    }
    return false;
}

function emptySide(inputArray,friendlySymbol)
{
     if(inputArray[0][1] == null || inputArray[0][1] == "null")
    {
        inputArray[0][1] = friendlySymbol;
        return true;
    }
    else if(inputArray[1][0] == null || inputArray[1][0] == "null")
    {
        inputArray[1][0] = friendlySymbol;
        return true;
    }
    else if(inputArray[2][1] == null || inputArray[2][1] == "null")
    {
        inputArray[2][1] = friendlySymbol;
        return true;
    }
    else if(inputArray[1][2] == null || inputArray[1][2] == "null")
    {
        inputArray[1][2] = friendlySymbol;
        return true;
    }
    return false;
}

function normalizeTT(i)
{
    if(i>2)
    {
        return i-3;
    }
    return i;
}

function enemyS(friendS)
{
    if(friendS == "X")
    {
        return "O";
    }
    else
    {
        return "X";
    }
}

function lineWin(x,y,z, friendlySymbol)
{

    if(x == friendlySymbol)
    {
        if(y == friendlySymbol)
        {
            if(z == friendlySymbol)
            {
                return true;
            }
        }
    }
    return false;
}
