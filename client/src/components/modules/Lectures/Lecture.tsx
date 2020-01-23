import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import YouTube from "react-youtube";

import { getLecture } from "../../../actions/lecturesActions";
import { Lecture } from "../../../types/Lectures";
import ArticleLoader from "../../animations/ArticleLoader";

interface LectureParams {
  id: string;
}

const LectureDetail: React.FC<RouteComponentProps<LectureParams>> = props => {
  const [lecture, setLecture] = useState<Lecture>();
  const [youtubeLoaded, setYoutubeLoaded] = useState<Boolean>(false);

  const id: string = props.match.params.id;

  useEffect(() => {
    getLecture(id).then((res: Lecture) => {
      setLecture(res);
    });
  }, []);

  let youTubeOpts = {
    height: "360",
    width: "640"
  };

  return (
    <div>
      {lecture ? (
        <div className="lectures__lecture__container fadeIn">
          <div className={youtubeLoaded ? "ready fadeIn" : "loading fadeIn"}>
            <YouTube
              className="lectures__lecture__video"
              videoId={lecture.videoID}
              opts={youTubeOpts}
              onReady={() => {
                setYoutubeLoaded(true);
              }}
            ></YouTube>
            <div className="lectures__lecture__info">
              <h4 className="lectures__lecture__title">{lecture.title}</h4>
              <p className="lectures__lecture__description">
                {lecture.description}
              </p>
              <p className="lectures__lecture__publication-date">
                {lecture.publicationDate}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <ArticleLoader />
      )}
    </div>
  );
};

export default LectureDetail;
