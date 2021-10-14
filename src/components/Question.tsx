import "../styles/question.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

export function Question({ content, author }: QuestionProps) {
  return (
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={`Avatar de ${author.name}`} />
          <span>{author.name}</span>
        </div>
        <div>Botões</div>
      </footer>
    </div>
  );
}
