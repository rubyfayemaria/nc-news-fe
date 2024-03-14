import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteComment } from '../../api';

const DeleteComment = ({comment_id, updateComments}) => {

    const handleDelete = () => {
        deleteComment(comment_id)
        .then(() => {
            updateComments();
        })
    }

    return (
        <IconButton 
            aria-label="delete"
            onClick={handleDelete}>
            <DeleteIcon />
        </IconButton>
    )
}

export default DeleteComment