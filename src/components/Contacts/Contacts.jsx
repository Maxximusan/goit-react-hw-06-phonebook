import PropTypes from "prop-types";
import css from 'components/Contacts/Contacts.module.css'
import { deleteContact, getContacts, getFilter } from '../../Redux/ToolkitSlice'
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
 const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
console.log(filter);
  
  
        const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter));
  

 
  return (
    <ol className={css.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button className={css.item__btn}type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
};



ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  // onDeleteContact: PropTypes.func.isRequired,
};