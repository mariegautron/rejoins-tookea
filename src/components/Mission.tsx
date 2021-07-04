import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import CheckIcon from "@material-ui/icons/Check";

interface MissionsProps {
  title: string;
  text?: string;
  missions: string[];
  technos?: string[];
  qualities: string[];
  level: string;
  possibilities?: string[];
}

export default function Mission({
  title,
  text,
  missions,
  technos,
  qualities,
  level,
  possibilities,
  ...props
}: MissionsProps) {
  return (
    <Box display="flex" flexDirection="column">
      {text && (
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
      )}
      <Typography
        variant="subtitle1"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        Missions
      </Typography>
      <List>
        {missions.map((mission) => (
          <ListItem style={{ padding: 0 }}>
            <CheckIcon style={{ marginRight: 10, maxWidth: 20 }} />
            <ListItemText primary={mission} />
          </ListItem>
        ))}
      </List>
      {technos && (
        <>
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ fontWeight: "bold" }}
          >
            Technologies
          </Typography>
          <List>
            {technos.map((techno) => (
              <ListItem style={{ padding: 0 }}>
                <CheckIcon style={{ marginRight: 10, maxWidth: 20 }} />
                <ListItemText primary={techno} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Typography
        variant="subtitle1"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        Qualités
      </Typography>
      <List>
        {qualities.map((quality) => (
          <ListItem style={{ padding: 0 }}>
            <CheckIcon style={{ marginRight: 10, maxWidth: 20 }} />
            <ListItemText primary={quality} />
          </ListItem>
        ))}
      </List>
      <Typography
        variant="subtitle1"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        Niveau demandé
      </Typography>
      <Typography variant="body1" gutterBottom>
        {level}
      </Typography>
    </Box>
  );
}
