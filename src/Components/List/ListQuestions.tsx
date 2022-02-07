import React, { useEffect, useState } from "react";
import { IDataList, IDataQuestions } from "../../@type/type";
import { Wrapper } from "../Container/style";
import { DivMenu, Up, Dowun } from "./style";
interface Iprops {
  stateList: IDataList[];
  Name: string;
}
const ListQuestions = (props: Iprops) => {
  const [question, setQuestion] = useState<IDataQuestions[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    props.stateList.length &&
      setQuestion(
        props.stateList[0].Questions.sort((a, b) =>
          a.Priority > b.Priority ? 1 : b.Priority > a.Priority ? -1 : 0
        )
      );
  }, [props]);
  return (
    <>
      {props.stateList.length &&
        question.map((eel, index) => (
          <DivMenu key={index}>
            <span>{eel.Title}</span>
            <div onClick={() => setOpen(!open)}>
              {!open ? <Up /> : <Dowun />}
            </div>
          </DivMenu>
        ))}
    </>
  );
};

export default ListQuestions;
