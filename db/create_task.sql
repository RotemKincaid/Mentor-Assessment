insert into tasks(title, description, completed)
values( $1, $2, $3 )
select * from tasks;