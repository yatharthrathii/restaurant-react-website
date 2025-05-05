import ReactDOM from 'react-dom';
import './Modal.css';

const Backdrop = () => <div className="backdrop"></div>;

const ModalOverlay = (props) => (
  <div className="modal">
    <div className="content">{props.children}</div>
  </div>
);

const portalElement = document.getElementById('modal-root');

const Modal = (props) => (
  <>
    {ReactDOM.createPortal(<Backdrop />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
  </>
);

export default Modal;
