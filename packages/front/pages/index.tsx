import React, {useEffect} from 'react';
import dynamic from 'next/dynamic'

const MediumEditor = dynamic(() => import('components/Editor'),{ ssr: false })

import { Flex, Heading, Spinner, Button } from 'bumbag';

import Link from 'next/link';
import { useGetProjectsQuery } from 'graphqlTypes';

export default function CourseList() {

useEffect(()=>{
  
},[])
  return (
		<Flex padding="major-2" flexBasis="30%" flexDirection="column">
			<Flex padding="major-2" flexBasis="30%" flexDirection="column">
				hello mambo jambo
			</Flex>
			<MediumEditor/>
		</Flex>
  	);
}
