SELECT *from v$option;

SELECT *from "V$INSTANCE" ;

SELECT *from v$session;

SELECT *from v$parameter;


/*
* transantion 
*/
CREATE TABLE DEPT_TCL
AS (SELECT * FROM DEPT);


SELECT * FROM DEPT_TCL;

INSERT INTO DEPT_TCL 
VALUES (50,'DATABSDE','SEOUL');

UPDATE DEPT_TCL 
SET LOC ='BUSAN'
WHERE DEPTNO =50;

DELETE --행 전체가 삭제되므로 지정 안함
FROM DEPT_TCL 
WHERE DNAME ='RESEARCH'
;

SELECT *
FROM DEPT_TCL dt ;



INSERT INTO DEPT_TCL 
VALUES (20,'N','SEOUL');



/*
* transantion 
*/

UPDATE DEPT_TCL 
SET LOC ='BUSAN'
WHERE DEPTNO =50;

SELECT *
FROM EMP e WHERE substr(empno ,1,2)=75
AND LENGTH (empno)=40;

SELECT *FROM EMP e WHERE empno>7499 
and empno<7600;

SELECT *FROM EMP e WHERE ENAME || ' ' || job='ward salesman'
;

SELECT DISTINCT e.EMPNO , e.EMPNO,d.DEPTNO  FROM EMP e, DEPT d  WHERE e.DEPTNO =d.DEPTNO ;

SELECT *FROM EMP WHERE DEPTNO ='10'
UNION 
SELECT *
FROM emp WHERE DEPTNO ='20';

SELECT * FROM user_indexes WHERE TABLE_name LIKE 'emp';

SELECT job, sum(sal) AS sum_of_sal
FROM EMP e 
GROUP BY JOB 
ORDER BY sum_of_sal DESC;

SELECT *FROM HR.EMPLOYEES ;
--sal의 경우 최종 현재값만 존재(current_value)

/*
* transantion 
*/
