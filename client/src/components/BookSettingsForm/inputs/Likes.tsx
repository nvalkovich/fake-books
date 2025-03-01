import { Form, Slider } from 'antd';
import { SettingsInputs, SettingsInputsLabels } from '../../../types';
import {
    SETTINGS_INPUT_STYLE,
    MIN_INPUT_VALUE,
    INPUT_STEP,
} from '../BookSettingsForm';

const MAX_LIKES = 10;

const Likes = () => (
    <Form.Item name={SettingsInputs.likes} label={SettingsInputsLabels.likes}>
        <Slider
            style={SETTINGS_INPUT_STYLE}
            min={MIN_INPUT_VALUE}
            max={MAX_LIKES}
            step={INPUT_STEP}
        />
    </Form.Item>
);

export default Likes;
