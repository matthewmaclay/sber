import React from 'react';
import dynamic from 'next/dynamic'

const MediumEditor = dynamic(() => import('components/Editor'),{ ssr: false })

import { Flex } from 'bumbag';

export default function CourseList() {
  return (
		<Flex padding="major-2" flexBasis="30%" flexDirection="column">
			<Flex padding="major-2" flexBasis="30%" flexDirection="column">
				hello mambo jambo
			</Flex>
			<MediumEditor/>
		</Flex>
  	);
}
