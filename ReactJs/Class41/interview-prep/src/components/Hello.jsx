import React from 'react';


// HOC: Higher Order Components

const withLoading = function(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { loading: true };
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({ loading: false })
            }, 3000);
        }

        render() {
            if (this.state.loading) {
                return 'Loading...';
            }
            return (
                <div style={{ border: '1px solid red'}}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}


// Define a class-based component
class Welcome extends React.Component {
  render() {
    return <h1>Hello , React --{this.props.name}</h1>;
  }
}

// function Welcome (props) {
//     return (
//         <h1>Hello , React --{props.name}</h1>
//     )
// }

// const Welcome = ({ name }) => (
//     <h1>Hello , React --{name}</h1>
// );

export default withLoading(Welcome);