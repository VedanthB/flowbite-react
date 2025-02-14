import type { Meta, Story } from '@storybook/react/types-6-0';
import theme from '../../../../lib/theme/default';
import type { ToggleSwitchProps } from './ToggleSwitch';
import { ToggleSwitch } from './ToggleSwitch';

const colors = Object.keys(theme.formControls.toggleSwitch.toggle.checked.color);

export default {
  title: 'Components/FormControls',
  component: ToggleSwitch,
} as Meta;

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const DefaultToggleSwitch = Template.bind({});
DefaultToggleSwitch.storyName = 'Toggle switch';
DefaultToggleSwitch.args = {};
DefaultToggleSwitch.argTypes = {
  color: {
    description: 'Control defaults for colors',
    control: {
      type: 'radio',
      options: [...colors],
    },
  },
};
