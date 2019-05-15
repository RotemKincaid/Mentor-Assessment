update tasks
set title = $1, description = $2, completed = $3
where id = $4
select * from tasks;