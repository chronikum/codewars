let cellvalue = 0

function incrementCell()
{
  cellvalue++;
  if (cellvalue == 256)
  {
    cellvalue = 0
  }
}

function myFirstInterpreter(code) {
  var index = 0;
  let result = ""
  cellvalue = 0
  while (code[index])
  {
    if (code[index] == ".")
    {
      result += String.fromCharCode(cellvalue);
    }
    if (code[index] == "+")
    {
      incrementCell();
    }
    index++;
  }
  return result
}