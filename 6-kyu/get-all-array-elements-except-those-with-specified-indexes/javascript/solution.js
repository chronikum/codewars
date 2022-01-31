Array.prototype.except = function(keys)
{
  if (Array.isArray(keys))
  {
    return this.filter((x, index) => !keys.includes(index))
  }
  else
  {
    return this.filter((x, index) => index != keys)
  }
  
}