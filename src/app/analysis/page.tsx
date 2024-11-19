"use client";

import type React from "react";
import { useState } from "react";
import {
  Container,
  Card,
  Title,
  Button,
  FileInput,
  Image,
  Stack,
  Text,
  Slider,
  Code,
  Select,
  Tabs,
  Tab,
  Grid,
  Group,
} from "@mantine/core";

const DetectionDashboard: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [confidenceThreshold, setConfidenceThreshold] = useState<number>(50);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [predictions, setPredictions] = useState<string | null>(null);

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    // Logic to handle model prediction can go here
    console.log("Image uploaded for detection:", selectedFile);
    console.log("Selected Model:", selectedModel);
    console.log("Confidence Threshold:", confidenceThreshold);
    // Mock prediction response
    setPredictions(`
      "predictions": [
        {
          "x": 243,
          "y": 254.5,
          "width": 404,
          "height": 275,
          "confidence": 0.878,
          "class": "fetus"
        }
      ]
    `);
  };

  return (
    <Container
      size="xl"
      mt={1}
      style={{ height: "100vh", backgroundColor: "#333" }}
    >
      <Grid>
        {/* Left side - Controls */}
        <Grid.Col
          span={3}
          style={{
            height: "90vh",
            backgroundColor: "#2b2b2b",
            padding: "20px",
            borderRadius: "9px",
          }}
        >
          <Stack spacing="md" mt={0}>
            <Title order={5} style={{ color: "#ffffff" }}>
              Get your result here!
            </Title>
            <FileInput
              placeholder="Select an image or video file"
              label="Upload Image"
              onChange={handleFileChange}
              accept="image/*,video/*"
              style={{ color: "#ffffff" }}
            />
            <Select
              label="Choose Model"
              placeholder="Select model for prediction"
              style={{ color: "#ffffff" }}
              data={[
                {
                  value: "fetus-detection-6",
                  label: "Fetus Detection Model v6",
                },
                {
                  value: "fetus-detection-5",
                  label: "Fetus Detection Model v5",
                },
              ]}
              value={selectedModel}
              onChange={setSelectedModel}
              required
            />
            <Text style={{ color: "#ffffff" }}>Confidence Threshold</Text>
            <Slider
              value={confidenceThreshold}
              onChange={setConfidenceThreshold}
              min={0}
              max={100}
              style={{ color: "#00ffcc" }}
            />
            <Button
              fullWidth
              mt="md"
              onClick={handleUpload}
              style={{ backgroundColor: "#33c", color: "#fff" }}
            >
              Upload for Detection
            </Button>
          </Stack>
        </Grid.Col>

        {/* Right side - Image and Predictions */}
        <Grid.Col span={9}>
          <Group
            position="center"
            mt="xl"
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {imageUrl ? (
              <Card
                shadow="lg"
                radius="md"
                style={{
                  width: "80%",
                  height: "100%",
                  position: "relative",
                  backgroundColor: "#333",
                }}
              >
                <Image
                  src={imageUrl}
                  alt="Selected File"
                  fit="contain"
                  height="100%"
                />
                <Code
                  block
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    color: "#00ffcc",
                    backgroundColor: "#2b2b2b",
                  }}
                >
                  {predictions ? predictions : "No predictions available."}
                </Code>
              </Card>
            ) : (
              <Text style={{ color: "#ffffff" }}>
                Please upload an image to see predictions.
              </Text>
            )}
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default DetectionDashboard;
