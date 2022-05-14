require('dotenv').config();
module.exports = {
  plugins: [
    // {
    //   resolve: '@opensumi/gatsby-theme',
    //   options: {
    //     GATrackingId: 'G-63DR4G0WD7',
    //     theme: {
    //       'primary-color': '#9f5fdb'
    //     },
    //     pwa: true,
    //     cname: false,
    //     codeSplit: true
    //   }
    // },
    {
      resolve: `@antv/gatsby-theme-antv`,
      options: {
        // pagesPath: './site/pages',
        GATrackingId: `UA-XXXXXXXXX-X`,
        // antd 主题：https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
        theme: {
          'primary-color': '#9f5fdb',
        },
        pwa: true, // 是否开启 gatsby-plugin-offline
        cname: true, // 是否自动从 siteUrl 中提取 CNAME 文件
        codeSplit: true, // 是否开启 gatsby 按路由的代码分割，默认为 false
      },
    },
  ],
  siteMetadata: {
    title: 'gatsby-doc-template',
    description:
      'gatsby 文档模版',
    siteUrl: 'https://sitecdn.zcycdn.com/f2e-assets/320c6b78-820e-45f9-a030-f596f06ad8ce.jpg',
    logo: {
      img: 'https://sitecdn.zcycdn.com/f2e-assets/320c6b78-820e-45f9-a030-f596f06ad8ce.jpg',
      link: ''
    },
    logoUrl: 'https://sitecdn.zcycdn.com/f2e-assets/320c6b78-820e-45f9-a030-f596f06ad8ce.jpg',
      githubUrl: 'https://github.com/Zian502/gatsby-doc-template.git',
      docsUrl: 'https://github.com/Zian502/gatsby-doc-template/docs',
    navs: [
      {
        slug: 'docs/integrate/overview',
        title: {
          en: 'Documentation',
          zh: '集成文档'
        }
      },
      {
        slug: 'docs/develop/how-to-contribute',
        title: {
          en: 'Development',
          zh: '开发文档'
        }
      }
    ],
    docs: [
      {
        slug: 'integrate/quick-start',
        title: {
          zh: '快速开始',
          en: 'Quick Start'
        },
        order: 1
      },
      {
        slug: 'integrate/universal-integrate-case',
        title: {
          zh: '常见集成场景',
          en: 'Integrate Case'
        },
        order: 2
      },
      {
        slug: 'develop/basic-design',
        title: {
          zh: '基础设计',
          en: 'Basic Design'
        },
        order: 2
      },
      {
        slug: 'develop/module-apis',
        title: {
          zh: '模块 API',
          en: 'Modules API'
        },
        order: 3
      },
      {
        slug: 'develop/sample',
        title: {
          zh: '经典案例',
          en: 'Sample'
        },
        order: 5
      }
    ],
    showDingTalkQRCode: true,
    dingTalkQRCode:'',
    showSearch: false, // 是否展示搜索框
    showChinaMirror: false, // 是否展示国内镜像链接
    showLanguageSwitcher: true, // 用于定义是否展示语言切换
    showGithubCorner: true, // 是否展示角落的 GitHub 图标
    showSearch: false,
    docsearchOptions: {
      appId: 'SOZF8EXD5Z',
      apiKey: '614258d3f6d9bcfde76edcc8e45887af',
      indexName: 'docs'
    },
    redirects: []
  }
};
