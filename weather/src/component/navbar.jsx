// import 'e:/ICET - Icm105/@Project/Weather-app/weather/node_modules/bootstrap/dist/css/bootstrap.min.js'
// import 'e:/ICET - Icm105/@Project/Weather-app/weather/node_modules/bootstrap/dist/js/bootstrap.min.js'

export default function Navbar() {
    return (
        <div className="container">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#Home" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#Features" className="nav-link">Features</a></li>
                    <li className="nav-item"><a href="#Pricing" className="nav-link">Pricing</a></li>
                    <li className="nav-item"><a href="#FAQs" className="nav-link">FAQs</a></li>
                    <li className="nav-item"><a href="#About" className="nav-link">About</a></li>
                </ul>
            </header>
        </div>
    )
}