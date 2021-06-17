-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 21-05-17 17:57
-- 서버 버전: 10.4.14-MariaDB
-- PHP 버전: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `finkick`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `account`
--

CREATE TABLE `account` (
  `num` int(11) NOT NULL,
  `id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(2000) COLLATE utf8_unicode_ci NOT NULL,
  `phoneNumber` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `registDay` datetime NOT NULL,
  `type` varchar(2) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'M' COMMENT 'A : 관지라, O : 운영자, M : 회원'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 테이블의 덤프 데이터 `account`
--

INSERT INTO `account` (`num`, `id`, `password`, `phoneNumber`, `registDay`, `type`) VALUES
(1, 'ak507@naver.com', 'gksl12', '010-5628-7173', '2021-05-07 17:28:13', 'A');

-- --------------------------------------------------------

--
-- 테이블 구조 `board`
--

CREATE TABLE `board` (
  `num` int(11) UNSIGNED NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `pass` varchar(12) NOT NULL,
  `title` varchar(70) NOT NULL,
  `content` text NOT NULL,
  `wdate` datetime NOT NULL,
  `ip` varchar(15) NOT NULL,
  `view` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `board`
--

INSERT INTO `board` (`num`, `name`, `email`, `pass`, `title`, `content`, `wdate`, `ip`, `view`) VALUES
(62, '운영자', 'ak507@naver.com', '12345', '반갑습니다 Finkick 운영자입니다.', '환영합니다!', '2021-04-06 21:23:38', '::1', 48),
(63, '기병국', 'ak507@naver.com', '1234', '테스트용 게시글입니다.', '안녕하세요 ㅎㅎ 반갑습니다', '2021-04-29 00:05:37', '::1', 4);

-- --------------------------------------------------------

--
-- 테이블 구조 `customer_board`
--

CREATE TABLE `customer_board` (
  `num` int(11) UNSIGNED NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `title` varchar(70) NOT NULL,
  `content` text NOT NULL,
  `wdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `customer_board`
--

INSERT INTO `customer_board` (`num`, `email`, `title`, `content`, `wdate`) VALUES
(1, 'ak507@naver.com', '1:1문의 테스트', '안녕하세요 ㅎㅎ', '2021-05-01 08:41:50'),
(2, 'ak507@naver.com', '안녕하세요', '반갑습니다', '2021-05-07 18:17:17');

-- --------------------------------------------------------

--
-- 테이블 구조 `emailauth`
--

CREATE TABLE `emailauth` (
  `num` int(11) NOT NULL,
  `accountNum` int(11) DEFAULT NULL,
  `authNum` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `publicationTime` datetime NOT NULL,
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 테이블 구조 `inquire`
--

CREATE TABLE `inquire` (
  `num` int(11) NOT NULL,
  `requestNum` int(11) NOT NULL COMMENT '이용자 account num',
  `requestType` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '문의 구분 (현재 사용 X)',
  `requestTitle` varchar(500) COLLATE utf8_unicode_ci NOT NULL COMMENT '문의 제목',
  `requestContent` varchar(3000) COLLATE utf8_unicode_ci NOT NULL COMMENT '문의 내용',
  `requestDate` datetime NOT NULL COMMENT '문의 날짜',
  `responseNum` int(11) DEFAULT NULL COMMENT '답변자 account num',
  `responseContent` varchar(3000) CHARACTER SET utf8 DEFAULT NULL COMMENT '답변 내용',
  `responseDate` datetime DEFAULT NULL COMMENT '답변 날짜'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 테이블의 덤프 데이터 `inquire`
--

INSERT INTO `inquire` (`num`, `requestNum`, `requestType`, `requestTitle`, `requestContent`, `requestDate`, `responseNum`, `responseContent`, `responseDate`) VALUES
(1, 1, NULL, 'ㅁㄴㅇㄹ', 'ㅁㄴㅇㄹ', '2021-05-12 22:08:00', NULL, NULL, NULL),
(2, 1, NULL, '테스트 태호', '테스트 태호', '2021-05-16 20:53:26', 1, 'qwerqwer', '2021-05-18 00:46:47'),
(3, 1, NULL, 'ㅋㅋㅋ', 'ㅋㅋㅋㅋㅋ', '2021-05-17 17:27:54', 1, 'ㅈㄷㄱ', '2021-05-18 00:56:49'),
(7, 1, NULL, '1:1문의테스트', '안녕하세요 ㅎ', '2021-05-18 00:55:33', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 테이블 구조 `notice`
--

CREATE TABLE `notice` (
  `num` int(11) NOT NULL,
  `writerNum` int(11) NOT NULL COMMENT '작성자 번호',
  `title` varchar(500) COLLATE utf8_unicode_ci NOT NULL COMMENT '공지 제목',
  `content` varchar(3000) COLLATE utf8_unicode_ci NOT NULL COMMENT '공지 내용',
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 테이블의 덤프 데이터 `notice`
--

INSERT INTO `notice` (`num`, `writerNum`, `title`, `content`, `date`) VALUES
(1, 0, 'ㅇㅇ', 'ㅇㅇㅇㅇ', '2021-05-12 21:47:57'),
(3, 0, '아아', '아아아', '2021-05-12 21:54:31'),
(4, 0, 'ㅎ', 'ㅇㅀㅇㄹ', '2021-05-12 21:55:12'),
(8, 1, '글쓰기테스트', '잉노무띠', '2021-05-17 17:08:53');

-- --------------------------------------------------------

--
-- 테이블 구조 `pay`
--

CREATE TABLE `pay` (
  `num` int(11) NOT NULL,
  `useHistoryNum` int(11) NOT NULL,
  `payType` varchar(10) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 테이블 구조 `usehistory`
--

CREATE TABLE `usehistory` (
  `num` int(11) NOT NULL,
  `accountNum` int(11) NOT NULL,
  `startTime` datetime NOT NULL,
  `endTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 테이블 구조 `version`
--

CREATE TABLE `version` (
  `ios` varchar(10) NOT NULL,
  `iosUrl` varchar(200) NOT NULL,
  `android` varchar(10) NOT NULL,
  `androidUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`num`),
  ADD UNIQUE KEY `id` (`id`);

--
-- 테이블의 인덱스 `board`
--
ALTER TABLE `board`
  ADD PRIMARY KEY (`num`);

--
-- 테이블의 인덱스 `customer_board`
--
ALTER TABLE `customer_board`
  ADD PRIMARY KEY (`num`);

--
-- 테이블의 인덱스 `emailauth`
--
ALTER TABLE `emailauth`
  ADD PRIMARY KEY (`num`),
  ADD KEY `accountNum` (`accountNum`);

--
-- 테이블의 인덱스 `inquire`
--
ALTER TABLE `inquire`
  ADD PRIMARY KEY (`num`),
  ADD KEY `inquire_ibfk_1` (`requestNum`),
  ADD KEY `inquire_ibfk_2` (`responseNum`);

--
-- 테이블의 인덱스 `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`num`);

--
-- 테이블의 인덱스 `pay`
--
ALTER TABLE `pay`
  ADD PRIMARY KEY (`num`),
  ADD KEY `useHistoryNum` (`useHistoryNum`);

--
-- 테이블의 인덱스 `usehistory`
--
ALTER TABLE `usehistory`
  ADD PRIMARY KEY (`num`),
  ADD KEY `accountNum` (`accountNum`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `account`
--
ALTER TABLE `account`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 테이블의 AUTO_INCREMENT `board`
--
ALTER TABLE `board`
  MODIFY `num` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- 테이블의 AUTO_INCREMENT `customer_board`
--
ALTER TABLE `customer_board`
  MODIFY `num` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 테이블의 AUTO_INCREMENT `emailauth`
--
ALTER TABLE `emailauth`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT;

--
-- 테이블의 AUTO_INCREMENT `inquire`
--
ALTER TABLE `inquire`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 테이블의 AUTO_INCREMENT `notice`
--
ALTER TABLE `notice`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 테이블의 AUTO_INCREMENT `pay`
--
ALTER TABLE `pay`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT;

--
-- 테이블의 AUTO_INCREMENT `usehistory`
--
ALTER TABLE `usehistory`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT;

--
-- 덤프된 테이블의 제약사항
--

--
-- 테이블의 제약사항 `emailauth`
--
ALTER TABLE `emailauth`
  ADD CONSTRAINT `emailAuth_ibfk_1` FOREIGN KEY (`accountNum`) REFERENCES `account` (`num`);

--
-- 테이블의 제약사항 `inquire`
--
ALTER TABLE `inquire`
  ADD CONSTRAINT `inquire_ibfk_1` FOREIGN KEY (`requestNum`) REFERENCES `account` (`num`),
  ADD CONSTRAINT `inquire_ibfk_2` FOREIGN KEY (`responseNum`) REFERENCES `account` (`num`);

--
-- 테이블의 제약사항 `pay`
--
ALTER TABLE `pay`
  ADD CONSTRAINT `pay_ibfk_1` FOREIGN KEY (`useHistoryNum`) REFERENCES `usehistory` (`num`);

--
-- 테이블의 제약사항 `usehistory`
--
ALTER TABLE `usehistory`
  ADD CONSTRAINT `useHistory_ibfk_1` FOREIGN KEY (`accountNum`) REFERENCES `account` (`num`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
