export default function lista2({imagine,text}) {
    return (
      <div className="lists">
        <ul>
          <li><h5>{imagine + " " + text}</h5></li>
        </ul>
      </div>
    );
}