import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import s from "./learn-card.module.scss";

import { Button, Card, Header, RadioGr, Typography } from "@/components";
import { Loader } from "@/components/ui/loader/loader";
import {
  setSelectedValue,
  toggleShowAnswer,
  useGetDecksQuery,
  useLearnCardsQuery,
  useNextQuestionMutation,
} from "@/services";
import { useAppSelector } from "@/services/store";
const options = [
  { label: "Did not know", value: "1" },
  { label: "Forgot", value: "2" },
  { label: "A lot of thought", value: "3" },
  { label: "Confused", value: "4" },
  { label: "Knew the answer", value: "5" },
];

export const LearnCardPage = () => {
  let [previousCardId, setPreviousCardId] = useState("");
  const { id } = useParams();
  const [showAnswerButton, setShowAnswerButton] = useState(false);
  const hideButton = useAppSelector((state) => state.deckSlice.hideButton);
  const showAnswer = useAppSelector((state) => state.deckSlice.showAnswer);
  const dispatch = useDispatch();
  const radioSelectedValue = useAppSelector(
    (state) => state.deckSlice.radioSelectedValue,
  );

  const [previosData, { isSuccess }] = useNextQuestionMutation();

  previousCardId = previosData.cardId;
  console.log(previousCardId);
  const { isLoading, currentData: data } = useLearnCardsQuery({
    id,
    previousCardId: previosData.cardId,
  });

  const handleShowAnswerClick = () => {
    dispatch(toggleShowAnswer());
  };
  const handleRadioChange = (value) => {
    dispatch(setSelectedValue(value));
  };
  const handleNextQuestionClick = async () => {
    const rating = radioSelectedValue;

    await previosData({
      cardId: data.id,
      grade: +rating,
    }).unwrap();

    //changeHideButton
  };

  console.log(data);
  if (isLoading) return <Loader />;

  return (
    <>
      <Header></Header>
      <span className={s.learnContainer}>
        <Card>
          <Typography variant={"large"}>Learn: </Typography>
          <div>
            <Typography variant={"h3"}>Question: {data.question}</Typography>
            <Typography variant={"body1"} style={{ color: "#808080" }}>
              Number of attempts to answer the question:{" "}
            </Typography>
          </div>
          {!hideButton && (
            <Button fullWidth={true} onClick={handleShowAnswerClick}>
              Show Answer
            </Button>
          )}
          {showAnswer && (
            <>
              <span className={s.answerContainer}>
                <Typography variant={"h3"} style={{ color: "#fff" }}>
                  Answer:
                </Typography>
                <Typography variant={"body1"}>{data.answer}</Typography>
              </span>

              <Typography variant={"h3"} style={{ color: "#fff" }}>
                Rate yourself:
              </Typography>

              <RadioGr
                options={options}
                value={radioSelectedValue}
                onValueChange={handleRadioChange}
                defaultValue={options[0].value}
              ></RadioGr>
              <div>
                <Button fullWidth={true} onClick={handleNextQuestionClick}>
                  Next Question
                </Button>
              </div>
            </>
          )}
        </Card>
      </span>
    </>
  );
};
