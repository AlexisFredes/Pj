import React, { useState } from 'react';
import {
  Box,
  Tab,
  Tabs } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const BasicTabs = (props) => {
  const { tabs, sizeTabs } = props
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => setValue(newValue);
  
  return (
    <Box sx={{ width: '100%' }}>
      <Box mb={2}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="m0">
          {tabs.map((tab, i) => 
            <Tab label={tab.title} {...a11yProps(i)} key={tab.title} 
              sx={{ ml: 2, fontSize: sizeTabs, fontWeight: value !== i && 'light', textTransform: 'none'}}/>    
          )}
        </Tabs>
      </Box>
      <Box>
        {tabs.map((tab, i) => 
          <TabPanel className="p0" value={value} index={i} key={tab.title}>{tab.content}</TabPanel> 
        )}
      </Box>
    </Box>
  );
}
