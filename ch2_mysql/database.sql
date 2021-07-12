--MariaDB
CREATE TABLE `users` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL COLLATE 'utf8_general_ci',
	`age` INT(11) NOT NULL,
	`married` TINYINT(4) NOT NULL,
	`comment` TEXT(65535) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`created_at` DATETIME NOT NULL DEFAULT current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE,
	UNIQUE INDEX `name` (`name`) USING BTREE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;