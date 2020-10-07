import React, {useContext} from 'react';
import Users from '../util/Users';
import Search from './Search';

function Employee() {
    const context = useContext(Users);

    return (
        <main className="container">
            <Search />
            <table className="table table-striped table-responsive-md">
                <thead>
                    <tr>
                        {context.developerState.headings.map(({name}) => {
                            return (
                                <th
                                    className={name.toLowerCase()}
                                    key={name}
                                    onClick={() => {context.sort(name.toLowerCase())}}
                                >
                                    {name}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (
                        context.developerState.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
                            return (
                                <tr key={login.uuid}>
                                    <td className="align-middle"><img src={picture.medium} alt={`${name.first} ${name.last}`} /></td>
                                    <td className="align-middle">{name.first} {name.last}</td>
                                    <td className="align-middle"><a href={'tel:' + phone}>{phone}</a></td>
                                    <td className="align-middle"><a href={'mailto:' + email}>{email}</a></td>
                                    <td className="align-middle">{new Date(dob.date).toLocaleDateString()}</td>
                                </tr>
                            );
                        })
                    ) : ( <div></div> )}
                </tbody>
            </table>
        </main>
    );
}

export default Employee;