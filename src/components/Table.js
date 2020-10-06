import React from 'react';
import '../App.css';

function Table() {
  return (
    <main className="container">
        <form>
            <input class="form-control mr-sm-2" type="search" placeholder="Search for an Employee" aria-label="Search" />
        </form>
        <table class="table table-striped table-responsive-md">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="align-middle"><img src="http://placehold.it/100x100" /></td>
                    <td className="align-middle">Wendy Davidson</td>
                    <td className="align-middle"><a href="tel:953-679-4398">953-679-4398</a></td>
                    <td className="align-middle"><a href="mailto:wendy.davidson@example.com">wendy.davidson@example.com</a></td>
                    <td className="align-middle">01/24/1994</td>
                </tr>
                <tr>
                    <td className="align-middle"><img src="http://placehold.it/100x100" /></td>
                    <td className="align-middle">Wendy Davidson</td>
                    <td className="align-middle"><a href="tel:953-679-4398">953-679-4398</a></td>
                    <td className="align-middle"><a href="mailto:wendy.davidson@example.com">wendy.davidson@example.com</a></td>
                    <td className="align-middle">01/24/1994</td>
                </tr>
                <tr>
                    <td className="align-middle"><img src="http://placehold.it/100x100" /></td>
                    <td className="align-middle">Wendy Davidson</td>
                    <td className="align-middle"><a href="tel:953-679-4398">953-679-4398</a></td>
                    <td className="align-middle"><a href="mailto:wendy.davidson@example.com">wendy.davidson@example.com</a></td>
                    <td className="align-middle">01/24/1994</td>
                </tr>
            </tbody>
        </table>
    </main>
  );
}

export default Table;
