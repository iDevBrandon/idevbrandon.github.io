---
published: true
---
## 자바스크립트 인터뷰 질문 리스트


### 이벤트 위임에 대해 설명하세요.

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
- 리스너는 DOM의 event bubbling으로 인해 하위 요소에서 이벤트가 발생될 때마다 실행되고, 부모 element로 전파되어 document 레벨까지 도달하게 된다.
- 각 하위 항목에 이벤트를 연결하지 않고, 상위 하나의 단일 핸들러만 만들엇기에, 메모리 사용공간도 줄어든다.


