/*
* 분기별 급여 확인 
*/

SELECT
	ename
	--alias AS 없이 작성..
,
	sal * 3
,
	COMM
FROM  
	emp e;
--테이블에 별칭주기. 테이블에 별칭 주는 건 어디에 표시되나요?
	
SELECT
	100 + 5,
	10 - 3,
	30 * 2,
	10 / 5+
FROM
	dual;
--오라클은 항상 테이블 명이 필요한데, 이런 경우 dual 사용.


SELECT
	dbms_random.value()* 100
FROM
	dual;

SELECT
	ename AS emple
FROM
	emp ;
--SELECT ename FROM emp AS emple 는 오류나용
