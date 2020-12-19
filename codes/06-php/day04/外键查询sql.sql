-- 查询王老师的 姓名 年龄 班级名 教室号
-- select * from 表A join 表B on 表A.外键 = 表B.主键 where 条件;

select teacher.name, teacher.age, class.classname, class.room from teacher 
join class on teacher.classid = class.id -- 连接班级表
where teacher.id=2;-- 筛选条件

