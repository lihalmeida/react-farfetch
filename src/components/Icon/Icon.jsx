import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// svgs
import { ReactComponent as iconCaretDownSmall } from 'assets/icons/caret-down-small.svg';
import { ReactComponent as iconHamburguer } from 'assets/icons/hamburguer.svg';
import { ReactComponent as iconSearch } from 'assets/icons/search.svg';
import { ReactComponent as iconUser } from 'assets/icons/user.svg';
import { ReactComponent as iconStar } from 'assets/icons/star.svg';
import { ReactComponent as iconCheckout } from 'assets/icons/checkout.svg'
import { ReactComponent as iconSearchBigGray } from 'assets/icons/search-big-gray.svg'
import { ReactComponent as iconZoomPlus } from 'assets/icons/zoom-plus.svg';
import { ReactComponent as iconCaretDownBig } from 'assets/icons/caret-down-big.svg'
import { ReactComponent as iconCaretDownFilled } from 'assets/icons/caret-down-filled.svg';
import { ReactComponent as iconClose } from 'assets/icons/close.svg';
import { ReactComponent as iconBagWhite } from 'assets/icons/bag-white.svg'
import { ReactComponent as iconStarGray } from 'assets/icons/star-gray.svg';
import { ReactComponent as iconCaretDownFilledGray } from 'assets/icons/caret-down-filled-gray.svg'
import { ReactComponent as iconFacebook } from 'assets/icons/facebook.svg';
import { ReactComponent as iconTwitter } from 'assets/icons/twitter.svg';
import { ReactComponent as iconPinterest } from 'assets/icons/pinterest.svg';
import { ReactComponent as iconGooglePlus } from 'assets/icons/google-plus.svg';
import { ReactComponent as iconEmail } from 'assets/icons/email.svg';
import { ReactComponent as iconPhone } from 'assets/icons/phone.svg'
import { ReactComponent as iconTags } from 'assets/icons/tags.svg';
import { ReactComponent as iconStarRounded } from 'assets/icons/star-rounded.svg';
import { ReactComponent as iconReturns } from 'assets/icons/returns.svg'

export const ICON = {
  iconCaretDownSmall: 'iconCaretDownSmall',
  iconHamburguer: 'iconHamburguer',
  iconSearch: 'iconSearch',
  iconUser: 'iconUser',
  iconStar: 'iconStar',
  iconCheckout: 'iconCheckout',
  iconSearchBigGray: 'iconSearchBigGray',
  iconZoomPlus: 'iconZoomPlus',
  iconCaretDownBig: 'iconCaretDownBig',
  iconCaretDownFilled: 'iconCaretDownFilled',
  iconClose: 'iconClose',
  iconBagWhite: 'iconBagWhite',
  iconStarGray: 'iconStarGray',
  iconCaretDownFilledGray: 'iconCaretDownFilledGray',
  iconFacebook: 'iconFacebook',
  iconTwitter: 'iconTwitter',
  iconPinterest: 'iconPinterest',
  iconGooglePlus: 'iconGooglePlus',
  iconEmail: 'iconEmail',
  iconPhone: 'iconPhone',
  iconTags: 'iconTags',
  iconStarRounded: 'iconStarRounded',
  iconReturns: 'iconReturns',
};

const svgByIcon = {
  [ICON.iconCaretDownSmall]: iconCaretDownSmall,
  [ICON.iconHamburguer]: iconHamburguer,
  [ICON.iconSearch]: iconSearch,
  [ICON.iconUser]: iconUser,
  [ICON.iconStar]: iconStar,
  [ICON.iconCheckout]: iconCheckout,
  [ICON.iconSearchBigGray]: iconSearchBigGray,
  [ICON.iconZoomPlus]: iconZoomPlus,
  [ICON.iconCaretDownBig]: iconCaretDownBig,
  [ICON.iconCaretDownFilled]: iconCaretDownFilled,
  [ICON.iconClose]: iconClose,
  [ICON.iconBagWhite]: iconBagWhite,
  [ICON.iconStarGray]: iconStarGray,
  [ICON.iconCaretDownFilledGray]: iconCaretDownFilledGray,
  [ICON.iconFacebook]: iconFacebook,
  [ICON.iconTwitter]: iconTwitter,
  [ICON.iconPinterest]: iconPinterest,
  [ICON.iconGooglePlus]: iconGooglePlus,
  [ICON.iconEmail]: iconEmail,
  [ICON.iconPhone]: iconPhone,
  [ICON.iconTags]: iconTags,
  [ICON.iconStarRounded]: iconStarRounded,
  [ICON.iconReturns]: iconReturns,
};

export class Icon extends PureComponent {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    icon: PropTypes.oneOf(Object.values(ICON)).isRequired
  };

  static defaultProps = {
    width: 20,
    height: 20
  };

  render() {
    const { width, height, icon } = this.props;
    const Icon = svgByIcon[icon];

    return (
      <Icon width={width} height={height} />
    );
  }
}

export default Icon;
