
import React from 'react';

type NavBarProps = {
    value: number
}
class NavBarOption extends React.Component<NavBarProps> {
    render() {
        return (
            <p className="text-center"> This is option {this.props.value} </p>
        )
    }
    
}

class NavBar extends React.Component {
    renderOption(i: number) {
        return <NavBarOption value={i} />;
        
    }
    render() {
        return (
            <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <div className="columns-3">
                    {this.renderOption(1)}
                    {this.renderOption(2)}
                    {this.renderOption(3)}
                </div>
                hello, my name is navbar
            </div>
        )
    };
}

export default NavBar;