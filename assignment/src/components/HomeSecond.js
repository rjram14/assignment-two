import React from "react";
import { Avatar, Container } from "@material-ui/core";
import "../index.css";

const HomeSecond = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 700,
          position: "absolute",
          top: "97%",
          left: "20%",
        }}
        className="col-sm"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div>Format</div>
          <div>Genre</div>
          <div>Setting</div>
          <div>Runtime</div>
          <div>Status</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            fontSize: "20px",
          }}
        >
          <div>Feature Film</div>
          <div>Science Fiction</div>
          <div>Future </div>
          <div>143 mins</div>
          <div>In Progress</div>
        </div>
      </div>

      <div
        style={{
          width: 700,
          height: 100,
          background: "#F2F0E4",
          padding: "20px",
          marginLeft: "20%",
          marginRight: "20%",
          textAlign: "initial",
          justifyContent: "start",
          position: "relative",
          top: "162%",
        }}
      >
        <div>The project us curretnly in post-production.</div>
      </div>
      <div
        style={{
          width: "80%",
          height: 700,
          background: "#231F20",
          marginLeft: "10%",
          marginRight: "20%",
          textAlign: "initial",
          justifyContent: "start",
          position: "relative",
          top: "172%",
          color: "white",
          justifyContent: "space-between",
        }}
      >
        <div>Creative Team</div>
        <div
          className="d-flex ml-5"
          style={{ width: 300, height: 400, justifyContent: "space-between" }}
        >
          <Avatar alt="" src="/static/images/avatar/1.jpg"></Avatar>
          <div className="float-right">
            <div>Producer</div>
            <div>Fiona Gillies</div>
            <p>
              Fiona Gillies is an actress and producer, known for City Slacker
              (2012), Some Sweet Oblivious Antidote (2018) and Mother Love
              (1989).
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeSecond;
