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
    <div className="lectures__lecture__container fadeIn">
      {lecture ? (
        <YouTube
          className="lectures_lecture_video"
          videoId={lecture.videoID}
          opts={youTubeOpts}
        ></YouTube>
      ) : (
        <ArticleLoader />
      )}
    </div>
  );
};

export default LectureDetail;
