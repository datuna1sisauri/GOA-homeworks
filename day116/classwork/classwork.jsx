const web = (
    <ul>
        {Math.random() > 0.5 && <li>Hello</li>}
        <li>{Math.random() > 0.5 ? "helloword" : "goodbye"}</li>
    </ul>
)