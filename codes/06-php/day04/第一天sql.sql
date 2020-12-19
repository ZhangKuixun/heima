-- 我是注释
-- sql语言，是关系型数据库通用的语言，怎删改查


-- 增
-- insert into 表名 (名称, 年龄, 性别) value(值1，值2, 值3)
-- insert into stu (name,age,sex) value('丁丁',20,'f');
-- insert into stu (name,age,sex) value('涛涛',26,'m');
-- insert into stu (name,age,sex) value('汪汪',19,'f');
-- insert into stu (name,age,sex) value('丽丽',12,'m');


-- 删：
-- delete from 表名 where 条件
-- delete from stu where id=1;
-- delete from stu where age=3;


-- 改：
-- update 表 set k=v, k=v where 条件
-- update stu set name='才才' where name='丁丁';
-- update stu set age=18 where name='才才';


-- 查：
-- select 字段名称列表 from 表 where 条件;
-- select * from stu;
-- select id,name from stu;
-- select name from stu where id=4;


-- 模糊查询：
-- name = '张艺兴'  ==>  name like '张%'
-- select * from stu where name like '张%';
-- 要查找名字中带有星字的人 
-- select * from stu where name like '%星%'; 


-- 查找年龄大于18小于27的人
-- select * from stu where age>18 and age<27;

-- 查找id=4、6、7的人
-- select * from stu where id=1 or id=6 or id=7;
-- select * from stu where id in (1,6,7,8);


-- 查找班级的总人数
-- count() 可以统计总数
-- as 起别名
-- select count(*) as 'total' from stu;

-- 查找结果按id倒序排列显示
select * from stu order by id desc;
