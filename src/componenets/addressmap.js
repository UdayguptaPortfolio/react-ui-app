import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Wrapper } from "@googlemaps/react-wrapper";
import styled from "styled-components";

const AddressMap = () => {
  const GoogleMapContainer = styled.div``;
  const ContactForm = styled.div`
    margin-top: -350px;
    margin-left: 300px;
    position: absolute;
    border: black;
  `;

  const ContainerForm = styled.div`
    border-radius: 5px;
  `;

  const FormButton = styled.button`
    background-color: rgb(15, 170, 241);
    color: white;
    align-items: center;
    padding: 10px 75px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: rgb(36, 36, 36);
    }
  `;

  const Text = styled.input`
    width: 10%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  `;
  const Email = styled.input`
    width: 10%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  `;

  const TextArea = styled.input`
    width: 10%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  `;
  return (
    <>
      <GoogleMapContainer>
        <Wrapper apiKey={"AIzaSyDA-Uc8D0Lt2BZz11q2RVHDHwqCv7LFpkg"}>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "60vh" }}
            zoom={5}
            center={{ lat: 20.5937, lng: 78.9629 }}
          >
            <Marker position={{ lat: 20.5937, lng: 78.9629 }} />
          </GoogleMap>
        </Wrapper>
        <ContactForm>
          <ContainerForm>
            <form>
              <Text
                type="text"
                id="fname"
                name="firstname"
                placeholder="Name"
                style={{ height: "40px", width: "260px" }}
              />
              <br />
              <Email
                type="email"
                name="email"
                placeholder="Email Address"
                style={{ height: "40px", width: "260px" }}
              />
              <br />
              <TextArea
                id="subject"
                name="subject"
                placeholder="Message"
                style={{ height: "80px", width: "260px" }}
              ></TextArea>
              <br />

              <FormButton type="submit">SUMBIT MESSAGE</FormButton>
            </form>
          </ContainerForm>
        </ContactForm>
      </GoogleMapContainer>
    </>
  );
};

export default AddressMap;
