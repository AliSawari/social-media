import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import UploadImageBtn from "./UploadImageBtn";
import CaptureImageBtn from "./CaptureImageBtn";
import SwitchCameraBtn from "./SwitchCameraBtn";
import StoryToolIcons from "./StoryToolIcons";
import { Stage, Layer, Line, Text } from 'react-konva';
import URLImage from "./URLImage";
import httpClient from '../../../api/client'
import { base64ToBlob, blobToBase64 } from "base64-blob"
import { useGetUserId } from '../../../hooks/useGetUserId'
const AddStoryForm = ({ closeModal }) => {

  const { id } = useGetUserId();
  const webcamRef = useRef(null);
  const isDrawing = React.useRef(false);
  const [state, setState] = useState({
    mode: "draw"
  });
  const [textSettings, setTextSettings] = useState({
    size: 20,
    color: "#000"
  });

  const [drawSettings, setDrawSettings] = useState({
    width: 2,
    color: "#000"
  });
  const [facingMode, setFacingMode] = useState("user");
  const [image, setImage] = useState(null);
  const [lines, setLines] = useState([]);
  const [texts, setTexts] = useState([]);
  const stageRef = useRef();


  const handleCaptureImage = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
    },
    [webcamRef]
  );


  const handleSwitchCamera = () => {
    setFacingMode(prevState => prevState === "user" ? "enviroment" : "user");
  }


  const videoConstraints = {
    aspectRatio: 0.6666666667,
    facingMode
  }


  const handleChangeDrawWidth = (width) => {
    setDrawSettings((state) => ({ ...state, width }));
  }

  const handleUndoDraw = () => {
    setLines(prevState => prevState.slice(0, prevState.length - 1));
  }

  const handleUndoText = () => {
    setTexts(prevState => prevState.slice(0, prevState.length - 1));

  }

  const handleChangeDrawColor = (color) => {
    setDrawSettings((state) => ({ ...state, color }));
  }

  const handleChangeTextSize = (size) => {
    setTextSettings(state => ({ ...state, size }));

  }


  const handleChangeTextColor = (color) => {
    setTextSettings(state => ({ ...state, color }));
  }


  const handleMouseDown = (e) => {
    if (state.mode == "draw") {
      isDrawing.current = true;
      const pos = e.target.getStage().getPointerPosition();
      setLines([...lines, { tool: "pen", points: [pos.x, pos.y], stroke: drawSettings.color, width: drawSettings.width }]);
    }
  };

  const handleMouseMove = (e) => {
    if (state.mode === "draw") {
      // no drawing - skipping
      if (!isDrawing.current) {
        return;
      }
      const stage = e.target.getStage();
      const point = stage.getPointerPosition();
      let lastLine = lines[lines.length - 1];
      // add point
      lastLine.points = lastLine.points.concat([point.x, point.y]);
      // replace last
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleClick = (e) => {
    if (state.mode === "text") {
      const prompt = window.prompt("Enter your text:");
      const pos = e.target.getStage().getPointerPosition();
      setTexts(prevTexts => [...prevTexts, { value: prompt, points: [pos.x, pos.y], fill: textSettings.color, size: textSettings.size }])
    }

  }


  const renderLines = () => {
    return lines.map((line, i) => (
      <Line
        key={i}
        points={line.points}
        stroke={line.stroke}
        strokeWidth={line.width}
        tension={.5}
        lineCap="square"
      />
    ))
  }

  const renderTexts = () => {
    return texts.map((text, i) => (
      <Text
        key={i}
        fill={text.fill}
        text={text.value}
        x={text.points[0]}
        y={text.points[1]}
        fontSize={text.size}
      />
    ))
  }



  const handleClickAddStory = async () => {
    try {
      const uri = stageRef.current.toDataURL();
      const blobImage = await base64ToBlob(uri);
      const formData = new FormData();
      formData.append("image", blobImage);
      formData.append("id", id);

      await httpClient.post("/stories/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setImage(null);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="w-full h-full relative">
        {image === null ?
          <>
            <Webcam
              audio={false}
              screenshotFormat="image/jpeg"
              forceScreenshotSourceSize="true"
              allowFullScreen
              ref={webcamRef}
              className="h-128 w-full object-cover"
              videoConstraints={videoConstraints}
            />
            <div className="w-full h-20 absolute bottom-5 flex justify-between items-center px-5">
              <UploadImageBtn setImage={setImage} />
              <CaptureImageBtn captureImage={handleCaptureImage} />
              <SwitchCameraBtn switchCamera={handleSwitchCamera} />
            </div>
          </> :
          <>
            <button className="auth-button w-40 absolute z-50 bottom-0 right-5" onClick={handleClickAddStory}>Add Story</button>
            <Stage
              width={"440"}
              height={"650"}
              onMouseDown={handleMouseDown}
              onMousemove={handleMouseMove}
              onMouseup={handleMouseUp}
              onClick={handleClick}
              ref={stageRef}
              style={{ cursor: state.mode === "text" ? "text" : "crosshair" }}
            >
              <Layer>
                <URLImage src={image} x={0} y={0} width="440" height="650" />
                {renderTexts()}
                {renderLines()}
              </Layer>
            </Stage>
            <StoryToolIcons
              drawWidth={drawSettings.width}
              drawColor={drawSettings.color}
              changeDrawWidth={handleChangeDrawWidth}
              changeDrawColor={handleChangeDrawColor}
              undoDraw={handleUndoDraw}
              state={state}
              setState={setState}
              changeTextColor={handleChangeTextColor}
              textColor={textSettings.color}
              textSize={textSettings.size}
              changeTextSize={handleChangeTextSize}
              undoText={handleUndoText}
            />

          </>
        }
      </div>
    </>
  );
};

export default AddStoryForm;
