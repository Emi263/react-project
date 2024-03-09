function Article(props) {
  console.log(props);
  return (
    <article className="article-1">
      Student Name: {props.student.name}
      <br />
      Student grade: {props.student.grade}
      <br />
      Student age: {props.student.age}
      <br />
      <br />
      <br />
      <br />
    </article>
  );
}

export default Article;
