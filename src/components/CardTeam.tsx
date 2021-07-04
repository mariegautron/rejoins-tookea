import { Box, Typography } from "@material-ui/core";

interface CardEquipeProps {
  img: any;
  name: string;
  jobs: string;
  cursus: string;
  description: string;
}

const CardEquipe = ({
  img,
  name,
  jobs,
  cursus,
  description,
}: CardEquipeProps) => {
  return (
    <Box
      p={4}
      bgcolor="primary.light"
      borderRadius={10}
      display="flex"
      marginBottom={4}
      width="100%"
    >
      <img
        src={img}
        alt="logo"
        style={{ borderRadius: "100%", maxWidth: 50, maxHeight: 50 }}
      />
      <Box paddingLeft={4}>
        <Typography
          variant="subtitle2"
          style={{ marginBottom: 20 }}
          color="primary"
        >
          {name}
        </Typography>
        <Typography
          variant="subtitle2"
          style={{ marginBottom: 20 }}
          color="primary"
        >
          {jobs}
        </Typography>
        <Typography
          variant="body2"
          style={{ marginBottom: 20, fontStyle: "italic" }}
          color="textPrimary"
        >
          {cursus} (en 2020-2021)
        </Typography>
        <Typography variant="body2" color="textPrimary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardEquipe;
