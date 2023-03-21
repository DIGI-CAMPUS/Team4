SELECT SUM(e.sal) AS sum_of_sal
	, AVG(e.sal) AS avg_of_sal 
	FROM EMP e;  


SELECT DISTINCT deptno FROM emp; --중복제거 조회


SELECT DISTINCT sal FROM emp;

SELECT SUM(DISTINCT e.sal) 
	,SUM(ALL e.sal)
	,SUM(e.sal)
FROM emp e;

SELECT MAX(sal)
,MIN(sal)
,ROUND( MAX(sal)/MIN(sal),1)
FROM EMP e
WHERE DEPTNO =10;



SELECT COUNT(empno)
,COUNT(comm) 
FROM emp;


SELECT COUNT(*)
FROM EMP e 
WHERE DEPTNO =30;


SELECT COUNT(DISTINCT sal)
,COUNT(ALL sal)
,COUNT(sal)
FROM emp;

SELECT COUNT(ename)
FROM EMP e
WHERE nvl(comm, 0)>0;





SELECT AVG(sal),'10' 
FROM EMP e WHERE DEPTNO =10

UNION ALL 

SELECT AVG(sal),'20' 
FROM EMP e WHERE DEPTNO =20
UNION ALL 

SELECT AVG(sal),'30' 
FROM EMP e WHERE DEPTNO =30;


SELECT DEPtno
,COUNT(SAL)
,SUM(SAL) 
,AVG(sal)
FROM EMP e GROUP BY DEPTNO ;

SELECT
	DEptno,
	job
,
	COUNT(sal)
,
	AVG(sal+ NVL(comm, 0))
,
	max(sal+ NVL(comm, 0))
,
	min(sal+ NVL(comm, 0))
,
	sum(sal+ NVL(comm, 0))
FROM
	EMP e
GROUP BY
	DEPTNO,
	job;


SELECT *
FROM emp, DEPT --잘못된 JOIN. cartesian product
ORDER BY EMPNO ;

SELECT e.DEPTNO , d.DEPTNO 
FROM emp e, DEPT d 
WHERE e.ENAME ='SMITH'
ORDER BY e.EMPNO ;

SELECT e.EMPNO 
	,e.HIREDATE 
	,d.DNAME 
	,e.JOB 	
FROM emp e JOIN dept D  ON e.DEPTNO =d.DEPTNO ;

var_deptno;
var_sql="SELECT *
FROM EMP e JOIN DEPT d 
 USING (deptno)" -- 세미콜론 없어도 되네


SELECT e.EMPNO 
,e.HIREDATE 
,e.ENAME 
,d.DEPTNO 
FROM emp e
,DEPT d 
WHERE e.DEPTNO =d.DEPTNO AND e.sal<2000
ORDER by d.DEPTNO ,e.DEPTNO ;

SELECT d.dname
,ROUND(AVG(e.sal),0) 
,SUM(e.sal) 
FROM EMP e ,DEPT d 
WHERE e.DEPTNO =d.DEPTNO  AND e.sal>2000
GROUP BY d.DNAME ;

SELECT *
FROM EMP e ,SALGRADE s 
WHERE e.SAL BETWEEN s.LOSAL AND s.HISAL ;

SELECT s.GRADE 
	,COUNT(e.ENAME) AS a1
FROM EMP e ,SALGRADE s 
WHERE e.SAL BETWEEN s.LOSAL AND s.HISAL 
GROUP BY s.GRADE 
ORDER BY a1 ;

SELECT e.ename
,e.DEPTNO
,e.SAL 
,e.JOB 
FROM EMP e ;


SELECT e1.EMPNO 
,e1.ENAME 
,e2.MGR 
FROM emp e1, emp e2
WHERE e1.empno =e2.mgr;

--right join oracle
SELECT e1.EMPNO 
,e1.ENAME 
,e2.MGR 
FROM emp e1, emp e2
WHERE e1.MGR =e2.EMPNO (+);


--left join right와 결과는 같음. 표준 sql.
SELECT e1.EMPNO 
,e1.ENAME 
,e2.MGR 
FROM emp e1 LEFT OUTER join emp e2
			ON e1.MGR =e2.EMPNO ;

SELECT e1.EMPNO 
,e1.ENAME 
,e2.MGR 
FROM EMP e1, EMP e2
WHERE e1.MGR (+) =e2.EMPNO ;

--right join. 결과는 같음. 표준 sql.
SELECT e1.EMPNO 
,e1.ENAME 
,e2.MGR 
FROM EMP e1 RIGHT OUTER join emp e2
			ON e1.MGR =e2.EMPNO ;


SELECT e1.EMPNO 
,e1.ENAME 
,e2.MGR 
FROM emp e1 FULL OUTER JOIN emp e2
			ON e1.MGR =e2.EMPNO ;
			
SELECT d.DEPTNO 
	,d.DNAME 
	,e1.EMPNO 
	,e1.ENAME
	,e1.MGR 
	,e1.SAL 
	,s.LOSAL 
	,s.HISAL 
	,e2.EMPNO 
	,e2.ENAME 
FROM emp e1
	, DEPT d 
	, SALGRADE s 
	, EMP e2
WHERE e1.EMPNO (+) = d.DEPTNO 
AND e1.sal BETWEEN s.LOSAL AND s.HISAL 
AND e1.MGR =e2.EMPNO ;


SELECT d.DEPTNO 
	,d.DNAME 
	,e1.EMPNO 
	,e1.ENAME
	,e1.MGR 
	,e1.SAL 
	,s.LOSAL 
	,s.HISAL 
	,e2.EMPNO 
	,e2.ENAME 
FROM emp e1
	, DEPT d 
	, SALGRADE s 
	, EMP e2
WHERE e1.EMPNO (+) = d.DEPTNO 
AND e1.sal BETWEEN s.LOSAL(+) AND s.HISAL (+)
AND e1.MGR =e2.EMPNO (+);


SELECT e1.EMPNO 
	,e1.ENAME
	,e1.MGR 
	,e1.SAL 
	,e2.EMPNO AS mgr_no
	,e2.ENAME AS mgr_name
FROM emp e1 
	, EMP e2
WHERE e1.mgr = e2.EMPNO (+) ;

SELECT e1.EMPNO 
	,e1.ENAME
	,e1.MGR 
	,e1.SAL 
	,e2.EMPNO AS mgr_no
	,e2.ENAME AS mgr_name
FROM EMP e1 right JOIN DEPT d ON e1.DEPTNO =d.DEPTNO 
			LEFT OUTER JOIN SALGRADE s ON (e1.SAL >=s.LOSAL AND e1.sal<=s.HISAL)
			LEFT OUTER JOIN EMP e2 ON (e1.MGR=e2.EMPNO)
			;
		
		
		
/*
*단일행 서브 쿼리 - 쿼리 안에 쿼리 문장 사ㅣ용
*
*select 쿼리의 결과는 -->2차원 테이블에 불과
*/
SELECT *
FROM EMP e WHERE sal>(SELECT SAL FROM emp WHERE ENAME='SMITH');

SELECT *
FROM EMP e ,DEPT d 
WHERE e.DEPTNO =d.DEPTNO 
	AND e.DEPTNO =20
	AND e.SAL >(SELECT AVG(sal) FROM emp);
	
		
		
/*
*다중행 서브 쿼리 - 쿼리 안에 쿼리 문장 사ㅣ용
*
*select 쿼리의 결과는 -->2개 이상의 값으로 된 테이블
*/



SELECT DEPTNO , ENAME , SAL 
FROM EMP 
WHERE SAL IN (SELECT AVG(sal) FROM emp GROUP BY DEPTNO);



/*
*다중열 서브 쿼리 
*
*서브쿼리 결과가 두 개 이상의 컬럼ㅇ로 구성된 테이블 값
*/
	
SELECT *
 FROM EMP e WHERE (DEPTNO,sal )IN (SELECT DEPTNO, max(SAL)
 									FROM EMP 
 									GROUP BY DEPTNO)
 ;
 /*
  * with절 사용- 편리한 가상 테이블
  */
WITH E as(SELECT * FROM emp WHERE DEPTNO=20)
,D as(SELECT  * FROM DEPT)
,S AS(SELECT * FROM salgrade)
SELECT E.ename
	,D.dname
	,D.loc
	,S.grade
FROM E,D,S
WHERE E.deptno(+)=D.deptno
 AND E.sal BETWEEN S.losal AND S.hisal
;

CREATE TABLE DEPT_tmep 	
	as(SELECT *FROM DEPT );


