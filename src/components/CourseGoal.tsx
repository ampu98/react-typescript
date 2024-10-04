type CourseGoals = {
  title: string;
  description: string;
  id: number;
  onDelete: (id: number) => void;
};

export default function CourseGoal({
  title,
  description,
  id,
  onDelete,
}: CourseGoals) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
