import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const FooterBlock = styled.div`
  position: absolute;
  // bottom: 0;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08) inset;
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: table;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
  .logo {
    font-size: 1rem;
    // font-weight: 800;
    letter-spacing: 1px;
    text-align: center;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

/**
 * Footer가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 위에 나타나도록 해 주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

const Footer = () => {
  return (
    <>
      <Spacer />
      <FooterBlock>
        <Wrapper>
          <p className="logo">
            DEVELOPED BY
            <a href="https://github.com/Jason9789/TAB_website">
              <b> PanGeun Jeon</b>
            </a>
            <br />
            with Node.js React.js
            <br />
            HUFS CES TAB
          </p>
        </Wrapper>
      </FooterBlock>
    </>
  );
};

export default Footer;
