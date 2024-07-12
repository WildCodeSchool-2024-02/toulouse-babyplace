SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

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
  `phone` VARCHAR(100),
  `street_address` VARCHAR(100) NOT NULL,
  `zip_code` VARCHAR(20) NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `mail` VARCHAR(100) NOT NULL,
  `password` TEXT NOT NULL,
  `url` TEXT NOT NULL,
  `opening` TIME NOT NULL,
  `closing` TIME NOT NULL,
  `capacity` INT NOT NULL,
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
-- Table `lumen`.`childcare_center_customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lumen`.`childcare_center_customer` (
  `childcare_center_id` INT NOT NULL,
  `customer_id` INT NOT NULL,
  PRIMARY KEY (`childcare_center_id`, `customer_id`), -- Composite primary key
  INDEX `fk_childcare_center_idx` (`childcare_center_id` ASC) VISIBLE, -- Index for the foreign key
  INDEX `fk_customer_idx` (`customer_id` ASC) VISIBLE, -- Index for the foreign key
  CONSTRAINT `fk_childcare_center` -- Foreign key constraint
    FOREIGN KEY (`childcare_center_id`)
    REFERENCES `lumen`.`childcare_center` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_customer` -- Foreign key constraint
    FOREIGN KEY (`customer_id`)
    REFERENCES `lumen`.`customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
