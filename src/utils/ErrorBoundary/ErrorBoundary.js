import React from 'react';
import {withRouter} from 'react-router-dom'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null}
    }

    refreshHandler = () => {
        this.setState({ error: null, errorInfo: null})
    }

    goBackHandler = () => {
        let self = this
        this.setState({ error:null, errorInfo: null },()=>{
            self.props.history.goBack()
            setTimeout(()=> self.refreshHandler() , 200)
        })
    }

    componentDidCatch(error, info) {
        // api call
        this.setState({ error: error, errorInfo: info, })
        // this.props.errorBoundary({
        //     errorDetail: JSON.stringify({info: info.componentStack}),
        //     remark: null,
        //     statusUpdateUserId: null,
        //     errorStatus: null,
        //     action: "post"
        // })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div className="d-flex align-items-center justify-content-center"
                     style={{ height:"100vh", backgroundColor:"#FFF" }}>
                    <div className="text-center">
                        <summary
                            className="text-center mb-4">
                            <h2>Something went wrong</h2>
                        </summary>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-danger" onClick={this.refreshHandler}> Refresh</button>
                            <button className="btn btn-danger" onClick={this.goBackHandler}> Go Back</button>
                        </div>
                    </div>
                </div>
            )
        }
        return this.props.children;
    }
}
export default withRouter((ErrorBoundary));