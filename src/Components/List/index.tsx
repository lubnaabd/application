import React, { useEffect, useState } from "react";
import { DataName, Flex, LeftData, RightData } from "./style";
import data from "./data.json";
import { IDataList, IDataQuestions } from "../../@type/type";
import ListQuestions from "./ListQuestions";

const Index = () => {
  const [state, setstate] = useState<IDataList[]>([]);
  const [List, setList] = useState<IDataList[]>();
  const [name, setName] = useState<string>("Shipping");
  const getQuestion = (name: string) => {
    setName(name);
    setstate((prev) =>
      data.filter((element: IDataList) => element.Name === name)
    );
    console.log(11);
  };
  useEffect(() => {
    setList(
      data.sort((a, b) =>
        a.Priority > b.Priority ? 1 : b.Priority > a.Priority ? -1 : 0
      )
    );
    getQuestion("Shipping");
  }, [List]);
  return (
    <Flex>
      <LeftData>
        {List?.length &&
          List.map((element: IDataList, index: number) => (
            <div key={index}>
              <DataName onClick={() => getQuestion(element.Name)}>
                {element.Name}
              </DataName>
            </div>
          ))}
      </LeftData>
      <RightData>
        <ListQuestions stateList={state} Name={name} />
      </RightData>
    </Flex>
  );
};

export default Index;
