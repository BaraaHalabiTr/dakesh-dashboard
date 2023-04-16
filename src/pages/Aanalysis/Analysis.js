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
              <Grid item xs={5}>
                <Stack
                  spacing={2}
                  direction={"row"}
                  //   sx={{ margin: "0px 0px 20px 0px " }}
                >
                  <Box sx={{ width: "50%" }}>
                    <Card className="cardStyle" sx={{ height: 19 + "vh" }}>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#313131", padding: "7px 0px" }}
                        >
                          {" "}
                          ll
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                          32.890
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: "#ccd1d1" }}
                        >
                          ll
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card className="cardStyle" sx={{ height: 19 + "vh" }}>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#313131", padding: "7px 0px" }}
                        >
                          {" "}
                          ll
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                          32.890
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: "#ccd1d1" }}
                        >
                          ll
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box sx={{ width: "50%" }}>
                    <Card className="cardStyle" sx={{ height: 19 + "vh" }}>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#313131", padding: "7px 0px" }}
                        >
                          {" "}
                          ll
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                          32.890
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: "#ccd1d1" }}
                        >
                          ll
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card className="cardStyle" sx={{ height: 19 + "vh" }}>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#313131", padding: "7px 0px" }}
                        >
                          {" "}
                          ll
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                          32.890
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: "#ccd1d1" }}
                        >
                          ll
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <Card sx={{ height: 38 + "vh" }}>
                  <CardContent>
                    {" "}
                    <Hbarchart />{" "}
                  </CardContent>
                </Card>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Card sx={{ height: 40 + "vh" }}>
                    <CardContent>
                      <Geochart />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card sx={{ height: 40 + "vh" }}>
                    <CardContent>{/* <PieChart /> */}</CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Analysis;
