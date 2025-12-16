const web = (
    <ul>
        {Math.random() > 0.5 && <li key="2">Goa the best</li>}
        <li key="1">{Math.random() > 0.5 ? "hello" : "bye-bye"}</li>

    </ul>
)