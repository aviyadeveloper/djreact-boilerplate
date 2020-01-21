import React, { useState, useEffect } from "react";
import { Lecture } from "../../../types/Lectures";
import { getLecturesList } from "../../../actions/lecturesActions";
import List from "../../Layout/List";
const Lectures: React.FC = () => {
  const [lectures, setLectures] = useState<Lecture[]>([]);

  useEffect(() => {
    getLecturesList().then((lectures: Lecture[]) => setLectures(lectures));
  }, []);
  return (
    <div className="module-wrapper lectures">
      <h2 className="module-title">Lectures Module</h2>
      <List moduleName="lectures" items={lectures} />
    </div>
  );
};

export default Lectures;
