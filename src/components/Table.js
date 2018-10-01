import React, {Component} from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tommie</td>
                        <td>Distro</td>
                    </tr>
                    <tr>
                        <td>Jammie</td>
                        <td>Club Owner</td>
                    </tr>
                    <tr>
                        <td>Dre</td>
                        <td>Distro</td>
                    </tr>
                    <tr>
                        <td>Dennis</td>
                        <td>Bartender</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;