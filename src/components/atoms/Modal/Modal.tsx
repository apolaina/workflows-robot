import { useEffect, useState } from 'react';

type Props = {
    isOpen: boolean;
    onSubmit: () => void;
    onDismiss: () => void;
};

const Modal: React.FC<Props> = ({ isOpen, onSubmit, onDismiss }: Props) => {
    const [show, setShow] = useState<boolean>(isOpen);

    useEffect(() => {
        setShow(isOpen);
    }, [isOpen]);

    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className={`modal ${show ? 'modal-open' : 'hidden'}`}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add your step</h3>
                    <p className="py-4">Complete fields below to add your step</p>
                    <div className="fields"></div>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn" onClick={onSubmit}>
                            Yay!
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
