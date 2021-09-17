import React from 'react'
import {Link} from "react-router-dom";
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const { removeFromDom } = props;

    return (
        <table style={{border:"1px solid",width:"100%"}}>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {props.authors.map( (author, i) =>
                    <tr key={author._id}>
                        <td>{author.name}</td>
                        <td>
                            <Link style={{marginRight:"10px"}} to={"/edit/"+author._id}>
                                <button>Edit</button>
                            </Link>
                            <DeleteButton 
                                
                                authorId={author._id} 
                                successCallback={()=>removeFromDom(author._id)}
                            />
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
    
export default AuthorList;