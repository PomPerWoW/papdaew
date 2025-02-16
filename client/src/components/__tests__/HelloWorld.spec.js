import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import App from '@client/App.vue';

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(App, { props: { msg: 'Hello World' } });
    expect(wrapper.text()).toContain('Hello World');
  });
});
