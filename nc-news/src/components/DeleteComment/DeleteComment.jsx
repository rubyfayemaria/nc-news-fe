import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteComment } from '../../api';

const DeleteComment = ({comment_id, comments, setComments}) => {
    

    const handleDelete = () => {
        deleteComment(comment_id)
        .then(() => {
            const updatedComments = comments.filter((comment) => {
                return comment.comment_id !== comment_id
            })
            setComments(updatedComments)
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