import Header from "../components/Header"

const Home = () => {
    return (
        <>
            <section><Header /></section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center text-primary mt-2">Welcome to our website</h1>
                        </div>
                        <div className="col-12">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>SurName</th>
                                        <th>Age</th>
                                        <th>gender</th>
                                        <th>Mobile</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>John</td>
                                        <td>Deo</td>
                                        <td>25</td>
                                        <td>Male</td>
                                        <td>1234567890</td>
                                        <td>USA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home