import { type ReactNode } from "react";
import { CourseGoalProps } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type Goals = {
  goals: CourseGoalProps[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: Goals) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no goals yet, add some!</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You have too many goals, Don't put too much on your plate
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              description={goal.description}
              onDelete={onDeleteGoal}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
