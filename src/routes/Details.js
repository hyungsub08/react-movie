import React from "react";

class Detail extends React.Component {
    componentDidMount(props) {
        console.log(props);
        // const { location } = this.props;
        // // this.props에서 location prop을 받아온다는 의미?
        // console.log(location.state);
    }

    render(props) {
        return <span>Hello</span>;
        console.log(props);
    }
}


export default Detail;