import { Card as RawCard, CardContent, Typography, Box } from "@mui/material";

interface CardProps {
  title: string;
  subtitle: string;
  info?: string;
}

export const Card = ({ title, subtitle, info }: CardProps) => {
  return (
    <RawCard
      sx={{
        width: 200,
        height: 110,
        borderRadius: 2,
        boxShadow: 3,
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: 6,
          transform: "scale(1.02)",
        },
      }}
      aria-label="card com valores do relatório"
    >
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          textAlign="center"
          sx={{
            transition: "all 0.3s ease",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ transition: "color 0.3s ease" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ transition: "color 0.3s ease" }}
          >
            {subtitle}
          </Typography>
          {info && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ transition: "color 0.3s ease" }}
            >
              {info}
            </Typography>
          )}
        </Box>
      </CardContent>
    </RawCard>
  );
};
