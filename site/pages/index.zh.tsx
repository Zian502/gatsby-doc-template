import React from 'react';
import SEO from '@opensumi/gatsby-theme/site/components/Seo';
import Banner from '@opensumi/gatsby-theme/site/components/Banner';
import Features from '@opensumi/gatsby-theme/site/components/Features';
import Companies from '@opensumi/gatsby-theme/site/components/Companies';
import Cases from '@opensumi/gatsby-theme/site/components/Cases';
import BannerSVG from '@opensumi/gatsby-theme/site/components/BannerSVG';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

const IndexPage = () => {
  const query = graphql`
    query SiteHomeQuery {
      site {
        siteMetadata {
          logoUrl
        }
      }
    }
  `;
  const { t, i18n } = useTranslation();
  const { site } = useStaticQuery(query);
  const { logoUrl } = site.siteMetadata;

  const features = [
    {
      icon: 'https://sitecdn.zcycdn.com/f2e-assets/320c6b78-820e-45f9-a030-f596f06ad8ce.jpg',
      title: t('gatsby 文档模版'),
      description: t(
        'gatsby 文档模版'
      )
    },
    {
      icon: 'https://sitecdn.zcycdn.com/f2e-assets/320c6b78-820e-45f9-a030-f596f06ad8ce.jpg',
      title: t('gatsby 文档模版'),
      description: t(
        'gatsby 文档模版'
      )
    },
    {
      icon: 'https://sitecdn.zcycdn.com/f2e-assets/320c6b78-820e-45f9-a030-f596f06ad8ce.jpg',
      title: t('gatsby 文档模版'),
      description: t(
        'gatsby 文档模版'
      )
    }
  ];

  const companies = [
    {
      name: 'gatsby 文档模版2',
      img: 'https://sitecdn.zcycdn.com/f2e-assets/320c6b78-820e-45f9-a030-f596f06ad8ce.jpg'
    }
  ];

  const cases = [
    {
      logo:'https://sitecdn.zcycdn.com/f2e-assets/320c6b78-820e-45f9-a030-f596f06ad8ce.jpg',
      title: t('gatsby 文档模版'),
      description: t(
        'gatsby 文档模版'
      ),
      link: '',
      image: 'https://sitecdn.zcycdn.com/f2e-assets/320c6b78-820e-45f9-a030-f596f06ad8ce.jpg'
    },
  ];

  const bannerButtons = [
    {
      text: t('快速开始'),
      link: './docs/integrate/quick-start/web',
      type: 'primary'
    },
    {
      text: t('概览'),
      link: `/${i18n.language}/docs/integrate/overview`
    }
  ];

  return (
    <>
      <SEO title={t('gatsby 文档模版')} lang={i18n.language} />
      <Banner
        coverImage={<BannerSVG />}
        logoUrl={logoUrl}
        title={t('gatsby 文档模版')}
        description={t('gatsby 文档模版')}
        className="banner"
        buttons={bannerButtons}
      />
      <Cases cases={cases} />
      <Features title={t('gatsby 文档模版1')} features={features} />
      <Companies title={t('gatsby 文档模版2')} companies={companies} />
    </>
  );
};

export default IndexPage;
