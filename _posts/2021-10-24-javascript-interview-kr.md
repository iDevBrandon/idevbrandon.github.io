---
published: true
---
## 이벤트 위임에 대해 설명하세요.

이벤트 위임(Event Delegation)은 이벤트를 하위요소에 추가하는 대신, 하나의 부모 요소에 이벤트 핸들러를 바인딩하는 기법입니다.

```JavaScript
function printId() {
    window.alert(this.id + ' is clicked!')
};

document.querySelector('#child-1').addEventListener('click', printId);
document.querySelector('#child-2').addEventListener('click', printId);
document.querySelector('#child-3').addEventListener('click', printId);
document.querySelector('#child-4').addEventListener('click', printId);
document.querySelector('#child-5').addEventListener('click', printId);
document.querySelector('#child-6').addEventListener('click', printId);
```

```JavaScript
document.getElementById('parent').addEventListener('click', function (e) {
	if (e.target && e.target.nodeName == 'LI') {
		window.alert(e.target.id + ' is clicked!');
	}
});
```
