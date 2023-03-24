/*
 * inner join
 */
SELECT *
FROM emp e JOIN DEPT d 
	ON e.DEPTNO =d.DEPTNO ;
	

SELECT e.EMPNO 
	, e.eNAME 
	, e.HIREDATE
	, e.COMM 
	, d.DEPTNO 
	, d.DNAME 
FROM emp e JOIN DEPT d 
	ON e.DEPTNO =d.DEPTNO 
	;
	

/*
 * sal 사용해서
 */
SELECT e.EMPNO 
	, e.eNAME 
	, e.HIREDATE
	, e.COMM 
FROM emp e , SALGRADE s 
WHERE e.sal BETWEEN s.losal AND s.hisal
;

WITH emp_sal as(SELECT e.EMPNO 
				, e.eNAME 
				, e.HIREDATE
				, e.COMM 
				FROM emp e , SALGRADE s 
				WHERE e.sal BETWEEN s.losal AND s.hisal)
			, emp_dept ; --with절은 뭘까..
			
			
/*
 * self- 
 * join
 */
			
SELECT *
FROM EMP e 
JOIN EMP e2 
ON e.MGR =e2.MGR ; --셀프 조인 왜 하는지 모르겟땅


/*
 * right join
 */

SELECT e.EMPNO 
	, e.eNAME 
	, e.HIREDATE
	, e2.ENAME 
FROM emp e RIGHT JOIN EMP e2 
	ON e.MGR =e2.MGR
	;
