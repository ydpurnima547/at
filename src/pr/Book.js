/*function Book({arr}) {
    console.log(arr); //  ['A', 'B', 'C', 'D']
    return (
      <div>
        {arr.map((title) => {
          return <div key={title}>{title*4}</div>;
        })}
      </div>
    );
  }
export default Book; */
function Book(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
      <h2>{post.id}</h2>
        <h3>{post.title}</h3>
        <p>{post.content}hj</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  
 
  export default Book;