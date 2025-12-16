const massive = ["proggraming","gaming","music"];

const web = (
    <ul>
        {
            massive.map((obj,i) =>(
                <li key = {i}>{obj}</li>
            ))
        }
    </ul>
)