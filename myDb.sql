-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 06-03-2023 a las 17:36:05
-- Versión del servidor: 8.0.32
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `myDb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `apellido1` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `apellido2` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nif` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`nombre`, `apellido1`, `apellido2`, `nif`) VALUES
('alumno', NULL, NULL, '00338811S'),
('alumno3', 'asdasd', 'asdasd', '01234567K'),
('estudiante77', NULL, NULL, '88221177W'),
('user name', 'priapellido', 'segapellido', '987654321E');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno_ciclos`
--

CREATE TABLE `alumno_ciclos` (
  `nif_alumno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_ciclos` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumno_ciclos`
--

INSERT INTO `alumno_ciclos` (`nif_alumno`, `id_ciclos`) VALUES
('987654321E', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciclos`
--

CREATE TABLE `ciclos` (
  `id` int NOT NULL,
  `sigla` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `fecha` date DEFAULT NULL,
  `grado` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ciclos`
--

INSERT INTO `ciclos` (`id`, `sigla`, `nombre`, `fecha`, `grado`) VALUES
(1, 'DAW', 'Desarrollo de Aplicaciones Web', '2018-12-05', ''),
(2, 'DAM', 'Desarrollo de Aplicaciones Multiplataforma', '2020-02-05', ''),
(3, 'ASIR', ' Administración de Sistemas Informáticos en Red', '2023-02-01', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curriculums`
--

CREATE TABLE `curriculums` (
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `body` text COLLATE utf8mb4_general_ci,
  `nif_alumno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `nif` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `direccion` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contacto` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cargo` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `telefono` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`nif`, `nombre`, `direccion`, `contacto`, `cargo`, `telefono`) VALUES
('00004567E', 'InesEmpresa', 'Probando88888', 'Probando77777', 'Probando77777', '12345677'),
('00225566Y', 'Empresa2', NULL, NULL, NULL, NULL),
('11110000A', 'empresaManu', NULL, NULL, NULL, NULL),
('88888888S', 'prueba', 'probando', 'probando', 'prueba', '123123123123'),
('99224455U', 'empresa1', NULL, NULL, NULL, NULL),
('A11111111', 'Empresa dummie 01, S.Anonima', 'Calle desconocida, 23 - 13500 Puertollano (ciudad real)', 'Pedro Martinez Perez', 'RRHH jefe', '123456'),
('A22222222', 'Empresa dummie02, S.A.', 'Calle dsafaf.   13500 Puertollano CiudadReal', 'Pepe Piñas', 'jefe administracion', '5423424'),
('R12345678', 'EmpresaRR, S.L.', 'Calle calle, 13500 Pueblo CR', 'Juan de la torre', NULL, NULL),
('Z12345678', 'EmpresaZZ, S.L.', 'Calle avenida, 02005 Albvacete', 'Pedro gonzalez', 'encargado de personal', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresasofertas`
--

CREATE TABLE `empresasofertas` (
  `ideo` int NOT NULL,
  `id_oferta` int NOT NULL,
  `nif_empresa` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empresasofertas`
--

INSERT INTO `empresasofertas` (`ideo`, `id_oferta`, `nif_empresa`) VALUES
(11, 91, 'A11111111'),
(13, 93, 'A11111111'),
(14, 95, 'A11111111'),
(18, 99, 'A11111111'),
(19, 100, 'A11111111'),
(20, 101, 'A11111111'),
(22, 103, 'A11111111'),
(23, 104, 'A11111111'),
(24, 105, 'A11111111'),
(25, 106, 'A11111111'),
(26, 107, 'A11111111'),
(27, 108, 'A11111111'),
(30, 111, 'A11111111'),
(32, 113, 'A11111111'),
(33, 114, 'A11111111'),
(34, 115, 'A11111111'),
(35, 116, 'A11111111'),
(36, 117, 'A11111111');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `files`
--

CREATE TABLE `files` (
  `id` bigint NOT NULL,
  `userNif` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `file` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `files`
--

INSERT INTO `files` (`id`, `userNif`, `file`, `createdAt`, `updatedAt`) VALUES
(65, '00000001A', '51712e44-07f4-4301-a74c-90479d571da0.jpg', '2023-03-06', '2023-03-06'),
(67, '01234567K', 'b8c0cba7-d524-4043-a15f-e1db25c9a0f8.jpg', '2023-03-06', '2023-03-06'),
(68, '99224455U', 'ee2f5b75-d464-4790-84f2-3e0da0828f7e.jpg', '2023-03-06', '2023-03-06'),
(69, '11110000A', '346a0752-48cf-4821-aa71-d2db4616153d.jpg', '2023-03-06', '2023-03-06'),
(70, '00225566Y', 'fca92434-ab18-4930-9eec-f417017c0fd2.jpg', '2023-03-06', '2023-03-06'),
(71, '88221177W', 'e7dbc439-9ad5-4c0e-b9c0-6f0bfab22d3c.jpg', '2023-03-06', '2023-03-06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `form_contacto`
--

CREATE TABLE `form_contacto` (
  `id` bigint NOT NULL,
  `nif` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(120) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `observaciones` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `form_contacto`
--

INSERT INTO `form_contacto` (`id`, `nif`, `nombre`, `email`, `telefono`, `observaciones`) VALUES
(1, 'A11111111', 'Empresa01', 'empresa01@gmail.com', '(926) 123456', 'Esto es un prueba de formulario de contacto. Rellenado directamente desde la base de datos para poder probar la api.'),
(2, 'A11111111', 'Empresa01', 'empresa01@gmail.com', '(926) 123456', 'Esto es el segundo formulario. para tener mas de uno'),
(3, 'Z11223344', 'Manuel', 'alguien@algunsitio.com', '967 123456', 'Observaciones form contacto 01'),
(4, 'A11111111', 'Anacleto', 'alguien@algunsitio.com', '926 123456', 'ñasdlkfjñljdfsadf ñfjña ajñ ljfñafdsajfd ñfdj fñjqwej fejqaffdmm '),
(5, 'A11111111', 'Anacleto', 'alguien@algunsitio.com', '926 123456', 'ñasdlkfjñljdfsadf ñfjña ajñ ljfñafdsajfd ñfdj fñjqwej fejqaffdmm '),
(6, '', '', '', '', ''),
(7, '', 'Francisco', 'francisco@correo.es', '111111888', 'Texto \npara \nprueba \nde \nformulario \nde \ncontacto\ncon\nvarias\nlineas\ncortas.'),
(8, 'asdfg', 'Roshi de Palma', 'adsf@dsafs.es', '11111', 'dfadsfadfafdaf'),
(9, 'R12312312', 'Alfonso Mena', 'alguien@algunsitio.com', '7654d3', 'Observacions dummie para rellenar el textarea');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertas`
--

CREATE TABLE `ofertas` (
  `id` int NOT NULL,
  `titulo` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion` varchar(15000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lugar` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `presencial` int NOT NULL,
  `jornada` varchar(30) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ofertas`
--

INSERT INTO `ofertas` (`id`, `titulo`, `descripcion`, `lugar`, `presencial`, `jornada`) VALUES
(9, 'Lorem ipsum 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(10, 'Lorem ipsum 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(11, 'Lorem ipsum 4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(12, 'Lorem ipsum 5', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(14, 'Lorem ipsum 6', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(16, 'Lorem ipsum 8', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(56, 'Lorem ipsum 9', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(57, 'Lorem ipsum 10', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(58, 'Lorem ipsum 11', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(59, 'Lorem ipsum 12', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(60, 'Lorem ipsum 13', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(61, 'Lorem ipsum 14', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(62, 'Lorem ipsum 15', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(63, 'Lorem ipsum 16', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(64, 'Lorem ipsum 17', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(65, 'Lorem ipsum 18', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(66, 'Lorem ipsum 19', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(67, 'Lorem ipsum 20', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(68, 'Lorem ipsum 21', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(69, 'Lorem ipsum 22', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(70, 'Lorem ipsum 23', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(71, 'Lorem ipsum 24', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(72, 'Lorem ipsum 25', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(73, 'Lorem ipsum 26', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(74, 'Lorem ipsum 27', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(75, 'Lorem ipsum 28', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(76, 'Lorem ipsum 29', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\r\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Avenida Oporto, 25, Madrid', 0, 'completa'),
(86, 'asdasd', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'asdas', 1, 'Completa'),
(91, 'Prueba11111111', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 1, 'Completa'),
(93, 'Prueba111111', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'werwer', 1, 'Completa'),
(95, 'Prueba7777', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 0, 'completa'),
(99, 'Prueba2323', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 1, 'Completa'),
(100, 'Prueba7777', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 0, 'Completa'),
(101, 'Prueba2323', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 0, 'Completa'),
(103, 'Prueba7777', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 0, 'Completa'),
(104, 'Prueba8888888888', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 0, 'Completa'),
(105, 'Prueba7777', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 0, 'Completa'),
(106, 'asdasd', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 1, 'Completa'),
(107, 'Prueba7777', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 1, 'Completa'),
(108, 'Prueba', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 0, 'completa'),
(111, 'Prueba de oferta 55', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae?\nDeserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 1, 'Completa'),
(113, 'Prueba2323', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae? Deserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando', 1, 'asdasd'),
(114, 'Prueba7777', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae? Deserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando', 1, 'asdasd'),
(115, 'Prueba1787787', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae? Deserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 1, 'sdfsdfds'),
(116, 'fsdsd', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae? Deserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 1, 'Completa'),
(117, 'Prueba111111', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quo, qui nulla quas quos provident dicta nisi, officia id velit totam modi autem eligendi, ipsa sapiente alias illum recusandae? Deserunt minima in aspernatur cupiditate vel reprehenderit aliquam. Amet aut inventore sint laudantium, ab cumque odit blanditiis numquam minus voluptate, necessitatibus voluptatem, consequatur rerum', 'Probando77777', 1, 'Completa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` bigint NOT NULL,
  `descripcion` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2023-01-31 16:59:25', '2023-01-31 16:59:25'),
(2, 'estudiante', '2023-01-31 16:59:25', '2023-01-31 16:59:25'),
(3, 'empresa', '2023-02-03 09:44:28', '2023-02-03 09:44:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolesasignados`
--

CREATE TABLE `rolesasignados` (
  `userNif` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `roleId` bigint NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rolesasignados`
--

INSERT INTO `rolesasignados` (`userNif`, `roleId`) VALUES
('00001111S', 2),
('01234567K', 2),
('88221177W', 2),
('00000001A', 3),
('00225566Y', 3),
('11110000A', 3),
('99224455U', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230201155130-create-roles-asignados.js'),
('20230201155441-create-role.js'),
('20230201161915-create-user.js'),
('20230201165655-create-curriculum.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `nif` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` int DEFAULT '0',
  `verificatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `rol` int DEFAULT '2',
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `telefono` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`nif`, `nombre`, `email`, `password`, `status`, `verificatedAt`, `rol`, `createdAt`, `updatedAt`, `telefono`) VALUES
('00000001A', 'María 2', 'iop@cifvirgendegracia.com', '1234', 1, '2023-03-06 09:07:11', 1, '2023-03-06 09:07:11', '2023-03-06 09:07:11', '12345678'),
('00001111S', 'practicas', 'practicas2324@gmail.com', 'Learning1771', 0, '2023-03-01 07:41:18', 2, '2023-03-01 07:41:18', '2023-03-01 07:41:18', '999 123456'),
('00225566Y', 'Empresa2', 'empresa2@gmail.com', '1234', 0, '2023-03-06 09:54:07', 3, '2023-03-06 09:54:07', '2023-03-06 09:54:07', '1234567'),
('01234567K', 'alumno3', 'alumno3@correo.es', '1234', 1, '2023-03-06 09:36:40', 2, '2023-03-06 09:36:40', '2023-03-06 09:36:40', '65432199'),
('11110000A', 'empresaManu', 'empresamanu@gmail.com', '1234', 0, '2023-03-06 09:38:17', 3, '2023-03-06 09:38:17', '2023-03-06 09:38:17', '12345678'),
('88221177W', 'estudiante77', 'estudiante77@corre.es', '1234', 0, '2023-03-06 09:55:16', 2, '2023-03-06 09:55:16', '2023-03-06 09:55:16', '1234'),
('88888888S', 'Maria7', '7777@gmail.com', '12345', 1, '2023-03-06 10:06:40', 1, '2023-03-06 10:06:40', '2023-03-06 10:06:40', '123123123123213'),
('88888888S', 'prueba', 'prueba@gmail.com', '1234', 1, '2023-03-06 10:04:05', 3, '2023-03-06 10:04:05', '2023-03-06 10:04:05', '123123123123'),
('99224455U', 'empresa1', 'empresa1@correo.es', '1234', 0, '2023-03-06 09:37:16', 3, '2023-03-06 09:37:16', '2023-03-06 09:37:16', '12345678'),
('A11111111', 'empresa01', 'as@fffff.com', '1234', 1, '2023-03-06 09:15:55', 3, '2023-03-06 09:15:55', '2023-03-06 09:15:55', ''),
('A22222222', 'empresa02', 'empresa02@gmail.com', '12345', 1, '2023-03-04 19:07:37', 3, '2023-03-04 19:07:37', '2023-03-04 19:07:37', '967 - 140000');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`nif`);

--
-- Indices de la tabla `alumno_ciclos`
--
ALTER TABLE `alumno_ciclos`
  ADD PRIMARY KEY (`nif_alumno`,`id_ciclos`),
  ADD KEY `id_ciclos` (`id_ciclos`);

--
-- Indices de la tabla `ciclos`
--
ALTER TABLE `ciclos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `curriculums`
--
ALTER TABLE `curriculums`
  ADD PRIMARY KEY (`nif_alumno`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`nif`);

--
-- Indices de la tabla `empresasofertas`
--
ALTER TABLE `empresasofertas`
  ADD PRIMARY KEY (`ideo`),
  ADD KEY `nif_empresa` (`nif_empresa`),
  ADD KEY `id_oferta` (`id_oferta`);

--
-- Indices de la tabla `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`,`userNif`),
  ADD KEY `userID` (`userNif`);

--
-- Indices de la tabla `form_contacto`
--
ALTER TABLE `form_contacto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rolesasignados`
--
ALTER TABLE `rolesasignados`
  ADD PRIMARY KEY (`userNif`,`roleId`),
  ADD KEY `idRol` (`roleId`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`nif`,`email`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ciclos`
--
ALTER TABLE `ciclos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `empresasofertas`
--
ALTER TABLE `empresasofertas`
  MODIFY `ideo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `files`
--
ALTER TABLE `files`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de la tabla `form_contacto`
--
ALTER TABLE `form_contacto`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno_ciclos`
--
ALTER TABLE `alumno_ciclos`
  ADD CONSTRAINT `alumno_ciclos_ibfk_1` FOREIGN KEY (`id_ciclos`) REFERENCES `ciclos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `alumno_ciclos_ibfk_2` FOREIGN KEY (`nif_alumno`) REFERENCES `alumnos` (`nif`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `curriculums`
--
ALTER TABLE `curriculums`
  ADD CONSTRAINT `curriculums_ibfk_1` FOREIGN KEY (`nif_alumno`) REFERENCES `alumnos` (`nif`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `empresasofertas`
--
ALTER TABLE `empresasofertas`
  ADD CONSTRAINT `empresasofertas_ibfk_1` FOREIGN KEY (`nif_empresa`) REFERENCES `empresas` (`nif`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `empresasofertas_ibfk_2` FOREIGN KEY (`id_oferta`) REFERENCES `ofertas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `files_ibfk_1` FOREIGN KEY (`userNif`) REFERENCES `users` (`nif`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rolesasignados`
--
ALTER TABLE `rolesasignados`
  ADD CONSTRAINT `rolesasignados_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rolesasignados_ibfk_2` FOREIGN KEY (`userNif`) REFERENCES `users` (`nif`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
