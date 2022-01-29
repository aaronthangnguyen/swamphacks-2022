import { Box } from "@chakra-ui/react";
import React from "react";
import AllQuestions from "./AllQuestions";
import RecommendedQuestions from "./RecommendedQuestions";

const LeftPanel = () => {
  return (
    <>
      <RecommendedQuestions />
      <AllQuestions />
    </>
  );
};

export default LeftPanel;
