import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Jobs</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Tommie</td>
                        <td>Sales Manager</td>
                    </tr>
                    <tr>
                        <td>Will</td>
                        <td>Accountant</td>
                    </tr>
                    <tr>
                        <td>Jammie</td>
                        <td>Club Owner</td>
                    </tr>
                    <tr>
                        <td>Dre</td>
                        <td>Distro</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;