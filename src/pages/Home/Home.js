import React from "react";
import Sidenav from "../../component/Sidenav";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import "./Home.css";
import MoodIcon from "@mui/icons-material/Mood";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import Accordionn from "../../component/Accordion";
import Barchart from "../../Charts/BarChart.jsx";
const Home = () => {
  return (
    <>
      <div className="bgcolor">
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction={"row"}>
                  <Card
                    className="cardStyle"
                    sx={{ minWidth: 49 + "%", height: 150 }}
                  >
                    <CardContent>
                      <div className="bigIconStyle">
                        <InventoryIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h7"
                        component="div"
                        sx={{ color: "#313131" }}
                      >
                        Weekly Transactions{" "}
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                        32
                      </Typography>{" "}
                    </CardContent>
                  </Card>

                  <Card
                    className="cardStyle"
                    sx={{ minWidth: 49 + "%", height: 150 }}
                  >
                    <CardContent>
                      <div className="bigIconStyle">
                        <ReceiptLongIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h7"
                        component="div"
                        sx={{ color: "#313131" }}
                      >
                        Recent Transactions
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                        32
                      </Typography>{" "}
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ minWidth: 49 + "%" }} className="cardStyle">
                    <Stack spacing={2} direction={"row"}>
                      <div className="iconStyle">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingRightCards">
                        <span className="priceTitle">203k </span>
                        <br />
                        <span className="priceSubTitle">Total Products</span>
                      </div>
                    </Stack>
                  </Card>

                  <Card sx={{ minWidth: 49 + "%" }} className="cardStyle">
                    <Stack spacing={2} direction={"row"}>
                      <div className="iconStyle">
                        <MoodIcon />
                      </div>
                      <div className="paddingRightCards">
                        <span className="priceTitle">13 </span>
                        <br />
                        <span className="priceSubTitle"> Visitors</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>

            <Box height={10} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <Barchart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <div className="paddingRightCards">
                      <span className="priceTitle"> Populer Products</span>
                    </div>
                    <Accordionn />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
