import { connect } from 'react-redux';
import Form from '../components/Form.jsx';
import { addItem } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        onClickSubmitItem: item => {
            dispatch(addItem(item))
        }
    }
}

const FormTodo = connect(
    null,
    mapDispatchToProps
)(Form)

export default FormTodo
