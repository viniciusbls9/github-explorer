export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>Forms in ReactJS</p>

      <a href={props.repository.html_url}>
        Acessar repositório
      </a>
    </li>
  );
}