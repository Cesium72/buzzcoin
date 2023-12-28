# buzzcoin

Thousand - k<br>
Million - M<br>
Billion - B<br>
Trillion - t<br>
Quadrillion - q<br>
quintillion - Q<br>
sextillion - s<br>
Septillion - S<br>
Octillion - o<br>
Nonillion - n<br>

```
function m(n,d=1){x=(''+n).length,p=Math.pow,d=p(10,d)
x-=x%3
return Math.round(n*d/p(10,x))/d+" kMBtqQsSondUDT"[x/3]}
```
