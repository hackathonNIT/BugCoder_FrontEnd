import React from "react";
import { useParams } from "react-router-dom";
import { Navigate, Route } from 'react-router-dom';
import Issue from "./Issue";
const IssuePage=(props)=>{
  const { issueId } = useParams();
  console.log(String(issueId))
  return(
    <Issue/>
  );
}
export default IssuePage;