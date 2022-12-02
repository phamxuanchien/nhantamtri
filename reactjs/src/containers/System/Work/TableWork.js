<table id="TableManageUser">
    <tbody>
        <tr>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Address</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td>
                <input
                    type="text"
                    className="form-control"
                    name="filterEmail"
                    value={filterEmail}
                    onChange={this.onChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    className="form-control"
                    name="filterName"
                    value={filterName}
                    onChange={this.onChange}
                />
            </td>
        </tr>
        {arrUsers && arrUsers.length > 0 &&
            arrUsers.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.email}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.address}</td>
                        <td>
                            <button
                                onClick={() => this.handleEditUser(item)}
                                className="btn-edit"><i className="fas fa-edit"></i></button>
                            <button
                                onClick={() => this.handleDeleteUser(item)}
                                className="btn-delete"><i className="fas fa-trash"></i></button>

                        </td>
                    </tr>
                )
            })
        }


    </tbody>
</table>