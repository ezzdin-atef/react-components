import { Story } from '@storybook/react';
import { Modal, ModelBody } from '../components/Modal';
import { Button } from '../components/Button';

export default {
  title: 'Modal',
  component: Modal,
};

var isOpen = true;
const closeModal = () => {
  isOpen = !isOpen;
};

export const Default = () => (
  <>
    <Button lightYellow>Click Here</Button>
    <Modal title="Model" isOpen={isOpen} handleClose={closeModal}>
      <div>
        <ModelBody>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quia
            inventore eum dolores mollitia ad, officia numquam perspiciatis
            illum distinctio illo? Totam eum adipisci dolorem optio soluta ad,
            repellendus labore.
          </p>
        </ModelBody>

        <div className="flex justify-end">
          <Button lightRed onClick={closeModal}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  </>
);
