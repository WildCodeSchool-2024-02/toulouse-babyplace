-- MySQL Script generated by MySQL Workbench
-- Sat Jun  8 09:58:08 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema lumen
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema lumen
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lumen` DEFAULT CHARACTER SET utf8 ;
USE `lumen` ;

-- -----------------------------------------------------
-- Table `lumen`.`childcare_center`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lumen`.`childcare_center` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `phone` VARCHAR(100) NOT NULL,
  `street_address` VARCHAR(100) NOT NULL,
  `zip_code` VARCHAR(20) NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `mail` VARCHAR(100) NOT NULL,
  `password` VARCHAR(80) NOT NULL,
  `url` BLOB NOT NULL,
  `types` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idprofessional_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lumen`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lumen`.`customer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `hashed_password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `firstname` VARCHAR(100) NOT NULL,
  `mail` VARCHAR(100) NOT NULL,
  `address` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idcustomer_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lumen`.`employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lumen`.`employee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `first_name` VARCHAR(100) NOT NULL,
  `function` VARCHAR(100) NOT NULL,
  `mail` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(100) NOT NULL,
  `url` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idemployee_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lumen`.`exp_training`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lumen`.`exp_training` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `training` VARCHAR(100) NOT NULL,
  `activity` VARCHAR(100) NOT NULL,
  `diplome` VARCHAR(100) NOT NULL,
  `number_years_exp` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idEXP_&_Formation_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lumen`.`date_time`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lumen`.`date_time` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `opening_dates` DATETIME NOT NULL,
  `closing_dates` DATETIME NOT NULL,
  `closing_days` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idDate_&_timing_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lumen`.`children`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lumen`.`children` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `first_name` VARCHAR(100) NOT NULL,
  `allergies` VARCHAR(255) NOT NULL,
  `vaccinated` TINYINT NOT NULL,
  `customer_id` INT NOT NULL,
  `childcare_center_id` INT NOT NULL,
  PRIMARY KEY (`id`, `customer_id`),
  UNIQUE INDEX `idchildren_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_children_customer1_idx` (`customer_id` ASC) VISIBLE,
  INDEX `fk_children_childcare_center1_idx` (`childcare_center_id` ASC) VISIBLE,
  CONSTRAINT `fk_children_customer1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `lumen`.`customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_children_childcare_center1`
    FOREIGN KEY (`childcare_center_id`)
    REFERENCES `lumen`.`childcare_center` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lumen`.`filing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lumen`.`filing` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `filing` MEDIUMTEXT NOT NULL,
  `customer_id` INT NOT NULL,
  `childcare_center_id` INT NOT NULL,
  PRIMARY KEY (`id`, `customer_id`),
  UNIQUE INDEX `iddossiers_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_folders_customer1_idx` (`customer_id` ASC) VISIBLE,
  INDEX `fk_filing_childcare_center1_idx` (`childcare_center_id` ASC) VISIBLE,
  CONSTRAINT `fk_folders_customer1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `lumen`.`customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_filing_childcare_center1`
    FOREIGN KEY (`childcare_center_id`)
    REFERENCES `lumen`.`childcare_center` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lumen`.`childcare_center_has_employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lumen`.`childcare_center_has_employee` (
  `childcare_center_id` INT NOT NULL,
  `employee_id` INT NOT NULL,
  PRIMARY KEY (`childcare_center_id`, `employee_id`),
  INDEX `fk_professional_has_employees_employees1_idx` (`employee_id` ASC) VISIBLE,
  INDEX `fk_professional_has_employees_professional1_idx` (`childcare_center_id` ASC) VISIBLE,
  CONSTRAINT `fk_professional_has_employees_professional1`
    FOREIGN KEY (`childcare_center_id`)
    REFERENCES `lumen`.`childcare_center` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_professional_has_employees_employees1`
    FOREIGN KEY (`employee_id`)
    REFERENCES `lumen`.`employee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lumen`.`employee_has_exp_training`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lumen`.`employee_has_exp_training` (
  `employee_id` INT NOT NULL,
  `exp_training_id` INT NOT NULL,
  PRIMARY KEY (`employee_id`, `exp_training_id`),
  INDEX `fk_employees_has_exp_formation_exp_formation1_idx` (`exp_training_id` ASC) VISIBLE,
  INDEX `fk_employees_has_exp_formation_employees1_idx` (`employee_id` ASC) VISIBLE,
  CONSTRAINT `fk_employees_has_exp_formation_employees1`
    FOREIGN KEY (`employee_id`)
    REFERENCES `lumen`.`employee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_employees_has_exp_formation_exp_formation1`
    FOREIGN KEY (`exp_training_id`)
    REFERENCES `lumen`.`exp_training` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lumen`.`childcare_center_has_date_time`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lumen`.`childcare_center_has_date_time` (
  `childcare_center_id` INT NOT NULL,
  `date_time_id` INT NOT NULL,
  PRIMARY KEY (`childcare_center_id`, `date_time_id`),
  INDEX `fk_professional_has_date_timing_date_timing1_idx` (`date_time_id` ASC) VISIBLE,
  INDEX `fk_professional_has_date_timing_professional1_idx` (`childcare_center_id` ASC) VISIBLE,
  CONSTRAINT `fk_professional_has_date_timing_professional1`
    FOREIGN KEY (`childcare_center_id`)
    REFERENCES `lumen`.`childcare_center` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_professional_has_date_timing_date_timing1`
    FOREIGN KEY (`date_time_id`)
    REFERENCES `lumen`.`date_time` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lumen`.`childcare_center_has_customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lumen`.`childcare_center_has_customer` (
  `childcare_center_id` INT NOT NULL,
  `customer_id` INT NOT NULL,
  PRIMARY KEY (`childcare_center_id`, `customer_id`),
  INDEX `fk_professional_has_customer_customer1_idx` (`customer_id` ASC) VISIBLE,
  INDEX `fk_professional_has_customer_professional1_idx` (`childcare_center_id` ASC) VISIBLE,
  CONSTRAINT `fk_professional_has_customer_professional1`
    FOREIGN KEY (`childcare_center_id`)
    REFERENCES `lumen`.`childcare_center` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_professional_has_customer_customer1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `lumen`.`customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
