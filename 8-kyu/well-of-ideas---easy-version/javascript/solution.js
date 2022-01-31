function well(x){
  let good = x.filter(idea => idea == "good").length
  if (good == 1 || good == 2)
  {
     return "Publish!"
  }
  if (good > 2)
  {
     return "I smell a series!"
  }
  return "Fail!"
}