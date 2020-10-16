/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Flex, Heading, Table, Spinner } from 'bumbag';

import { useRouter } from 'next/router';
import LineChart from 'components/LineChart';
import { ComponentNewMetrics, useGetProjectQuery } from 'graphqlTypes';

export const PROJECT_QUERY = gql`
  query project($id: ID!) {
    project(id: $id) {
      id
      name
      metrics {
        data
      }
    }
  }
`;

export default function CourseList(props) {
  const {
    query: { id },
  } = useRouter();
  const { data, loading, error } = useGetProjectQuery({
    variables: {
      id: id as string,
    },
  });

  const memoizedChartsData = React.useMemo(() => {
    if (data) {
      const chartsData: Record<string, number[]> = {
        timestamp: [],
        eslintDisable: [],
        todo: [],
        fixme: [],
        any: [],
        tsIgnore: [],
        nonNullAssertion: [],
        coverage: [],
        eslint: [],
        stylelint: [],
        ts: [],
      };

      data.project?.metrics?.forEach((item) => {
        chartsData.timestamp.push(item?.data.timestamp as number);
        chartsData.eslintDisable.push(item?.data.eslintDisable as number);
        chartsData.todo.push(item?.data.todo as number);
        chartsData.fixme.push(item?.data.fixme as number);
        chartsData.any.push(item?.data.any as number);
        chartsData.tsIgnore.push(item?.data.tsIgnore as number);
        chartsData.nonNullAssertion.push(item?.data.nonNullAssertion as number);
        chartsData.coverage.push(item?.data.coverage as number);
        chartsData.eslint.push(item?.data.eslint as number);
        chartsData.stylelint.push(item?.data.stylelint as number);
        chartsData.ts.push(item?.data.ts as number);
      });
      return chartsData;
    }
  }, [data]);

  if (error) return <div>Ошибка</div>;
  if (!data || loading) return <Spinner fontSize="50px" />;
  const { project } = data;

  if (project)
    return (
      <Flex padding="major-2" flexBasis="30%" textAlign="center" flexDirection="column">
        <Heading marginBottom="major-5" use="h3">
          {project?.name}
        </Heading>

        <Table margin="auto">
          <Table.Head>
            <Table.Row>
              <Table.HeadCell>Метрика</Table.HeadCell>
              <Table.HeadCell textAlign="right">Кол-во</Table.HeadCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {Object.entries(project?.metrics[0]!.data as ComponentNewMetrics).map(([key, item]) => (
              <Table.Row key={item}>
                <Table.Cell>{key}</Table.Cell>
                <Table.Cell textAlign="right">{item}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <Flex flexWrap="wrap" padding="major-2" flexBasis="30%" justifyContent="center">
          <LineChart
            title="Any"
            labels={memoizedChartsData?.timestamp}
            data={memoizedChartsData?.any}
          />
          <LineChart
            title="Eslint"
            labels={memoizedChartsData?.timestamp}
            data={memoizedChartsData?.eslint}
          />
          <LineChart
            title="EslintDisable"
            labels={memoizedChartsData?.timestamp}
            data={memoizedChartsData?.eslintDisable}
          />
          <LineChart
            title="Coverage"
            labels={memoizedChartsData?.timestamp}
            data={memoizedChartsData?.coverage}
          />
          <LineChart
            title="Fixme"
            labels={memoizedChartsData?.timestamp}
            data={memoizedChartsData?.fixme}
          />
          <LineChart
            title="nonNullAssertion"
            labels={memoizedChartsData?.timestamp}
            data={memoizedChartsData?.nonNullAssertion}
          />
          <LineChart
            title="Stylelint"
            labels={memoizedChartsData?.timestamp}
            data={memoizedChartsData?.stylelint}
          />
          <LineChart
            title="Todo"
            labels={memoizedChartsData?.timestamp}
            data={memoizedChartsData?.todo}
          />
          <LineChart
            title="Tsignore"
            labels={memoizedChartsData?.timestamp}
            data={memoizedChartsData?.tsIgnore}
          />
        </Flex>
      </Flex>
    );
}
