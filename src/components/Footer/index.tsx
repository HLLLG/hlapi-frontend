import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
  const defaultMessage = '粤ICP备2024203558号';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'HL接口',
          title: 'HL接口',
          href: 'https://github.com/HLLLG',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined HLLLG/>,
          href: 'https://github.com/HLLLG',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
