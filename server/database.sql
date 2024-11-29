CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `username` varchar(255),
  `fullname` varchar(255),
  `password` varchar(255),
  `address` varchar(255),
  `email` varchar(255),
  `phonenumber` varchar(255),
  `birthday` date,
  `created_at` timestamp,
  `update_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_by` varchar(255),
  `update_by` varchar(255),
  `delete_yn` varchar(255)
);

CREATE TABLE `role` (
  `id` integer PRIMARY KEY,
  `rolename` varchar(255),
  `created_at` timestamp,
  `update_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `user_role` (
  `user_id` integer,
  `role_id` integer,
  PRIMARY KEY (`user_id`, `role_id`)
);

CREATE TABLE `ticket_type` (
  `id` integer PRIMARY KEY,
  `ticket_id` integer,
  `type_name` varchar(255),
  `price` float,
  `description` varchar(255),
  `created_at` timestamp,
  `update_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_by` varchar(255),
  `update_by` varchar(255),
  `delete_yn` varchar(255)
);

CREATE TABLE `ticket` (
  `id` integer,
  `ticket_name` varchar(255),
  `created_at` timestamp,
  `update_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_by` varchar(255),
  `update_by` varchar(255),
  `delete_yn` varchar(255)
);

CREATE TABLE `order` (
  `id` integer,
  `customer_id` integer,
  `transaction_id` integer,
  `voucher_id` integer,
  `total` float,
  `created_at` timestamp,
  `update_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_by` varchar(255),
  `update_by` varchar(255),
  `delete_yn` varchar(255)
);

CREATE TABLE `order_details` (
  `id` integer,
  `ticket_type_id` integer,
  `order_id` integer,
  `quantity` integer,
  `created_at` timestamp,
  `update_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_by` varchar(255),
  `update_by` varchar(255),
  `delete_yn` varchar(255)
);

CREATE TABLE `voucher` (
  `id` integer,
  `voucher_name` varchar(255),
  `voucher_code` varchar(255),
  `voucher_discount` integer,
  `created_at` timestamp,
  `update_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_by` varchar(255),
  `update_by` varchar(255),
  `delete_yn` varchar(255)
);

CREATE TABLE `transactions` (
  `id` integer,
  `ticket_type_id` integer,
  `payment_method` varchar(255),
  `order_id` integer,
  `created_at` timestamp,
  `update_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_by` varchar(255),
  `update_by` varchar(255),
  `delete_yn` varchar(255)
);

CREATE TABLE `news` (
  `id` integer,
  `title` varchar(255),
  `content` varchar(255),
  `created_at` timestamp,
  `update_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_by` varchar(255),
  `update_by` varchar(255),
  `delete_yn` varchar(255)
);

CREATE TABLE `customer` (
  `id` integer,
  `customer_name` varchar(255),
  `address` varchar(255),
  `phone_number` varchar(255),
  `email` varchar(255),
  `created_at` timestamp,
  `update_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_by` varchar(255),
  `update_by` varchar(255),
  `delete_yn` varchar(255)
);

ALTER TABLE `user_role` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_role` ADD FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);

ALTER TABLE `ticket_type` ADD FOREIGN KEY (`ticket_id`) REFERENCES `ticket` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`id`);

ALTER TABLE `transactions` ADD FOREIGN KEY (`ticket_type_id`) REFERENCES `ticket_type` (`id`);

ALTER TABLE `transactions` ADD FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`voucher_id`) REFERENCES `voucher` (`id`);

ALTER TABLE `order_details` ADD FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);
