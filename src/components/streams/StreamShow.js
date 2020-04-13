import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchStream(id);   
        this.buidPlayer(); 
    }

    componentDidUpdate() {
        this.buidPlayer();
    }
    
    componentWillUnmount() {
        this.player.destroy();
    }
    

    buidPlayer() {
        if (this.player || !this.props.stream) {
            return;
        }

        const { id } = this.props.match.params;

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }
    

    render() {
        if (!this.props.stream) {
            return <div>....Load!</div>
        }
        
        const { title, Description } = this.props.stream;

        return (
            <div>
              <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />
              <h1>{title}</h1>
              <h5>{Description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);