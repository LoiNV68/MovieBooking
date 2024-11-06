import 'bootstrap/dist/css/bootstrap.min.css';

function Main({children}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-3">Test</div>
                <div className="col-9">{children}</div>
            </div>
        </div>
     );
}

export default Main;