create database mycontribution_data character set utf8 collate utf8_general_ci;
create user my_contribution@localhost identified by 'mycontribution';
grant all privileges on mycontribution_data.* to my_contribution@localhost;
flush privileges;