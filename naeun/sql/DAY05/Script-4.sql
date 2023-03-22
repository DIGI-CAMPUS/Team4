
CREATE TABLE DEPT_temp
 AS (SELECT * FROM DEPT );

SELECT * FROM dept_temp;

INSERT INTO DEPT_TEMP (deptno, dname, loc)
 VALUES (50,'DATABASE','SEOUL');
 

SELECT * FROM dept_temp;

ROLLBACK;

SELECT * FROM dept_temp;

INSERT INTO DEPT_TEMP (deptno, dname, loc)
 VALUES (70,'WEB','INCHOEN');
 
DROP TABLE EMP_TEMP ;

CREATE TABLE EMP_temp
 AS (SELECT * FROM EMP
 		);
 		
 SELECT * FROM EMP_temp;
 
UPDATE DEPT_TEMP 
SET LOC = 'SEOUL';

SELECT *
FROM EMP e WHERE ROWNUM <3;

UPDATE DEPT_TEMP 
SET DNAME = 'DATABASE'
WHERE DEPTNO =40;


UPDATE DEPT_TEMP  
SET (DNAME, LOC) =(SELECT DNAME, LOC
					FROM DEPT 
					WHERE DEPTNO =40)
WHERE DEPTNO =40
;


DELETE FROM EMP_TEMP 
WHERE JOB = 'MANAGER'
;

DELETE FROM EMP_TEMP 
WHERE EMPNO IN ( SELECT E.EMPNO FROM EMP_TEMP E, SALGRADE s
				WHERE E.SAL BETWEEN S.LOSAL AND S.HISAL	 AND S.GRADE=3 AND DEPTNO=30)
;

CREATE TABLE EMP_new
(
	empno		number(4)
	, ename		varchar(10)
	, job		varchar(9)
	, mgr		number(4)
	, hiredate	DATE
	, SALGRADE	number(7,2)
	, comm		number(7,2)
	, deptno	number(2)
);

SELECT *
FROM EMP_NEW en 
WHERE rownum <=5
;

ALTER TABLE EMP_NEW 
ADD hp varchar(20);

ALTER TABLE EMP_new
RENAME COLUMN hp TO tellno ;

ALTER TABLE EMP_NEW 
MODIFY empno NUMBER(5)
;

ALTER TABLE EMP_NEW 
DROP COLUMN tellno
;

--시퀀스 사작------------------------------------------------------------------------------
CREATE SEQUENCE seq
	INCREMENT BY 1
	START WITH 1
	MAXVALUE 99
	MINVALUE 1
	nocycle nocache;
	
INSERT INTO DEPT_TEMP (deptno,DNAME,loc)
VALUES (seq.nextval,'database','seoul')
;	
INSERT INTO DEPT_TEMP (deptno,DNAME,loc)
VALUES (seq.nextval,'web','busan')
;	
INSERT INTO DEPT_TEMP (deptno,DNAME,loc)
VALUES (seq.nextval,'mobile','seungsoo')
;

SELECT *
FROM DEPT_TEMP dt ;



--시퀀스 끝??--------------------------------------
/*
 * 제약 조건 지정
 * 테이블 생성 시 테이블 컬럼별 제약 조건을 설정
 * 
 * 자주 사용되는 중요한 제약조건 유형
 * not null
 * unique
 * pk
 * fk
 */

CREATE TABLE LOGIN 
(
	log_id		varchar(20) NOT NULL
	, log_pwd	varchar(20) NOT NULL
	, tel		varchar(20)	
);

INSERT INTO login (log_id,log_pwd)
 VALUES ('test01','1234')
 ;
 
/*
*not null 조건을 나중에 설정
*/

ALTER TABLE LOGIN 
MODIFY tel NOT NULL;--왜 안먹지 ㅠ a. NULL 값인 로우가 있어서. 

UPDATE LOGIN SET TEL = '010-1234-1234'
WHERE LOG_ID ='test01'; --여기서 채워주고 나서야 제약 조건 추가 가능.

SELECT OWNER , CONSTRAINT_NAME, CONSTRAINT_TYPE, TABLE_NAME
FROM USER_CONSTRAINTS 
WHERE TABLE_NAME='LOGIN'; --제대로ㅓ 안나오네

ALTER TABLE LOGIN 
MODIFY (TEL CONSTRAINT tel_NN NOT NULL); --ㅠㅠ 오류나는뎅

ALTER TABLE LOGIN DROP CONSTRAINT SYS_C007040; -- 제약조건 ㅇ이름이 없어 주어진 이름 사용.. 오류 나는데..



CREATE TABLE log_pk
(
	log_id		varchar(20) PRIMARY key
	,log_pwd	varchar(20) NOT null
	,tel		varchar(20)
);

INSERT INTO log_pk (log_id,log_pwd,tel)
 VALUES ('pk01','1234','010-1234-1234')
 ;
 
INSERT INTO log_pk (log_id,log_pwd,tel)
 VALUES ('pk01','1234','010-1234-1234') --pk IS UNIQUE.
 ;
 
INSERT INTO log_pk (log_id,log_pwd,tel)
 VALUES (null,'1234','010-1234-1234') -- pk IS NOT null
 ;
 
SELECT *
FROM EMP_TEMP ;

/*
 * 존재하지 않는 부서번호를 emp_temp 테이블에 입력 시도
 * 
 * */
INSERT INTO EMP_TEMP  (empno,ENAME, job,mgr, HIREDATE, SAL,COMM,DEPTNO)
 VALUES (3333, NULL,NULL,NULL,NULL,NULL,NULL,50) -- 제약조건이 없어 가능
 ;
INSERT INTO EMP (empno,ENAME, job,mgr, HIREDATE, SAL,COMM,DEPTNO)
 VALUES (3333, NULL,NULL,NULL,NULL,NULL,NULL,1200) --제약조건이 있는 정상적인 TABLE
 ;


/*
 *index 빠른 검색을 위한 색인
 *장점: 빠른검색속도.
 *단점: 잦은 입출력 시 속도 저하 
 * */


--특정 직군에 해당하는 직원을 빠르게 찾기 위한 색인 지정
CREATE INDEX idx_emp_job
ON emp (job)
;

SELECT *
FROM USER_INDEXES WHERE table_name IN ('emp','dept');



/*
 *view: 테이블을 편리하게 이용하기 위해 사용하는 가상 테이블
 *  */
CREATE VIEW vw_emp
as(SELECT EMPNO,ENAME,JOB,DEPTNO
FROM EMP e 
WHERE DEPTNO =10);


SELECT *
FROM vw_emp;

SELECT *
FROM user_views
WHERE VIEW_name = 'vw_emp';



/*
 * ROWNUM  
 *  */

SELECT ROWNUM , E.*
FROM EMP E
ORDER BY SAL DESC ;

SELECT ROWNUM , A.*
FROM (SELECT * FROM EMP ORDER BY SAL DESC) A; 
ORDER BY SAL DESC ;

/*
 * 오라클 에서 관리하는 관리 테이블 리스트 출력
 *  */

SELECT *FROM DICT;


SELECT *FROM DICT
WHERE TABLE_NAME LIKE 'USER_CON%';


SELECT *FROM DBA_TABLES
WHERE TABLE_NAME LIKE 'EMP%';

SELECT *FROM DBA_USERS
WHERE USERNAME LIKE 'SCOTT%';