import { AddBusiness, AssignmentInd, AutoStories, Home, ModeNight, PeopleAlt, Settings, Workspaces } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

export default function Slidebar({mode, setMode}) {
  return (
    <Box 
    flex={1} 
    p={2} 
    sx={{ display : { xs:"none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a"href='#home'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href='#home'>
              <ListItemIcon>
                <AutoStories/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href='#home'>
              <ListItemIcon>
                <Workspaces/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href='#home'>
              <ListItemIcon>
                <AddBusiness/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href='#home'>
              <ListItemIcon>
                <PeopleAlt/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href='#home'>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href='#home'>
              <ListItemIcon>
                <AssignmentInd/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href='#home'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
        </Box>
  )
}
