update tasks
set completed = $1
where id = $2

returning *;