import { InputNumber, Form } from 'antd';
import { RetweetOutlined } from '@ant-design/icons';
import { SEED_MAX_VALUE } from '../../../utls/seed';
import { SettingsInputs, SettingsInputsLabels } from '../../../types';
import { SETTINGS_INPUT_STYLE, MIN_INPUT_VALUE } from '../BookSettingsForm';

export interface SeedProps {
    onRefresh: () => void;
}

const Seed = ({ onRefresh }: SeedProps) => (
    <Form.Item name={SettingsInputs.seed} label={SettingsInputsLabels.seed}>
        <InputNumber<number>
            style={SETTINGS_INPUT_STYLE}
            min={MIN_INPUT_VALUE}
            max={SEED_MAX_VALUE}
            controls={false}
            addonAfter={
                <span style={{ cursor: 'pointer' }} onClick={onRefresh}>
                    <RetweetOutlined />
                </span>
            }
        />
    </Form.Item>
);

export default Seed;
