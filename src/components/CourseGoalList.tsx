import { CourseGoalProps } from "../App";
import CourseGoal from "./CourseGoal";

type Goals = {
  goals: CourseGoalProps[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: Goals) {
  return (
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
  );
}
