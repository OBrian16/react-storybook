import React, {Component} from 'react';

    const TableHeader = () => {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                     <th>Job</th>
                 </tr>
            </thead>
        );
    }

    const TableBody = () => { 
        return (
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
        );       
}

    class Table extends Component {
        render() {
            return (
                <table>
                    <TableHeader />
                    <TableBody />
                </table>
            );
        }
    }
export default Table;