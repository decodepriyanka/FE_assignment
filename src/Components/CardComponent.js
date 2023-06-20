import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";

const CardComponent = (props) => {
  const {
    cardTitle,
    cardSubtitle,
    spend,
    avaialable,
    expiry,
    limit,
    cardType,
  } = props;
  return (
    <Card sx={{ minWidth: "max-content", padding: "12px" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardSubtitle}
        </Typography>
        {cardType === "burner" ? (
          <>
            <Typography variant="body2" color="text.secondary">
              Expiry
            </Typography>
            <Typography variant="body2">{expiry}</Typography>
          </>
        ) : (
          <>
            <Typography variant="body2" color="text.secondary">
              Limit
            </Typography>
            <Typography variant="body2">{limit}</Typography>
          </>
        )}

        <Divider
          style={{
            margin: "8px",
          }}
        />
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Spent
          </Typography>
          <Typography variant="body2">{spend}</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Balance
          </Typography>
          <Typography variant="body2">{avaialable}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
