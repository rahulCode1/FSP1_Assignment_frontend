const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal show d-block" tabIndex="-1" onClick={onClose}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      <div className="modal-backdrop show" onClick={onClose}></div>
    </>
  );
};

export default Modal;
