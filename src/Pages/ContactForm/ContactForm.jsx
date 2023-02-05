import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import image from "./image.gif";
const ContactForm = () => {
  return (
    <div>
      <Grid container spacing={0} className="flex justify-center items-center">
        <Grid sm={12} md={6} item>
          <div className="m-auto">
            <img src={image} alt="" className="w-full" />
          </div>
        </Grid>
        <Grid sm={12} md={6} item fullWidth>
          <Card
            style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" className="text-center">
                Contact Us
              </Typography>
              <Typography
                gutterBottom
                color="textPrimary"
                variant="body"
                component="p"
              >
                fill up the form and our team will get back to you within 24
                hours.
              </Typography>
              <form>
                <Grid container spacing={2}>
                  <Grid xs={12} item>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      placeholder="Enter full name"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      type="email"
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      placeholder="Enter email"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      type="text"
                      id="outlined-basic"
                      label="Subject"
                      variant="outlined"
                      placeholder="Enter your subject"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      type="message"
                      rows={4}
                      multiline
                      id="outlined-basic"
                      label="message"
                      variant="outlined"
                      placeholder="Type your message"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactForm;