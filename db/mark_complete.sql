update tasks
set completed = not completed
where id = $1

returning *;