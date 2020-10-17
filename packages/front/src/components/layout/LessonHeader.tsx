import React from "react";
import { PageWithHeader, TopNav, Button, Image, Box, Text } from "bumbag";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Flex } from "bumbag";
import { Icon } from "bumbag";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const HeaderLink = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
  ${({active})=> {

      if (!active) return 'opacity: 0.6;' 
  } }
  & > a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.5;
  & > a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StyledPageWithHeader = styled(PageWithHeader)`
  display: flex;
  flex-direction: column;

  & > .bb-PageWithHeaderContent {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    & > .bb-Box {
      flex-grow: 1;
    }
  }
`;

const LINKS = [
  {
    name: "Описание",
    path: "/author/lesson/[id]/description",
  },
  {
    name: "Цели",
    path: "/author/lesson/[id]/targets",
  },
  {
    name: "Нагрузка на ученика",
    path: "/author/lesson/[id]/load",
  },
  {
    name: "Опросы и задания",
    path: "/author/lesson/[id]/quiz",
  },
  {
    name: "Проверка",
    path: "/author/lesson/[id]/check",
  },
];

interface Props {
  id?: string;
  activeTab: string;
}
const getPath = (path: string, id: string) => path.replace("[id]", id);
const LessonHeader: React.FC<Props> = ({ children, id }) => {
  const router = useRouter();

  return (
    <StyledPageWithHeader
      headerHeight="72px"
      header={
        <Flex
          boxShadow="0px 4px 24px rgba(0, 0, 0, 0.12)"
          flexDirection="column"
        >
          <Flex
            paddingLeft="56px"
            borderBottom="1px solid #F2F2F2"
            height="27px"
          >
            <BackButton>
              <Link href="/author">
                <>
                  <Icon
                    marginRight="10px"
                    aria-label="Settings"
                    icon={faArrowLeft}
                    type="font-awesome"
                  />
                  Все уроки
                </>
              </Link>
            </BackButton>
          </Flex>
          <TopNav paddingLeft="56px" minHeight="44px" height="44px">
            <TopNav.Section>
              {LINKS.map((i) => (
                <TopNav.Item marginRight="32px">
                  <HeaderLink active={i.path === router.pathname}>
                    <Link href={getPath(i.path, id)}>{i.name}</Link>
                  </HeaderLink>
                </TopNav.Item>
              ))}
            </TopNav.Section>
          </TopNav>
        </Flex>
      }
      border="default"
    >
      {children}
    </StyledPageWithHeader>
  );
};
export default LessonHeader;
