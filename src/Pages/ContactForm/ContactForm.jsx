import React, { useRef } from "react";
import Lottie from "lottie-react";
import Contact from "./contact.json";

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
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
    <section
      id="contact"
      className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <Typography
        gutterBottom
        variant="h2"
        className="text-center text-[20px] lg:text-4xl font-[700] mb-10 drop-shadow-md"
        style={{ fontWeight: "700", fontFamily: "monospace", fontSize: "36px" }}
      >
        Want to talk about your project?
      </Typography>
      <Grid
        container
        spacing={0}
        className="flex justify-between items-center "
      >
        <Grid sm={12} md={6} item>
          <Lottie className="w-10/12" animationData={Contact} loop={true} />
        </Grid>
        <Grid sm={12} md={6} item fullWidth>
          <Card
          className="shadow-none drop-shadow-none"
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
