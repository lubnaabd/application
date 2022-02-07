import React, { useEffect, useState } from "react";
import { IDataList, IDataQuestions } from "../../@type/type";
import { Wrapper } from "../Container/style";
import { DivMenu, Up, Dowun, Span, Card } from "./style";
interface Iprops {
  stateList: IDataList[];
  Name: string;
}
const ListQuestions = (props: Iprops) => {
  const [question, setQuestion] = useState<IDataQuestions[]>([]);
  const [open, setOpen] = useState<any>({});

  const toggleHide = (index: any) => {
    setOpen({ ...open, [index]: !open[index] });
  };
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
          <DivMenu>
            <Span
              key={index}
              onClick={() => toggleHide(index)}
              open={open[index]}
            >
              <span> {eel.Title}</span>
              <div>{open[index] ? <Up /> : <Dowun />}</div>
            </Span>
              {open[index] && <Card>{eel.Body}</Card>}
          </DivMenu>
        ))}
    </>
  );
};

export default ListQuestions;
