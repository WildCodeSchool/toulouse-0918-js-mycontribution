-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mar. 22 jan. 2019 à 00:46
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14-1+0~20190113100742.14+stretch~1.gbpd83c69

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mycontribution_data`
--

-- --------------------------------------------------------

--
-- Structure de la table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `eventName` varchar(100) NOT NULL,
  `date` datetime DEFAULT NULL,
  `eventDesc` text,
  `eventPlace` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `favorite`
--

CREATE TABLE `favorite` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `projectType` enum('initiative','mission') NOT NULL,
  `userId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `logo` varchar(150) NOT NULL,
  `summary` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `sponsors` varchar(500) DEFAULT NULL,
  `prizes` varchar(500) DEFAULT NULL,
  `skills` text,
  `contact` varchar(150) NOT NULL,
  `team` varchar(150) NOT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `connext` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(300) NOT NULL,
  `presentation` mediumtext NOT NULL,
  `picture` mediumtext NOT NULL,
  `skill` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
