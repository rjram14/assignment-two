import React from "react";
import Divider from "@material-ui/core/Divider";
import CreateIcon from "@material-ui/icons/Create";
import "../index.css";
import { Avatar, Container } from "@material-ui/core";
import HomeImage from "../images/homebg.png";
import HomeSecond from "./HomeSecond";
import { isMobile } from "react-device-detect";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div class="row mt-2 ml-2 ">
        <div class="col-sm-2 " style={{ background: "white" }}>
          <div
            className="mb-2"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "initial",
            }}
          >
            <div style={{ color: "#000000" }}>TYRANNY OF FINGER FOOD</div>
            <div style={{ fontSize: "12px", paddingBottom: "5px" }}>
              Smash id #000184
            </div>
            <div style={{ fontSize: "14px", justifyContent: "center" }}>
              Colour Scheme
              <span>
                {" "}
                <button
                  type="button"
                  class="btn btn-secondary btn-circle btn-sm"
                ></button>
                <button
                  type="button"
                  class="btn btn-dark btn-circle btn-sm"
                ></button>
              </span>
            </div>
          </div>
          <Divider />

          <div
            class="nav flex-column  nav-pills mt-2 mb-4"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
            style={{}}
          >
            <a
              class="nav-link alert alert-secondary text-left "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Cover{" "}
              <span className="float-right">
                <CreateIcon />
              </span>
            </a>
            <a
              class="nav-link alert alert-secondary text-left "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Basic Information{" "}
            </a>
            <a
              class="nav-link alert alert-secondary text-left "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Creative Team{" "}
            </a>
            <a
              class="nav-link alert alert-secondary text-left "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Description{" "}
            </a>
            <a
              class="nav-link alert alert-secondary text-left "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Cast Members{" "}
            </a>
            <a
              class="nav-link alert alert-secondary text-left "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Project Artwork{" "}
            </a>
            <a
              class="nav-link alert alert-secondary text-left "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Project Videos{" "}
            </a>
            <a
              class="nav-link alert alert-secondary text-left "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Comparable Projects{" "}
            </a>
            <a
              class="nav-link alert alert-secondary text-left "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Cast Finance Plan{" "}
            </a>
            <a
              class="nav-link alert alert-secondary text-left "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Budget{" "}
            </a>
            <a
              class="nav-link alert alert-secondary text-left "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Sales Estimate{" "}
            </a>
            <a
              class="nav-link alert alert-secondary text-left "
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Other Documents{" "}
            </a>

            <Divider
              style={{
                height: "2px",
                color: "#B8B8B8",
                marginTop: "30%",
                marginBottom: "10px",
              }}
            />

            <button
              style={{ background: "#E2B7FF", border: "2px solid black" }}
            >
              share project
            </button>

            <div
              className="float-left"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "initail",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              <Avatar className="mr-2"></Avatar>{" "}
              <span className="ml-3 mt-2">Ana Dias</span>
            </div>
          </div>
        </div>
        <div class="col-sm-10">
          <div
            class="tab-content"
            id="v-pills-tabContent"
            style={{
              backgroundImage: isMobile ? "" : `url(${HomeImage})`,
              width: "100%",
              backgroundSize: "cover",
              height: "700px",
            }}
          >
            <div
              style={{
                width: 700,
                height: 340,
                background: "#B53E3E",
                justifyContent: "center",
                position: isMobile ? "" : "absolute",
                top: "37%",
                left: "20%",
              }}
            >
              <div
                className="test-home"
                style={{
                  justifyContent: "center",
                  color: "#FFFDF4",
                  position: isMobile ? "" : "absolute",
                  top: "45%",
                  left: "22%",
                }}
              >
                <span class="font-weight-light">FROM PRODUCER</span>
                <span
                  className="test-home-down ml-2"
                  style={{ fontSize: "30px" }}
                >
                  Fiona Gillies
                </span>
              </div>
              <div
                style={{
                  justifyContent: "center",
                  color: "#FFFDF4",
                  fontSize: "55px",
                  fontFamily: "Hitchcock",
                  position: isMobile ? "" : "absolute",
                  top: "55%",
                  left: "32%",
                }}
              >
                BETTER CALL SAUL
              </div>
            </div>
            <Container>
              <Row
                className="justify-content-md-center"
                style={{ position: "absolute", top: "70%", left: "26%" }}
              >
                <Col md="auto">
                  {" "}
                  <span class="font-weight-light">FROM PRODUCER</span>
                  <span
                    className="test-home-down ml-2 font-weight-light"
                    style={{ fontSize: "30px" }}
                  >
                    Fiona Gillies
                  </span>
                </Col>
                <Col md="auto">
                  {" "}
                  <span class="font-weight-light">FROM PRODUCER</span>
                  <span
                    className="test-home-down ml-2 font-weight-light"
                    style={{ fontSize: "30px" }}
                  >
                    Fiona Gillies
                  </span>
                </Col>
              </Row>
            </Container>
            <div
              style={{
                width: 700,
                height: 230,
                background: "#EB9635",
                position: isMobile ? "" : "absolute",
                top: "75%",
                left: "20%",
              }}
            >
              <div
                style={{
                  padding: "25px",
                  justifyContent: "start",
                  textAlign: "initial",
                }}
              >
                At the landing site of the shuttle Ares III, Acidalia Planitia,
                Mars, at a time in the near future, the crew of the Hermes;
                including Commander Melissa Lewis (Jessica Chastain), botanist
                Mark Watney (Matt Damon), IT guru Beth Johanssen (Kate Mara),
                pilot Rick Martinez (Michael Peña), flight surgeon Chris Beck
                (Sebastian Stan), and navigator and chemist Alex Vogel (Aksel
                Hennie); are gathering samples before re-entering their living
                facility, the HAB.
              </div>
              <div
                style={{ marginBottom: "0px" }}
                className="d-flex ml-4 flex-container flex-start "
              >
                <div
                  className="mr-5"
                  style={{ background: "#DB8619", borderRadius: "40px" }}
                >
                  Action/Adventure
                </div>
                <div
                  className="mr-5"
                  style={{ background: "#DB8619", borderRadius: "40px" }}
                >
                  Drama
                </div>
                <div
                  className="mr-5"
                  style={{ background: "#DB8619", borderRadius: "40px" }}
                >
                  Feature film
                </div>
              </div>
            </div>
            <HomeSecond />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
