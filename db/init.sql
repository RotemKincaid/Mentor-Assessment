create table tasks(
id serial primary key,
title varchar(200) not null,
description text,
completed boolean
)