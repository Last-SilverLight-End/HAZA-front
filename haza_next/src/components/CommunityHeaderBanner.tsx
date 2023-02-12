import { MainCategory } from "@/libs/backend/boardRequest"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState } from "react"

export function CommunityHeaderBanner () {
  const [headerList , getHeaderList] = useState<MainCategory[]>();
    
  return (
    <>
     <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>One</Tab>
    <Tab>Two</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </>
  )
} 