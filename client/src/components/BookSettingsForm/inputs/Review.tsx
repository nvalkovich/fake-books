import { Form, InputNumber } from 'antd';
import { SettingsInputs, SettingsInputsLabels } from '../../../types';
import {
    SETTINGS_INPUT_STYLE,
    MIN_INPUT_VALUE,
    INPUT_STEP,
} from '../BookSettingsForm';

const MAX_REVIEW = 10;

const Review = () => (
    <Form.Item
        name={SettingsInputs.reviews}
        label={SettingsInputsLabels.reviews}
    >
        <InputNumber<number>
            style={SETTINGS_INPUT_STYLE}
            min={MIN_INPUT_VALUE}
            max={MAX_REVIEW}
            step={INPUT_STEP}
            stringMode
        />
    </Form.Item>
);

export default Review;
