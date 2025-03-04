const Login = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="text-danger">UserName</label>
                                    <input type="text" className="form-control" id="username"  placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="text-danger">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary mt-3">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;