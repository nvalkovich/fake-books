import { AppstoreOutlined, TableOutlined } from '@ant-design/icons';
import { Space, Switch } from 'antd';
import { View } from '../../types.ts';

interface ViewSwitchProps {
    view: View;
    onChange: (view: View) => void;
}

const ViewSwitch = ({ view, onChange }: ViewSwitchProps) => (
    <Space direction="vertical">
        <Switch
            checkedChildren={<TableOutlined />}
            unCheckedChildren={<AppstoreOutlined />}
            defaultChecked
            value={view === View.table}
            onChange={(isTable) =>
                onChange(isTable ? View.table : View.gallery)
            }
        />
    </Space>
);

export default ViewSwitch;
