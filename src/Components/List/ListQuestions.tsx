import React, { useEffect, useState } from "react";
import { IDataList, IDataQuestions } from "../../@type/type";
import { Wrapper } from "../Container/style";
import { DivMenu, Up } from "./style";
interface Iprops {
  stateList: IDataQuestions[];
  Name: string;
}
const ListQuestions = (props: Iprops) => {
  const [question, setQuestion] = useState<IDataQuestions[]>([]);

  useEffect(() => {
    setQuestion(
      props.stateList.sort((a, b) =>
        a.Priority > b.Priority ? 1 : b.Priority > a.Priority ? -1 : 0
      )
    );
  }, [props]);
  return (
    <>
      {console.log(props)}
      {question.map((eel, index) => (
        <DivMenu key={index}>
          <span>{eel.Title}</span>
          <div>
            <Up />
          </div>
        </DivMenu>
      ))}
    </>
  );
};

export default ListQuestions;
