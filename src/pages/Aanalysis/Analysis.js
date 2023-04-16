import React from "react";
import Sidenav from "../../component/Sidenav";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import "./Analysis.css";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Geochart } from "../../Charts/Geo";
import { Hbarchart } from "../../Charts/Hbarchart";
const Analysis = () => {
  return (
    <>
      <div className="bgcolor">
        <Sidenav />

        <Box sx={{ display: "flex" }}>
          <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2}>
                  <Stack direction={"row"} spacing={2}>
                    <Stack spacing={2}>
                      <Card className="cardStyle" sx={{ height: 19 + "vh" }}>
                        <CardContent> 1,7000 Vistis </CardContent>
                      </Card>
                      <Card className="cardStyle" sx={{ height: 19 + "vh" }}>
                        <CardContent> 3.001 Page Views</CardContent>
                      </Card>
                    </Stack>

                    <Stack spacing={2}>
                      <Card className="cardStyle" sx={{ height: 19 + "vh" }}>
                        <CardContent> 1,7000 Vistis </CardContent>
                      </Card>
                      <Card className="cardStyle" sx={{ height: 19 + "vh" }}>
                        <CardContent> 3.001 Page Views</CardContent>
                      </Card>
                    </Stack>
                  </Stack>

                  <Grid container spacing={2}>
                    <Grid item xs={9.7}>
                      <Card sx={{ height: 60 + "vh" }}>
                        <CardContent>
                          <Geochart />
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Analysis;
