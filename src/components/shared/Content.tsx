"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import NewsData from "./NewsData";
import ResourcesData from "./ResourcesData";
import SavedData from "./SavedData";
const Content = ({ news, resources, saved }: any) => {
  const [newsData, setNews] = useState(false);
  const [resourcesData, setResources] = useState(true);
  const [savedData, setSaved] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex-center gap-6">
        {news?.length === 0 && (
          <Button
            onClick={() => {
              setNews(true);
              setResources(false);
              setSaved(false);
            }}
          >
            Resources
          </Button>
        )}
        <Button
          onClick={() => {
            setResources(true);
            setNews(false);
            setSaved(false);
          }}
        >
          Resources
        </Button>
        <Button
          onClick={() => {
            setSaved(true);
            setResources(false);
            setNews(false);
          }}
        >
          Saved
        </Button>
      </div>
      <div>
        {newsData && <NewsData data={news} />}
        {resourcesData && <ResourcesData data={resources} />}
        {savedData && <SavedData />}
      </div>
    </div>
  );
};

export default Content;
