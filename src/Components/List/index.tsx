import React, { useEffect, useState } from "react";
import { DataName, Flex, LeftData, RightData } from "./style";
import data from "./data.json";
import { IDataList, IDataQuestions } from "../../@type/type";
import ListQuestions from "./ListQuestions";

const Index = () => {
  const [state, setstate] = useState<IDataList[]>([]);
  const [List, setList] = useState<IDataList[]>();
  const [name, setName] = useState<string>("Shipping");
  const [question, setQuestion] = useState<IDataQuestions[]>([]);

  const getQuestion = (name: string) => {
    setName(name);
    setstate((prev) =>
      data.filter((element: IDataList) => element.Name === name)
    );
    setQuestion(state[0].Questions)
  };
  useEffect(() => {
    setList(
      data.sort((a, b) =>
        a.Priority > b.Priority ? 1 : b.Priority > a.Priority ? -1 : 0
      )
    );
    setstate((prev) =>
      data.filter((element: IDataList) => element.Name === name)
    );
    setQuestion(state[0].Questions)
    getQuestion("Shipping");
  }, []);
  return (
    <Flex>
      {List?.length &&
        List.map((element: IDataList, index: number) => (
          <div key={index}>
            <LeftData>
              <DataName onClick={() => getQuestion(element.Name)}>
                {element.Name}
              </DataName>

              {console.log(question)}
            </LeftData>
          </div>
        ))}
      <RightData>
        <ListQuestions stateList={question} Name={name} />
      </RightData>
    </Flex>
  );
};

export default Index;
