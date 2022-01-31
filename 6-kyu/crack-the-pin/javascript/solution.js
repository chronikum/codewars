const crypto = require('crypto')

const alpha = '0123456789';

function* _perms(len = 5, p = "") {
  if (len <= 0) {
    yield p;
    return;
  }
  for (const char of [...alpha])
    yield* _perms(len - 1, p + char);
}

// Don't use console.log, because your algorithm is to slow then...
function crack(hash){
  const perms = _perms()
  while (true) {
    const val = perms.next().value
    if (val && crypto.createHash('md5').update(val).digest('hex') == hash)
    {
      return val
    }
  }
}