export default function Main(props) {
    return (
        <main className={props.darkmode ? "" : "light"} >
            <h1 className="main-el">Fun facts about React</h1>
            <ul className="list-el">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}
