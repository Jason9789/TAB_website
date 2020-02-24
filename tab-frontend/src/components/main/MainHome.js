import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import { Helmet } from 'react-helmet-async';

import Contents from './Contents';

import '../../App.css';

// 이미지
import study from '../../images/study.svg';
import tent from '../../images/tent.svg';
import picnic from '../../images/picnic.svg';
import pt from '../../images/pt.svg';

import job from '../../images/job.png';
import army from '../../images/swSoldier.png';
import hackathon from '../../images/hackathon.png';
import contest from '../../images/whale.png';
import acm from '../../images/acm.png';
import gcp from '../../images/gcpug.png';
import hanium from '../../images/hanium.png';
import hufo from '../../images/huformation.png';

const MainHomeBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const MainHomeContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const annual_events = [
  {
    id: 1,
    title: '스터디',
    svg: study,
    description:
      '학회원들끼리 관심있는 주제로 함께 공부하거나 세미나를 진행합니다. ex) 기초프로그래밍, 깃, 인공지능, 블록체인',
  },
  {
    id: 2,
    title: '야유회',
    svg: picnic,
    description:
      '봄에 서울 올림픽 공원에서 졸업한 학회 선배님들과 함께 네트워킹 할 수 있는 야유회를 개최합니다.',
  },
  {
    id: 3,
    title: '발표',
    svg: pt,
    description:
      '개인 혹은 팀으로 진행한 프로젝트, 개인이 공부한 주제를 갖고 학기 중에 발표하는 기회를 갖습니다.',
  },
  {
    id: 4,
    title: '캠핑',
    svg: tent,
    description:
      '여름과 가을 사이 난지캠핑장에서 MT를 진행하여 학회원 간의 친목도모 하는 기회를 갖습니다.',
  },
];

const achievements = [
  {
    id: 1,
    title: '진로',
    svg: job,
    description: '학회출신의 선배들께서 이름난 기업에서 일하고 계십니다.',
  },
  {
    id: 2,
    title: '개발특기병',
    svg: army,
    description: '전문연구요원 및 육해공군 특기병으로 만기전역',
  },
  {
    id: 3,
    title: '해커톤',
    svg: hackathon,
    description:
      '학회원들이 팀을 구성하여 네이버AI해커톤에 참가하여 우수한 성적을 거뒀습니다.',
  },
  {
    id: 4,
    title: '개발대회',
    svg: contest,
    description:
      '팀을 구성하여 웨일 확장앱 개발대회에 참가했습니다. <스톡인포>',
  },
  {
    id: 5,
    title: '알고리즘대회',
    svg: acm,
    description: '팀을 구성하여 ACM-ICPC 알고리즘 대회 참가했습니다.',
  },
  {
    id: 6,
    title: '한이음 입상',
    svg: hanium,
    description:
      '한이음 ICT 공모전에 학회원이 팀을 꾸려 나가서 우수한 성적을 거뒀습니다.',
  },
  {
    id: 7,
    title: 'GCP 우승',
    svg: gcp,
    description: '구글 클라우드 플랫폼 해커톤 대회에서 우승을 했습니다.',
  },
  {
    id: 8,
    title: '학식 챗봇 개발',
    svg: hufo,
    description:
      '카카오톡 플러스친구를 이용한 한국외대 학식 정보 제공뿐만 아니라 도서관 좌석정보도 제공합니다.<카톡 플친: 훕포메이션>',
  },
];

const MainHome = () => {
  return (
    <MainHomeBlock>
      <Helmet>
        <title>TAB</title>
      </Helmet>
      {/* About TAB */}
      <PostHead>
        <h1>About TAB</h1>
      </PostHead>
      <MainHomeContent
        dangerouslySetInnerHTML={{
          __html:
            '<b>TAB</b>은 <b>Talking and Books</b>의 약자입니다. ' +
            '서로간에 이야기를 나누며 유대감을 형성하고 책을 통해 지식을 쌓아가자는 뜻으로 1985년 9월 7일 토요일부터 처음 모임이 시작되었습니다. ' +
            '또한 Key Board 의 Tab 키 처럼 순간순간 자신을 한단계 도약시켜 나가자는데 의의가 있습니다. ' +
            '대학 4년의 정해진 기간동안 알찬시간을 보낼 수 있도록 실력있는 선배님이 진행하는 정기학회세미나와 프로젝트, 방학스터디등의 학술모임과 MT, 야유회 방중모임등의 친목모임이 이루어 지고 있습니다. ' +
            '더욱이 TAB 은 재학생뿐만아니라 졸업하신 선배님들과도 주기적인 모임을 가지면서 많은것을 보고 배울 수 있는 기회가 무한합니다. ' +
            '알찬 대학생활을 보내시고 싶은 학우분들은 TAB을 두드려 주십시요. <br /><br /><br /><br />',
        }}
      />

      {/* 연간 행사 */}
      <PostHead>
        <h1>Annul Event</h1>
      </PostHead>
      <MainHomeContent>
        <Contents id="annual_events" items={annual_events} />
        <br />
        <br />
        <br />
        <br />
      </MainHomeContent>

      {/* 성과 */}
      <PostHead>
        <h1>Achievements</h1>
      </PostHead>
      <MainHomeContent>
        <Contents id="achievements" items={achievements} />
        <br />
        <br />
        <br />
        <br />
      </MainHomeContent>

      {/* 지원 */}
      <PostHead>
        <h1>Apply</h1>
      </PostHead>
      <MainHomeContent dangerouslySetInnerHTML={{ __html: '<p>지원</p>' }} />
    </MainHomeBlock>
  );
};

export default MainHome;
