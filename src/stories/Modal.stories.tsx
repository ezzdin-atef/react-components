import { Story } from '@storybook/react';
import { Modal, ModelBody } from '../components/Modal';
import { Button } from '../components/Button';

export default {
  title: 'Modal',
  component: Modal,
};

export const Default = () => (
  <Modal title="Model" trigger={<Button lightYellow>Click Here</Button>}>
    {(handleClose) => (
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
          <Button lightRed onClick={handleClose}>
            Close
          </Button>
        </div>
      </div>
    )}
  </Modal>
);
