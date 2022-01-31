function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let l = 0
  if (!head)
  {
     return 0
  }
  while (head)
  {
     head = head.next
     l++
  }
  return l
}

function count(head, data) {
  let c = 0
  while (head)
  {
     if (head.data == data)
     {
         c++
     }
     head = head.next
  }
  return c
}