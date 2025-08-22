import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_blocks';
  info: {
    displayName: 'Hero Block';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    personImage: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksSublinkServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sublink_services_s';
  info: {
    displayName: 'Sublink Services ';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    pointsLink: Schema.Attribute.Component<'components.points', true>;
  };
}

export interface BlocksTeamBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_blocks';
  info: {
    displayName: 'Team Block';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    member: Schema.Attribute.Component<'components.team-member', true>;
  };
}

export interface BlocksTestimonialsBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials_blocks';
  info: {
    displayName: 'Testimonials Block';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    review: Schema.Attribute.Component<'components.client-review', true>;
  };
}

export interface ComponentsClientReview extends Struct.ComponentSchema {
  collectionName: 'components_components_client_reviews';
  info: {
    displayName: 'Client Review';
  };
  attributes: {
    clientName: Schema.Attribute.String;
    clientPhoto: Schema.Attribute.Media<'images'>;
    clientPosition: Schema.Attribute.String;
    clientSaying: Schema.Attribute.Text;
  };
}

export interface ComponentsPoints extends Struct.ComponentSchema {
  collectionName: 'components_components_points';
  info: {
    displayName: 'Points';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ComponentsTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_components_team_members';
  info: {
    displayName: 'Team Member';
  };
  attributes: {
    memberEmail: Schema.Attribute.Email;
    memberName: Schema.Attribute.String;
    memberPhone: Schema.Attribute.String;
    memberPhoto: Schema.Attribute.Media<'images'>;
    memberPosition: Schema.Attribute.String;
    memberWhatsApp: Schema.Attribute.String;
  };
}

export interface ElementsDropdownLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_dropdown_links';
  info: {
    displayName: 'Dropdown Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    dropdown: Schema.Attribute.Component<'elements.dropdown-link', true>;
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-block': BlocksHeroBlock;
      'blocks.sublink-services': BlocksSublinkServices;
      'blocks.team-block': BlocksTeamBlock;
      'blocks.testimonials-block': BlocksTestimonialsBlock;
      'components.client-review': ComponentsClientReview;
      'components.points': ComponentsPoints;
      'components.team-member': ComponentsTeamMember;
      'elements.dropdown-link': ElementsDropdownLink;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'layout.header': LayoutHeader;
    }
  }
}
