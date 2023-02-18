import React, { useRef } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import image from "./image.gif";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "thebrightfuture",
        "template_igpf148",
        form.current,
        "k1X9xhaxBhNtWQbrr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="pt-20">
      <Typography
        gutterBottom
        variant="h5"
        className="text-center"
        style={{ fontWeight: "700", fontFamily: "monospace", fontSize: "52px" }}
      >
        Want to talk about your project?
      </Typography>
      <Typography
        gutterBottom
        color="textPrimary"
        variant="body"
        component="p"
        style={{
          color: "#3B80B8",
          textAlign: "center",
          fontFamily: "monospace",
          fontSize: "20px",
        }}
      >
        Fill up the form and our team will get back to you within 24 hours.
      </Typography>
      <Grid container spacing={0} className="flex justify-center items-center ">
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
              <Typography
                gutterBottom
                variant="h5"
                className="text-center font-bold"
                style={{
                  fontWeight: "700",
                  fontFamily: "monospace",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  fontSize: "32px",
                }}
              >
                Contact Us
              </Typography>

              <form ref={form} onSubmit={sendEmail}>
                <Grid container spacing={2}>
                  <Grid xs={12} item>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      placeholder="Enter full name"
                      name="user_name"
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
                      name="user_email"
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
                      name="message"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: "#fe9105" }}
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
    </section>
  );
};

export default ContactForm;
