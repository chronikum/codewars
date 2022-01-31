function domainName(url){
  url = url.replace("https://", "")
  url = url.replace("http://", "")
  url = url.replace("co.jp", "com")
  url = url.replace("co.uk", "com")
  url = url.replace("co.za", "com")
  let urlSplit = url.split("/")
  return urlSplit[0].split(".").reverse()[1]
}