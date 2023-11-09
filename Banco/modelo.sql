-- MySQL Script generated by MySQL Workbench
-- Thu Nov  9 19:17:25 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema API
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema API
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `API` DEFAULT CHARACTER SET utf8 ;
USE `API` ;

-- -----------------------------------------------------
-- Table `API`.`cad_produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `API`.`cad_produtos` (
  `cod_prod` INT NOT NULL AUTO_INCREMENT,
  `nm_prod` VARCHAR(200) NOT NULL,
  `ds_prod` VARCHAR(4000) NOT NULL,
  `quant_prod` INT NOT NULL,
  `valor_prod` FLOAT NOT NULL,
  `img_prod` VARCHAR(800) NOT NULL,
  PRIMARY KEY (`cod_prod`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;