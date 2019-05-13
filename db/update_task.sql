update tasks
set title = $1, description = $2, completed = $3
select * from tasks;