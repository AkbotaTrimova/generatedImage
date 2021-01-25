import React, {Component} from 'react';
import './App.css'

class AvatarGenerate extends Component {

    constructor(props) {

        super(props);
        this.state = {
            colors: [
                "#1abc9c",
                "#2ecc71",
                "#3498db",
                "#9b59b6",
                "#2c3e50", "#f1c40f",
                "#27ae60",
                "#7f8c8d"
            ],
            selectedColor: '',
        };
        this.name = props.name;
        this.lastname = props.lastname;
    }

    componentDidMount() {
        if (this.props.name) {
            this.getRandomColor()
        }
    }

    getRandomColor() {
        let item = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
        this.setState({
            selectedColor: item,
        })
    }

    render() {
        let initials;
        if (this.props.name) {
            initials = this.props.name.split('')[0].charAt(0).toUpperCase() + this.props.lastname.split('')[0].charAt(0).toUpperCase();
        }

        const styles = {
            backgroundColor: this.state.selectedColor,
            width: '65px',
            height: '65px',
            font: '65px' / 2 + "px Arial",
            color: "#FFF",
            textAlign: 'center',
            lineHeight: '65px',
            borderRadius: '50%'
        }

        return (
            <div>
                <div>
                    <div className='avatar-initials' width='65' height='65' style={styles}>
                        {initials}
                    </div>
                </div>
            </div>
        );
    }
}

export default AvatarGenerate;
