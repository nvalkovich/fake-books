import { Flex, Form } from 'antd';
import Likes from './inputs/Likes';
import Review from './inputs/Review';
import Seed, { SeedProps } from './inputs/Seed';
import Language from './inputs/Language';
import { BookSettings } from '../../types';
import { useEffect } from 'react';

export const SETTINGS_INPUT_STYLE = { width: 180 };
export const MIN_INPUT_VALUE = 0;
export const INPUT_STEP = 0.1;

export interface BookSettingsProps {
    settings: BookSettings;
    onChange: (settings: BookSettings) => void;
    onSeedRefresh: SeedProps['onRefresh'];
}

export const BookSettingsForm = ({
                                     settings,
                                     onChange,
                                     onSeedRefresh,
                                 }: BookSettingsProps) => {
    const [form] = Form.useForm<BookSettings>();

    useEffect(() => {
        form.setFieldsValue({ seed: settings.seed, lang: settings.lang });
    }, [form, settings.seed, settings.lang]);

    return (
        <Form
            form={form}
            name="horizontal_login"
            layout="vertical"
            initialValues={settings}
            onValuesChange={(_, values) => onChange(values)}
           
        >
            <Flex gap="middle" align="start" justify="center" vertical={false}>
                <Language />
                <Seed onRefresh={onSeedRefresh} />
                <Likes />
                <Review />
            </Flex>
        </Form>
    );
};
