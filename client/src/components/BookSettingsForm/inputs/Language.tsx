import { Form, Select, SelectProps } from 'antd';
import {
    Langs,
    LangLabels,
    SettingsInputs,
    SettingsInputsLabels,
} from '../../../types';
import { SETTINGS_INPUT_STYLE } from '../BookSettingsForm';

const options: SelectProps['options'] = [
    { value: Langs.en, label: LangLabels[Langs.en] },
    { value: Langs.lv, label: LangLabels[Langs.lv] },
    { value: Langs.es_MX, label: LangLabels[Langs.es_MX] },
];

const Language = () => (
    <Form.Item name={SettingsInputs.lang} label={SettingsInputsLabels.lang}>
        <Select style={SETTINGS_INPUT_STYLE} showSearch options={options} />
    </Form.Item>
);

export default Language;
